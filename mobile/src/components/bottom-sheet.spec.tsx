import { render, screen } from '@testing-library/react-native'
import { BottomSheetRn } from './bottom-sheet'
import { Input } from './input'

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')

  return {
    ...Reanimated,
    useReducedMotion: jest.fn(() => false), // Mock da função problematica
  }
})

describe('Component: BottomSheet', () => {
  it('should render with bottom sheet title', () => {
    render(
      <BottomSheetRn
        title="Nova meta"
        snapPoints={[0.01, 284]}
        onClose={jest.fn()}
      >
        <Input placeholder="Valor" keyboardType="numeric" />
      </BottomSheetRn>
    )

    const title = screen.getByText('Nova meta')
    expect(title).toBeTruthy()
  })
})
