import { View } from 'react-native'
import { theme } from '~/theme'
import { TransactionType } from './transaction-type'

type TransactionTypeSelect = 'up' | 'down'

interface TransactionTypeSelectProps {
  selected: TransactionTypeSelect
  onchange: (type: TransactionTypeSelect) => void
}

export function TransactionTypeSelect({
  onchange,
  selected,
}: TransactionTypeSelectProps) {
  return (
    <View className="flex-row gap-4">
      <TransactionType
        type={{
          icon: 'add',
          title: 'Depósito',
          color: theme.colors.green[500],
          selected: selected === 'up',
        }}
        onPress={() => onchange('up')}
      />
      <TransactionType
        type={{
          icon: 'remove',
          title: 'Saque',
          color: theme.colors.red[500],
          selected: selected === 'down',
        }}
        onPress={() => onchange('down')}
      />
    </View>
  )
}
