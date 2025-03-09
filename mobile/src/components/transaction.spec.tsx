import { render, screen } from '@testing-library/react-native'
import { Transaction } from './transaction'

describe('Component: Transaction', () => {
  it('should be render with transaction amount bigger  0', () => {
    render(<Transaction transactions={{ date: '23/04/2025', amount: 50 }} />)

    const transaction = screen.getByText('+R$ 50,00')
    expect(transaction).toBeTruthy()
  })

  it('should be render with transaction amount less 0', () => {
    render(<Transaction transactions={{ date: '23/04/2025', amount: -59 }} />)

    const transaction = screen.getByText('-R$ 59,00')
    expect(transaction).toBeTruthy()
  })
})
