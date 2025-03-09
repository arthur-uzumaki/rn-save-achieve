import { FlatList, Text, View } from 'react-native'
import { Transaction, type TransactionProps } from './transaction'

export type TransactionsProps = TransactionProps[]

interface Props {
  transactions: TransactionsProps
}

export function Transactions({ transactions }: Props) {
  return (
    <View className="mt-10 flex-1">
      <Text className="border-b border-b-gray-400 pb-3 font-medium text-base text-white">
        Última transação
      </Text>

      <FlatList
        testID="transactions-id"
        data={transactions}
        renderItem={({ item }) => <Transaction transactions={item} />}
        contentContainerClassName="py-6 gap-4"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text className="font-regular text-gray-300 text-sm">
            Nenhuma transação registrado ainda.
          </Text>
        )}
      />
    </View>
  )
}
