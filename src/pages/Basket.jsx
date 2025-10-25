import { useContext } from "react"
import { BasketContext } from "../context/BasketContext"
import { Link } from "react-router-dom"
import BasketItem from "../components/BasketItem"
import BasketInfo from "../components/BasketInfo"

const Basket = () => {

    const { basket } = useContext(BasketContext)

    return (
    <div className="container p-4">
      <h1 className="mb-4 fs-1">Sepetiniz</h1>

      <div className="d-flex flex-column gap-5">
        {basket.length === 0 ? (
          <p className="text-center my-5 lead">
            <span>Öncelikle sepete bir ürün ekleyiniz</span>

            <Link to={"/"} className="d-block my-4">
              Ürünler'e Git
            </Link>
          </p>
        ) : (
          basket.map((product) => <BasketItem key={product.id} product={product} />)
        )}
      </div>
       <BasketInfo />
    </div>
    )
}

export default Basket