import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import Card from "../components/Card";
const Home = () => {



      const { products, loading, error } = useContext(ProductContext);
  return (
   <div className="container p-4">
      <h2 className="my-4">Güncel Ürünler</h2>

      <div className="card-wrapper">
        {loading ? (
          <p>Yükleniyor...</p>
        ) : error ? (
          <p>Hata! {error}</p>
        ) : (
          products.map((product) => <Card key={product.id} product={product} />)
        )}
      </div>
    </div>  )
}

export default Home