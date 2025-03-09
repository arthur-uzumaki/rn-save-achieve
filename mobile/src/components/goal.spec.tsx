import { render, screen } from '@testing-library/react-native'
import { Goal } from './goal'

describe('Component: Goal', () => {
  it('should be render the goal name', () => {
    render(<Goal goal={{ name: 'macbook', current: 20000, total: 50000 }} />)

    const name = screen.getByText('macbook')
    expect(name).toBeTruthy()
  })
})
