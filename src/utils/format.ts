import Numeral from 'numeral'
import { parseUnits } from 'viem'

const priceFormatter = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  minimumFractionDigits: 2,
  style: 'currency'
})

const toK = (num: string) => {
  return Numeral(num).format('0.[00]a')
}

interface FormattedNumOptions {
  allowDecimalsOver1000?: boolean
  allowSmallDecimals?: boolean
  places?: number
  usd?: boolean
}

export const formattedNum = (
  number: number | string,
  options?: FormattedNumOptions
) => {
  const {
    allowDecimalsOver1000 = false,
    allowSmallDecimals = false,
    places = 5,
    usd = false
  } = options || {}

  if (
    (typeof number === 'number' && isNaN(number)) ||
    number === '' ||
    number === undefined ||
    number === null
  ) {
    return usd ? '$0.00' : '0'
  }
  const num = typeof number === 'string' ? parseFloat(number) : number

  if (num > 500_000_000) {
    return (usd ? '$' : '') + toK(num.toFixed(0))
  }

  if (num < -500_000_000) {
    return `-${usd ? '$' : ''}${toK((num * -1).toFixed(0))}`
  }

  if (num === 0) {
    return usd ? '$0' : '0'
  }

  if (!allowSmallDecimals && num < 0.0001 && num > 0) {
    return usd ? '< $0.01' : places === 0 ? '< 0.01' : '< 0.0001'
  }

  if (num > 1000) {
    if (allowDecimalsOver1000) {
      return usd
        ? '$' + Number(parseFloat(String(num)).toFixed(places))
        : '' + Number(parseFloat(String(num)).toFixed(places))
    } else {
      return usd
        ? '$' + Number(parseFloat(String(num)).toFixed(0)).toLocaleString()
        : '' + Number(parseFloat(String(num)).toFixed(0)).toLocaleString()
    }
  }

  if (num < -1000) {
    const val = allowDecimalsOver1000
      ? Number(parseFloat(String(num * -1)).toFixed(places))
      : Number(parseFloat(String(num * -1)).toFixed(0)).toLocaleString()
    return `-${usd ? '$' : ''}${val}`
  }

  if (usd) {
    if (num < 0.1) {
      return '$' + Number(parseFloat(String(num)).toFixed(4))
    } else {
      const usdString = priceFormatter.format(num)
      return '$' + usdString.slice(1, usdString.length)
    }
  }

  // double parseFloat wrap needed to remove trailing 0s
  return parseFloat(parseFloat(String(num)).toFixed(places)).toString()
}

export const convertStringToBN = (
  value?: string,
  decimals = 18
): bigint | undefined => {
  if (!value) return undefined
  try {
    return parseUnits(value as `${number}`, decimals)
  } catch {
    return undefined
  }
}
