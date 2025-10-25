import { useContext } from "react";
import { Link } from "react-router-dom"
import { BasketContext } from "../context/BasketContext";


const Header = () => {

  const { basket } = useContext(BasketContext);
  // sepet dizisindeki elemanların amount değerleri
  const totalAmount = basket.reduce((total, product) => total + product.amount, 0);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Context Store
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav lead">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Anasayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/basket">
                Sepet ({totalAmount})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>)
}

export default Header