import { forwardRef } from 'react'
import { Text, View } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import Bottom, { type BottomSheetProps } from '@gorhom/bottom-sheet'

import { theme } from '~/theme'

export interface Props extends BottomSheetProps {
  onClose: VoidFunction
  title: string
  snapPoints: number[]
}

export const BottomSheet = forwardRef<Bottom, Props>(
  ({ children, onClose, snapPoints, title }, ref) => {
    return (
      <Bottom
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{
          borderWidth: 1,
          borderColor: theme.colors.gray[400],
          backgroundColor: theme.colors.gray[700],
        }}
        handleComponent={() => null}
        ref={ref}
      >
        <View className="gap-4 p-8">
          <View className="flex-row">
            <Text className="flex-1 font-medium text-base text-white">
              {title}
            </Text>

            <MaterialIcons
              name="close"
              size={24}
              color={theme.colors.gray[300]}
              onPress={onClose}
            />
          </View>
          {children}
        </View>
      </Bottom>
    )
  }
)
