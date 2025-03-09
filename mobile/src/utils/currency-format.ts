export function currencyFormat(value: number) {
  return value.toLocaleString('pt-br', {
    currency: 'BRL',
    style: 'currency',
  })
}
