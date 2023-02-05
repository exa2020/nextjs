import Product from '../../components/Product';
import { urlFor } from '../../lib/client';

export default function productos({articulos}) {
  
  return (
    <div>

    <div>
      <div>
        {articulos?.map((articulo, index) => (
          <Product key={index} product={articulo} />
        ))}
      </div>

    </div>
    </div>
  )
}

export const getServerSideProps = async () => {

  const resArticulos  = await fetch(urlFor("moserapi/get_page/1/10"))
  const { articulos } = await resArticulos.json()
  
  return { props: { articulos }}
};

