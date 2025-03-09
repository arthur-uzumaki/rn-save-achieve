import { Text, View } from 'react-native'

interface ProgressProps {
  progress: number
}

export function Progress({ progress }: ProgressProps) {
  const width = progress > 100 ? 100 : progress
  const value = `${progress.toFixed(0)}%`
  return (
    <View className="h-7 w-full flex-row items-center overflow-hidden rounded-full bg-gray-400">
      <View
        className="h-7 items-end justify-center rounded-full bg-gray-500"
        style={{ width: `${width}%` }}
      >
        {progress >= 60 && (
          <Text className="mx-5 font-medium text-black text-xs">{value}</Text>
        )}
      </View>

      {progress < 60 && (
        <Text className="mx-5 font-medium text-white text-xs">{value}</Text>
      )}
    </View>
  )
}
