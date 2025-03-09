import { render, screen } from '@testing-library/react-native'
import { Transactions } from './transactions'

describe('Component: Transactions', () => {
  it('should be render with list transactions', () => {
    const transactions = [
      { amount: 120.5, date: '2025-03-08' },
      { amount: 75.3, date: '2025-03-07' },
      { amount: 200, date: '2025-03-06' },
      { amount: 50, date: '2025-03-05' },
      { amount: 310.8, date: '2025-03-04' },
      { amount: 99.99, date: '2025-03-03' },
      { amount: 150, date: '2025-03-02' },
      { amount: 180.75, date: '2025-03-01' },
      { amount: 60, date: '2025-02-28' },
      { amount: 90.25, date: '2025-02-27' },
    ]
    render(<Transactions transactions={transactions} />)

    const transactionsList = screen.getByTestId('transactions-id')
    expect(transactionsList).toBeTruthy()
  })

  it('should be render with empty transactions', () => {
    render(<Transactions transactions={[]} />)

    const transactionsEmpty = screen.getByText(
      'Nenhuma transação registrado ainda.'
    )
    expect(transactionsEmpty).toBeTruthy()
  })
})
