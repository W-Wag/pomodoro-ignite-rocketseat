import { ThemeProvider } from 'styled-components'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
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

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesAmount: z
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 05 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const task = watch('task')
  const isSubmitDisabled = !task
  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
    reset()
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <HomeContainer>
        <form onSubmit={handleSubmit(handleCreateNewCycle)}>
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
              {...register('task')}
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
              {...register('minutesAmount', { valueAsNumber: true })}
            />

            <span>minutes.</span>

            <CountdownContainer>
              <span>0</span>
              <span>0</span>
              <Separator>:</Separator>
              <span>0</span>
              <span>0</span>
            </CountdownContainer>

            <StartCountDownButton type="submit" disabled={isSubmitDisabled}>
              <Play size={24} />
              Começar
            </StartCountDownButton>
          </FormContainer>
        </form>
      </HomeContainer>
      <GlobalStyle />
    </ThemeProvider>
  )
}
