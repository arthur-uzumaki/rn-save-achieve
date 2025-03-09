import { MaterialIcons } from '@expo/vector-icons'
import clsx from 'clsx'
import {
  type ColorValue,
  Pressable,
  type PressableProps,
  Text,
} from 'react-native'

interface TransactionTypeProps {
  title: string
  icon: keyof typeof MaterialIcons.glyphMap
  color: ColorValue
  selected: boolean
}

interface Props extends PressableProps {
  type: TransactionTypeProps
}

export function TransactionType({ type, ...rest }: Props) {
  return (
    <Pressable
      testID="transaction-type-id"
      className={clsx(
        'flex-row items-center gap-2 rounded-sm bg-gray-400 px-4 py-2',
        {
          'opacity-100': type.selected === true,
          'opacity-50': !type.selected,
        }
      )}
      {...rest}
    >
      <MaterialIcons name={type.icon} color={type.color} size={16} />
      <Text className="font-medium text-sm text-white">{type.title}</Text>
    </Pressable>
  )
}
