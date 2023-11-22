import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global'
import { defaultTheme } from '../../styles/themes/default'
import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HomeContainer>
        <FormContainer>
          <label
            htmlFor="task
          "
          >
            Vou Trabalhar em
          </label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
          />

          <datalist id="task-suggestions">
            <option value="projeto 1" />
            <option value="projeto 2" />
            <option value="projeto 3" />
            <option value="projeto Final" />
          </datalist>
          <label htmlFor="minutesAmount">Durante</label>
          <MinutesInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutes.</span>

          <CountdownContainer>
            <span>0</span>
            <span>0</span>
            <Separator>:</Separator>
            <span>0</span>
            <span>0</span>
          </CountdownContainer>

          <StartCountDownButton type="submit" disabled>
            <Play size={24} />
            Começar
          </StartCountDownButton>
        </FormContainer>
      </HomeContainer>
      <GlobalStyle />
    </ThemeProvider>
  )
}
