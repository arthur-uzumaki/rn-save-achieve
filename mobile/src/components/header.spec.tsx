import { render, screen } from '@testing-library/react-native'
import { Header } from './header'

describe('Component: Header', () => {
  it('should render the title and subtitle', () => {
    render(
      <Header
        title="Suas metas"
        subtitle="Poupe hoje para colher os frutos amanhã."
      />
    )
    const title = screen.getByText('Suas metas')
    const subtitle = screen.getByText(
      'Poupe hoje para colher os frutos amanhã.'
    )

    expect(title).toBeTruthy()
    expect(subtitle).toBeTruthy()
  })
})
