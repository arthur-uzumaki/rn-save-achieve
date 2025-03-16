import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'
import { currencyFormat } from '~/utils/currency-format'
import { Progress } from './progress'

export interface GoalProps {
  name: string
  current: number
  total: number
}

interface Props extends TouchableOpacityProps {
  goal: GoalProps
}

export function Goal({ goal, ...rest }: Props) {
  const progress = (goal.current / goal.total) * 100
  return (
    <TouchableOpacity
      className="h-44 w-40 rounded-lg bg-gray-500 p-4"
      activeOpacity={0.7}
      {...rest}
    >
      <Text className="mb-3 font-bold text-lg text-white">{goal.name}</Text>

      <Text className="flex-1 font-regular text-gray-300 text-sm ">
        {currencyFormat(goal.total)}
      </Text>

      <Progress percentage={progress} />
    </TouchableOpacity>
  )
}
