import { render, screen } from '@testing-library/react-native'
import { Input } from './input'

describe('Component: Input', () => {
  it('should be render with correct placeholder', () => {
    render(<Input placeholder="Digite seu nome." />)
    const placeholder = screen.getByPlaceholderText('Digite seu nome.')

    expect(placeholder).toBeTruthy()
  })

  it('should be render if keyboardType "email-address" for email', () => {
    render(
      <Input placeholder="Digite seu email." keyboardType="email-address" />
    )
    const input = screen.getByPlaceholderText('Digite seu email.')

    expect(input.props.keyboardType).toBe('email-address')
  })
})
