import { Platform, TextInput, type TextInputProps } from 'react-native'
import { theme } from '~/theme'

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      testID="input"
      className="h-14 w-full rounded-lg border border-gray-400 p-4 font-regular text-base text-white"
      placeholderTextColor={theme.colors.gray[300]}
      cursorColor={theme.colors.blue[500]}
      selectionColor={
        Platform.OS === 'ios' ? theme.colors.blue[500] : undefined
      }
      {...rest}
    />
  )
}
