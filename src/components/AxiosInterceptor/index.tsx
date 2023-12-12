import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { dexbarnClient } from 'constants/dexbarn'
import React, { useEffect } from 'react'

const AxiosInterceptor = ({
  children
}: React.PropsWithChildren): JSX.Element => {
  useEffect(() => {
    const onRequest = (
      config: InternalAxiosRequestConfig<any>
    ): InternalAxiosRequestConfig<any> => {
      return config
    }
    const onRequestError = (error: AxiosError): Promise<AxiosError> => {
      console.error(`[request error] [${JSON.stringify(error)}]`)
      // TODO - show popup iff !axios.isCancel(error)
      return Promise.reject(error)
    }
    const onResponse = (response: AxiosResponse): AxiosResponse => {
      return response
    }
    const onResponseError = (error: AxiosError): Promise<AxiosError> => {
      console.error(`[response error] [${JSON.stringify(error)}]`)
      // TODO - show popup iff !axios.isCancel(error)
      return Promise.reject(error)
    }
    const responseInterceptor = dexbarnClient.interceptors.response.use(
      onResponse,
      onResponseError
    )
    const requestInterceptor = dexbarnClient.interceptors.request.use(
      onRequest,
      onRequestError
    )
    return () => {
      dexbarnClient.interceptors.response.eject(responseInterceptor)
      dexbarnClient.interceptors.response.eject(requestInterceptor)
    }
  }, [])

  return <>{children}</>
}

export default AxiosInterceptor
