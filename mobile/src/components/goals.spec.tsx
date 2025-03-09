import { MaterialIcons } from '@expo/vector-icons'
import { fireEvent, render, screen } from '@testing-library/react-native'
import { Goals, type GoalsProps } from './goals'

jest.mock('@expo/vector-icons', () => ({
  MaterialIcons: jest.fn(() => null),
}))

const goals: GoalsProps[] = [
  {
    id: '1',
    name: 'Aprender TypeScript',
    current: 30,
    total: 100,
  },
  {
    id: '2',
    name: 'Ler um livro por mês',
    current: 2,
    total: 12,
  },
  {
    id: '3',
    name: 'Economizar dinheiro',
    current: 500,
    total: 5000,
  },
  {
    id: '4',
    name: 'Fazer exercícios físicos',
    current: 15,
    total: 30,
  },
]

describe('Component: Goals', () => {
  it('should be render goals list', () => {
    render(
      <Goals goals={goals} onAdd={() => jest.fn()} onPress={() => jest.fn()} />
    )

    const goalsList = screen.getByTestId('goals-list')
    expect(goalsList).toBeTruthy()
  })

  it('should be get function onAdd when press add button', () => {
    const onAdd = jest.fn()

    render(<Goals goals={goals} onAdd={onAdd} onPress={() => jest.fn()} />)
    const addButton = screen.getByTestId('add-button')

    fireEvent.press(addButton)
    expect(onAdd).toHaveBeenCalledTimes(1)
  })

  it('should be get function onPress when press add button', () => {
    const onPress = jest.fn()

    render(<Goals goals={goals} onAdd={() => {}} onPress={onPress} />)
    const clickOnPress = screen.getByTestId('goal-2')

    fireEvent.press(clickOnPress)
    expect(onPress).toHaveBeenCalledTimes(1)
  })
})
