import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global'
import { defaultTheme } from '../../styles/themes/default'
import { HistoryContainer, HistoryList, Status } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <ThemeProvider theme={defaultTheme}>
      <HistoryContainer>
        <h1>Meu Histórico</h1>
        <pre>{JSON.stringify(cycles, null, 2)}</pre>

        <HistoryList>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Inicio</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tarefa</td>
                <td>26 minutos</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>26 minutos</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>26 minutos</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>26 minutos</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>26 minutos</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="red">Interrompido</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>26 minutos</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="yellow">Em andamento</Status>
                </td>
              </tr>
            </tbody>
          </table>
        </HistoryList>
      </HistoryContainer>

      <GlobalStyle />
    </ThemeProvider>
  )
}
