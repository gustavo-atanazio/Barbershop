import './Products.css';
import data from '../../data/data';
import Card from '../../components/Card/Card';

function Products() {
  const cortes = data[0].cortes;
  const produtos = data[1].produtos;

  return (
    <section className="products">
      <h2>Conheça nossos cortes</h2>

      <div className='products-container'>
        {cortes.map((corte, index) => (
          <Card 
            imagem={corte.imagem}
            titulo={corte.titulo}
            preco={corte.preco}
            descricao={corte.descricao}
            
            key={index}
          />
        ))}
      </div>

      <h2>Encontre os melhores produtos</h2>

      <div className="products-container">
        {produtos.map((produto, index) => (
          <Card
            imagem={produto.imagem}
            titulo={produto.titulo}
            preco={produto.preco}
            descricao={produto.descricao}

            key={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Products;