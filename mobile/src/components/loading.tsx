import { ActivityIndicator } from 'react-native'

export function Loading() {
  return (
    <ActivityIndicator
      testID="loading"
      className="flex-1 items-center justify-center bg-gray-600"
    />
  )
}
