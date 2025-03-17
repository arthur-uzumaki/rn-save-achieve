import type BottomSheet from '@gorhom/bottom-sheet'
import dayjs from 'dayjs'
import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useRef, useState } from 'react'
import { Keyboard, Text, View } from 'react-native'
import Toast from 'react-native-toast-message'
import { BackButton } from '~/components/back-button'
import { BottomSheetRn } from '~/components/bottom-sheet'
import { Button } from '~/components/button'
import { Header } from '~/components/header'
import { Input } from '~/components/input'
import { Loading } from '~/components/loading'
import { Progress } from '~/components/progress'
import type { TransactionProps } from '~/components/transaction'
import { TransactionType } from '~/components/transaction-type'
import { TransactionTypeSelect } from '~/components/transaction-type-select'
import { Transactions } from '~/components/transactions'
import { currencyFormat } from '~/utils/currency-format'
import { mocks } from '~/utils/mocks'

interface Details {
  name: string
  total: string
  current: string
  percentage: number
  transactions: TransactionProps[]
}

export default function Details() {
  const [goalDetails, setGoalDetails] = useState<Details>({} as Details)
  const [isLoading, setIsLoading] = useState(true)
  const [type, setType] = useState<'up' | 'down'>('up')
  const [amount, setAmount] = useState('')

  const searchParams = useLocalSearchParams<{ id: string }>()
  const goalId = Number(searchParams.id)

  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand()
  const handleBottomSheetClose = () => bottomSheetRef.current?.close()

  async function handleNewTransaction() {
    try {
      if (!amount.trim()) {
        return Toast.show({
          type: 'info',
          text1: 'Preenche o formulário',
        })
      }

      let amountAsNumber = Number(amount.replace(',', '.'))

      if (Number.isNaN(amountAsNumber)) {
        return Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Valor inválido.',
        })
      }

      if (type === 'down') {
        amountAsNumber = amountAsNumber * -1
      }

      console.log({ goalId, amount: amount })
      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: 'Transação registrado!',
      })

      handleBottomSheetClose()
      Keyboard.dismiss()

      setAmount('')
      setType('up')
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Não foi fazer a transação',
      })
    }
  }

  function fetchDetails() {
    try {
      if (goalId) {
        const goal = mocks.goal
        const transactions = mocks.transactions

        if (!goal || !transactions) {
          return router.back()
        }

        setGoalDetails({
          name: goal.name,
          current: currencyFormat(goal.current),
          total: currencyFormat(goal.total),
          percentage: (goal.current / goal.total) * 100,
          transactions: transactions.map(item => ({
            ...item,
            date: dayjs(item.created_at).format('DD/MM/YYYY [às] HH:mm'),
          })),
        })
        setIsLoading(false)
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Ao busca os detalhes da meta.',
      })
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetchDetails()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <View className="flex-1 p-8 pt-12">
      <BackButton />

      <Header
        title={goalDetails.name}
        subtitle={`${goalDetails.current} de ${goalDetails.total}`}
      />

      <Progress percentage={goalDetails.percentage} />

      <Transactions transactions={goalDetails.transactions} />

      <Button title="Nova transação" onPress={handleBottomSheetOpen} />

      <BottomSheetRn
        ref={bottomSheetRef}
        title="Nova transação"
        snapPoints={[0.01, 284]}
        onClose={handleBottomSheetClose}
      >
        <TransactionTypeSelect onchange={setType} selected={type} />

        <Input
          placeholder="Valor"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <Button title="Confirmar" onPress={handleNewTransaction} />
      </BottomSheetRn>
    </View>
  )
}
