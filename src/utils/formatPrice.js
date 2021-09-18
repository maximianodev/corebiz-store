export const formatPrice = (number) => {
  if (!number) return ""

  let formatValue = (number / 100)?.toFixed(2)?.replace('.', ',')
  return `R$ ${formatValue}`
}