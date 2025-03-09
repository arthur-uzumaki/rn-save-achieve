import { fireEvent, render, screen } from '@testing-library/react-native'
import { Button } from './button'

describe('Component:Button', () => {
  it('should be render the  button correct title', () => {
    render(<Button title="Click me" />)

    expect(screen.getByText('Click me')).toBeTruthy()
  })

  it('should be get function  onPress to the be pressed', () => {
    const onPress = jest.fn()

    render(<Button title="Click me" onPress={onPress} />)

    fireEvent.press(screen.getByText('Click me'))
    expect(onPress).toHaveBeenCalledTimes(1)
  })
})
