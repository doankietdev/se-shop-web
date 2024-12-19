export const formatCash = (number) => {
  if (number === null || number === undefined) return ''
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    currencyDisplay: 'code'
  }).format(number)
}
