import { useToast, UseToastOptions } from '@chakra-ui/react'
import Popup from 'components/Popup'
import { useCallback } from 'react'
import React from 'react'
import { usePublicClient } from 'wagmi'

import useActiveChain from './useActiveChain'

interface TransactionToastProps {
  description: string
  hash: `0x${string}`
  confirmations?: number
}

const useTransactionToast = () => {
  const toast = useToast()
  const publicClient = usePublicClient()
  const { blockExplorers } = useActiveChain()

  return useCallback(
    ({ confirmations, description, hash }: TransactionToastProps) => {
      const requestPromise = publicClient
        .waitForTransactionReceipt({ confirmations, hash })
        .then((receipt) => {
          if (receipt.status !== 'success') {
            return Promise.reject('Transaction failed')
          }
          return receipt
        })

      const renderPopup = (props: UseToastOptions): React.ReactNode => (
        <Popup
          blockExplorer={blockExplorers?.default}
          summary={description}
          {...props}
        />
      )

      toast.promise(requestPromise, {
        error: {
          duration: 6500,
          id: hash,
          position: 'top-right',
          render: renderPopup
        },
        loading: {
          duration: null,
          id: hash,
          position: 'top-right',
          render: renderPopup
        },
        success: {
          duration: 6500,
          id: hash,
          position: 'top-right',
          render: renderPopup
        }
      })
    },
    [toast, publicClient, blockExplorers]
  )
}

export default useTransactionToast
