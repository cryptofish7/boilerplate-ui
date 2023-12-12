import { ChainId } from '@traderjoe-xyz/sdk-core'
import { useEffect, useState } from 'react'
import { Transaction, Transactions } from 'types/transactions'

const RAINBOW_KIT_RECENT_TRANSACTIONS = 'rk-transactions'

interface RecentTransaction {
  [address: string]: Transactions
}

const useGetRecentTransactions = (
  walletAddress: string,
  chainId: ChainId
): Transaction[] => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    const loadTransactions = () => {
      const recentTransactions: RecentTransaction | null = JSON.parse(
        localStorage.getItem(RAINBOW_KIT_RECENT_TRANSACTIONS) || 'null'
      )
      if (recentTransactions?.[walletAddress]?.[chainId]) {
        setTransactions(recentTransactions[walletAddress][chainId])
      } else {
        setTransactions([])
      }
    }

    loadTransactions()

    window.addEventListener('storage', loadTransactions)

    return () => {
      window.removeEventListener('storage', loadTransactions)
    }
  }, [walletAddress, chainId])

  return transactions
}

export default useGetRecentTransactions
