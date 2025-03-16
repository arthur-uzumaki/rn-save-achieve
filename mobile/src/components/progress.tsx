import { Text, View } from 'react-native'

interface ProgressProps {
  percentage: number
}

export function Progress({ percentage }: ProgressProps) {
  const width = percentage > 100 ? 100 : percentage
  const value = `${percentage.toFixed(0)}%`
  return (
    <View className="h-7 w-full flex-row items-center overflow-hidden rounded-full bg-gray-400">
      <View
        className="h-7 items-end justify-center rounded-full bg-green-500"
        style={{ width: `${width}%` }}
      >
        {percentage >= 60 && (
          <Text className="mx-5 font-medium text-black text-xs">{value}</Text>
        )}
      </View>

      {percentage < 60 && (
        <Text className="mx-5 font-medium text-white text-xs">{value}</Text>
      )}
    </View>
  )
}
