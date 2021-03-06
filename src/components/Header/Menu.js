import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import Container from "../container/Container";

const ContainerNarrow = styled(Container)`
  padding: 0;
`;

const MenuWrapper = styled.nav`
  background-color: var(--roxo);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  & .menu__itens {
    display: flex;
    padding-left: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-wrap: break-word;
    justify-content: center;
  }

  & .menu__itens li {
    list-style: none;
    color: white;
    margin: 0px 0px 0px 20px;
  }

  & .menu__itens li a {
    color: white;
  }

  & .menu__icon {
    display: flex;
    padding-left: 10px;
    justify-self: end;
    margin-right: 10px;
    font-size: 32px;
  }

  & .menu__icon svg path {
    color: var(--laranja);
  }
`;

const Menu = () => (
  <nav style={{ backgroundColor: "var(--roxo)" }}>
    <ContainerNarrow>
      <MenuWrapper className="menu">
        <ul className="menu__itens">
          <li><a href="#">Categoria 1</a></li>
          <li><a href="#">Categoria 2</a></li>
          <li><a href="#">Categoria 3</a></li>
          <li><a href="#">Categoria 4</a></li>
          <li><a href="#">Categoria 5</a></li>
          <li><a href="#">Categoria 6</a></li>
          <li><a href="#">Categoria 7</a></li>
        </ul>
        <div className="menu__icon">
          <GiHamburgerMenu />
        </div>
      </MenuWrapper>
    </ContainerNarrow>
  </nav>
);

export default Menu;
