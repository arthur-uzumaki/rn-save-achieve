import clsx from 'clsx'
import { Pressable, type PressableProps, Text } from 'react-native'
import { currencyFormat } from '~/utils/currency-format'

interface TransactionProps {
  date: string
  amount: number
}

interface Props extends PressableProps {
  transactions: TransactionProps
}

export function Transaction({ transactions, ...rest }: Props) {
  return (
    <Pressable
      className="h-16 w-full flex-row items-center justify-between rounded-sm border border-gray-400 bg-gray-500 p-4 "
      {...rest}
    >
      <Text
        className={clsx('font-regular text-sm', {
          'text-red-500': transactions.amount < 0,
          'text-green-500': transactions.amount > 0,
        })}
      >
        {transactions.amount < 0 ? '-' : '+'}
        {currencyFormat(transactions.amount).replace('-', '')}
      </Text>

      <Text className="font-regular text-gray-300 text-sm">
        {transactions.date}
      </Text>
    </Pressable>
  )
}
