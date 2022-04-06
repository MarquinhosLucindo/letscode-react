import { Button } from "antd"
import Product from "../Card"
import UserCard from "../UserCard"
import { Container, StyledButton, StyledUserCard } from './styles'

const Main = () => (
  <Container>
    <h2>Listagem</h2>
    <Product />
  </Container>
)

export default Main
