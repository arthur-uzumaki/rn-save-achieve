import { MaterialIcons } from '@expo/vector-icons'
import { render, screen } from '@testing-library/react-native'
import { TransactionType } from './transaction-type'

describe('Component: TransactionType', () => {
  it('should be render with transaction type', () => {
    render(
      <TransactionType
        type={{ color: 'red', title: 'Depósito', selected: true, icon: 'add' }}
      />
    )
    const transactionType = screen.getByTestId('transaction-type-id')

    expect(transactionType).toBeTruthy()
  })
})
