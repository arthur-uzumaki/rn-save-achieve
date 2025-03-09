import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="h-12 w-full items-center justify-center rounded-sm bg-blue-500"
      activeOpacity={0.8}
      {...rest}
    >
      <Text className="font-medium text-sm text-white uppercase">{title}</Text>
    </TouchableOpacity>
  )
}
