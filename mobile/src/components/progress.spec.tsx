import { render, screen } from '@testing-library/react-native'
import { Progress } from './progress'

describe('Component: Progress', () => {
  it('should be rende with progress 80%', () => {
    render(<Progress progress={80} />)

    const progress = screen.getByText('80%')
    expect(progress).toBeTruthy()
  })

  it('should be rende with progress 20%', () => {
    render(<Progress progress={20} />)

    const progress = screen.getByText('20%')
    expect(progress).toBeTruthy()
  })
})
