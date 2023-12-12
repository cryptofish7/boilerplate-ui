import { Currency } from '@traderjoe-xyz/sdk-core'
import { useMemo, useState } from 'react'
import { parseUnits } from 'viem'

interface UseCurrencyInputAmountProps {
  currency?: Currency
}

export interface UseCurrencyInputAmountResult {
  amount: string
  setAmount: (amount: string) => void
  amountBN?: bigint
}

const useCurrencyInputAmount = ({
  currency
}: UseCurrencyInputAmountProps): UseCurrencyInputAmountResult => {
  const [amount, setAmount] = useState('')
  const amountBN = useMemo(() => {
    return convertInputAmountToBigInt(amount, currency?.decimals)
  }, [currency, amount])
  return {
    amount,
    amountBN,
    setAmount
  }
}

export default useCurrencyInputAmount

export const convertInputAmountToBigInt = (
  amount: string,
  decimals?: number
): bigint | undefined => {
  if (!decimals || !amount || isNaN(Number(amount))) {
    return undefined
  }
  const splittedAmount = amount.split('.')
  let nbIntegral = 0
  let nbDecimalPlaces = 0
  if (splittedAmount && splittedAmount.length === 2) {
    nbIntegral = splittedAmount[0].length
    nbDecimalPlaces = splittedAmount[1].length
  }
  return nbDecimalPlaces > decimals
    ? parseUnits(
        amount.slice(0, 1 + nbIntegral + decimals) as `${number}`,
        decimals
      )
    : parseUnits(amount as `${number}`, decimals)
}
