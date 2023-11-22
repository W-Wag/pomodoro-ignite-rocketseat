import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/logo-ignite.svg'
import { Timer, Scroll } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <Link to="/" title="Timer">
          <Timer size={24} />
        </Link>
        <Link to="/history" title="Histórico">
          <Scroll size={24} />
        </Link>
      </nav>
    </HeaderContainer>
  )
}
