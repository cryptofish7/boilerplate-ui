import { act, renderHook } from '@testing-library/react'
import { CNATIVE } from '@traderjoe-xyz/sdk-core'

import useCurrencyInputAmount from './useCurrencyInputAmount'

describe('useCurrencyInputAmount', () => {
  const currency = CNATIVE.onChain(43114)

  it('returns undefined amountBN with empty amount', () => {
    const { result } = renderHook(() => useCurrencyInputAmount({ currency }))
    expect(result.current.amount).toBe('')
    expect(result.current.amountBN).toBeUndefined()
  })

  it('works with no decimals', () => {
    const { result } = renderHook(() => useCurrencyInputAmount({ currency }))

    const userInput = '11.'
    act(() => {
      result.current.setAmount(userInput)
    })

    expect(result.current.amount).toBe(userInput)
    expect(result.current.amountBN?.toString()).toBe('11000000000000000000')
  })

  it('works with many decimals', () => {
    const { result } = renderHook(() => useCurrencyInputAmount({ currency }))

    const userInput = '0.9959100624558742731'
    act(() => {
      result.current.setAmount(userInput)
    })

    expect(result.current.amount).toBe(userInput)
    expect(result.current.amountBN?.toString()).toBe('995910062455874273')
  })
})
