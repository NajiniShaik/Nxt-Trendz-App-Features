import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'

import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      const showEmptyView = cartList.length === 0

      const onClickRemoveBtn = () => {
        removeAllCartItems()
      }

      const totalPrice = cartList.reduce(
        (total, product) => total + product.price,
        0,
      )

      const cartSummaryContainer = () => (
        <div className="added-products-total">
          <div>
            <p className="cart-summary-card-title">
              Total Orders:{' '}
              <span className="cart-summary-card-total">RS {totalPrice}\-</span>
            </p>
            <p className="cart-summary-card-count">
              {cartList.length} {cartList.length === 1 ? 'item' : 'items'} in
              cart
            </p>
            <button className="check-out-btn" type="button">
              Checkout
            </button>
          </div>
        </div>
      )

      return (
        <>
          <Header />
          {showEmptyView ? (
            <EmptyCartView />
          ) : (
            <div className="cart-container">
              <div className="cart-content-container">
                <div className="cart-title-container">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    className="remove-all-btn"
                    type="button"
                    onClick={onClickRemoveBtn}
                  >
                    Remove All
                  </button>
                </div>
                <CartListView />
                {cartSummaryContainer()}
              </div>
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
