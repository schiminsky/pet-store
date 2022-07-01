import styled from "styled-components";
import Button from "../../components/Button";
import dadosProdutos from "./Dados";

const ProdutoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  & * {
    text-align: center;
  }

  .product__title {
    margin-top: 18px;
    font-size: 18px;
  }

  .product__preco {
    font-size: 18px;
  }

  .product__preco del {
    margin-right: 10px;
  }

  .product__preco,
  .product__parcelas {
    margin-bottom: 6px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &:hover::after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: " ";
    background-color: var(--roxo);
    opacity: 0.5;
    z-index: 0;
  }

  &:hover .product__cta {
    display: unset;
    z-index: 2;
  }

  & .product__cta {
    position: absolute;
    display: none;
  }

  & .product__flag {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const ListaProdutosWrapper = styled.section`
  display: grid;
  grid-gap: 25px;

  @media (min-width: 520px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ButtonRotulo = styled(Button)`
  background-color: var(--roxo);
  padding: 5px 10px;
`;

const ListaProdutos = ({ numItens }) => (
  <ListaProdutosWrapper>
    {dadosProdutos.map(
      ({ id, titulo, promocao, parcelamento, thumbnail }, index) => {
        if (index < numItens) {
          return (
            <Produto
              id={id}
              titulo={titulo}
              promocao={promocao}
              parcelamento={parcelamento}
              thumbnail={thumbnail}
            />
          );
        }
      }
    )}
  </ListaProdutosWrapper>
);

const Produto = ({ id, titulo, promocao, parcelamento, thumbnail }) => (
  <ProdutoWrapper>
    <ImageWrapper>
      <img src={thumbnail} alt="Product Image" />
      <Button href="#" className="product__cta">
        Comprar Agora
      </Button>
      {promocao.rotulo ? (
        <ButtonRotulo className="product__flag">{promocao.rotulo}</ButtonRotulo>
      ) : null}
    </ImageWrapper>
    <a href="#">
      <h4 className="product__title">{titulo}</h4>
    </a>
    <h4 className="product__price">
      {promocao.temDesconto ? <del>R${promocao.valorOrig}</del> : null}
      {promocao.temDesconto ? (
        <strong>R${promocao.valorDesc}</strong>
      ) : (
        <strong>R${promocao.valorOrig}</strong>
      )}
    </h4>
    {parcelamento ? (
      <span className="product__installments">{parcelamento}</span>
    ) : null}
  </ProdutoWrapper>
);

export { ListaProdutos, Produto };
