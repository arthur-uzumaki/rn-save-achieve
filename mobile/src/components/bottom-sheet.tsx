import { type ReactNode, forwardRef } from 'react'
import { Text, View } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'

import { theme } from '~/theme'

export interface Props {
  onClose: VoidFunction
  title: string
  snapPoints: number[]
  children: ReactNode
}

export const BottomSheetRn = forwardRef<BottomSheet, Props>(
  ({ children, onClose, snapPoints, title }, ref) => {
    return (
      <BottomSheet
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
        <BottomSheetView className="gap-4 p-8">
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
        </BottomSheetView>
      </BottomSheet>
    )
  }
)
