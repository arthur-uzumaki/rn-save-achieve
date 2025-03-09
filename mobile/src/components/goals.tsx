import { MaterialIcons } from '@expo/vector-icons'
import { ScrollView, TouchableOpacity } from 'react-native'
import { theme } from '~/theme'
import { Goal } from './goal'

export interface GoalsProps {
  id: string
  name: string
  current: number
  total: number
}

interface Props {
  goals: GoalsProps[]
  onPress: (id: string) => void
  onAdd: () => void
}

export function Goals({ goals, onAdd, onPress }: Props) {
  return (
    <ScrollView
      className="max-h-44 w-full"
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="gap-4"
    >
      <TouchableOpacity
        className="max-h-44 w-16 items-center justify-center rounded-lg bg-green-500"
        onPress={onAdd}
      >
        <MaterialIcons name="add" color={theme.colors.black} size={36} />
      </TouchableOpacity>

      {goals.map(goal => (
        <Goal key={goal.id} goal={goal} onPress={() => onPress(goal.id)} />
      ))}
    </ScrollView>
  )
}
