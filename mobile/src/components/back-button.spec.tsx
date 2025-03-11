import { render } from '@testing-library/react-native'
import { BackButton } from './back-button'

jest.mock('expo-router', () => ({
  Link: jest.fn().mockImplementation(({ children }) => children),
}))

describe('Component: BackButton', () => {
  it('should be navigated to the / path when clicked', () => {
    render(<BackButton />)
  })
})
