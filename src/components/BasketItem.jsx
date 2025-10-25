import { useContext } from "react"
import { BasketContext } from "../context/BasketContext"


const BasketItem = ({ product }) => {

    const { addToBasket, removeFromBasket } = useContext(BasketContext);
    return (
        <div className="d-flex flex-column flex-md-row gap-3 align-items-center justify-content-between border p-3 rounded">
            <div className="d-flex align-items-center gap-3 w-100">
                <div className="rounded bg-white p-1">
                    <img src={product.thumbnail} width={70} />
                </div>

                <h4>{product.title.slice(0, 30) + "...."}</h4>
            </div>

            <div className="d-flex justify-content-between align-items-center w-100 gap-3">
                <h3>${(product.amount * product.price).toFixed(2)}</h3>

                <div className="btn-group">
                    <button onClick={() => removeFromBasket(product.id)} className="btn btn-primary">
                        -
                    </button>

                    <span className="btn btn-light fw-bold">{product.amount}</span>

                    <button onClick={() => addToBasket(product)} className="btn btn-primary">
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BasketItem