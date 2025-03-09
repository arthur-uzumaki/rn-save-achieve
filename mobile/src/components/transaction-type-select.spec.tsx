import { render, screen } from '@testing-library/react-native'
import { TransactionTypeSelect } from './transaction-type-select'

jest.mock('@expo/vector-icons', () => ({
  MaterialIcons: jest.fn(() => null),
}))

describe('Component: TransactionTypeSelect', () => {
  it('should be render transaction type select when it is deposit', () => {
    render(<TransactionTypeSelect selected="up" onchange={() => jest.fn()} />)

    const title = screen.getByText('Depósito')

    expect(title).toBeTruthy()
  })
  it('should be render transaction type select when it is sake', () => {
    render(<TransactionTypeSelect selected="down" onchange={() => jest.fn()} />)

    const title = screen.getByText('Saque')

    expect(title).toBeTruthy()
  })
})
