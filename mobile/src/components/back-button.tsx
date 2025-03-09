import { MaterialIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { theme } from '~/theme'

export function BackButton() {
  return (
    <Link href={'/'}>
      <MaterialIcons name="arrow-back" size={36} color={theme.colors.white} />
    </Link>
  )
}
