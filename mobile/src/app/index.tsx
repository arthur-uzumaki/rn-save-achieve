import { useEffect, useRef, useState } from 'react'
import { Keyboard, View } from 'react-native'

import type BottomSheet from '@gorhom/bottom-sheet'

import dayjs from 'dayjs'
import { router } from 'expo-router'
import Toast from 'react-native-toast-message'
import { BottomSheetRn } from '~/components/bottom-sheet'
import { Button } from '~/components/button'
import { Goals, type GoalsProps } from '~/components/goals'
import { Header } from '~/components/header'
import { Input } from '~/components/input'
import { Transactions, type TransactionsProps } from '~/components/transactions'
import { mocks } from '~/utils/mocks'

export default function Index() {
  const [goals, setGoals] = useState<GoalsProps[]>([])
  const [transactions, setTransactions] = useState<TransactionsProps>([])
  const [name, setName] = useState('')
  const [total, setTotal] = useState('')

  const bottomSheetRef = useRef<BottomSheet>(null)
  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand()
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)

  function handleDetails(id: string) {
    router.navigate(`/details/${id}`)
  }

  async function handleCreate() {
    try {
      if (!name.trim() || !total.trim()) {
        return Toast.show({
          type: 'info',
          text1: 'Colocar todos os campos.',
        })
      }

      const totalAsNumber = Number(total.toString().replace(',', '.'))

      if (Number.isNaN(totalAsNumber)) {
        return Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Valor inválido.',
        })
      }
      console.log({ name, total: totalAsNumber })
      Keyboard.dismiss()
      handleBottomSheetClose()

      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: 'Meta cadastrada!',
      })

      setName('')
      setTotal('')
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Não foi possível cadastrar.',
      })
    }
  }

  async function fetchGoals() {
    try {
      const response = mocks.goals
      setGoals(response)
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Ao buscar os dados',
      })
    }
  }

  async function fetchTransactions() {
    try {
      const response = mocks.transactions
      console.log({ response })

      setTransactions(
        response.map(item => ({
          ...item,
          date: dayjs(item.created_at).format('DD/MM/YYYY [ás] HH:mm'),
        }))
      )
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Ao buscar os dados',
      })
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetchGoals()
    fetchTransactions()
  }, [])

  return (
    <View className="flex-1 p-8">
      <Header
        title="Sua metas"
        subtitle="Poupe hoje pra colher os frutos amanhã."
      />

      <Goals
        goals={goals}
        onAdd={handleBottomSheetOpen}
        onPress={handleDetails}
      />

      <Transactions transactions={transactions} />
      <BottomSheetRn
        ref={bottomSheetRef}
        snapPoints={[0.01, 284]}
        title="Nova meta"
        onClose={handleBottomSheetClose}
      >
        <Input
          placeholder="Nome da meta "
          value={name}
          onChangeText={setName}
        />

        <Input
          placeholder="Valor"
          keyboardType="numeric"
          value={total}
          onChangeText={setTotal}
        />

        <Button title="Criar" onPress={handleCreate} />
      </BottomSheetRn>
    </View>
  )
}
