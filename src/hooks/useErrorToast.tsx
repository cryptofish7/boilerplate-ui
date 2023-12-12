import { ToastId, useToast } from '@chakra-ui/react'
import Popup from 'components/Popup'
import { useCallback } from 'react'
import React from 'react'

const useErrorToast = () => {
  const addToast = useToast()

  return useCallback(
    (title: string, subtitle: string, id?: ToastId) => {
      addToast({
        id,
        position: 'top-right',
        render: (props) => (
          <Popup
            {...props}
            summary={title}
            subtitle={subtitle}
            status="error"
            duration={6500}
          />
        )
      })
    },
    [addToast]
  )
}

export default useErrorToast
