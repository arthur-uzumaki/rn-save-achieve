import { Text, View } from 'react-native'

interface HeaderProps {
  title: string
  subtitle: string
}

export function Header({ subtitle, title }: HeaderProps) {
  return (
    <View className="mt-14 mb-12">
      <Text className="font-bold text-4xl text-white">{title}</Text>
      <Text className="font-regular text-lg text-white">{subtitle}</Text>
    </View>
  )
}
