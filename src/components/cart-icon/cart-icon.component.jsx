import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../Assest/shopping-bag.svg";
import { connect } from "react-redux";
import { ToggleCartHidden } from "../../Redux/cart/cart.action";
import { selectCartItemscount } from "../../Redux/cart/cart.selectors";

const CartIcon = ({ ToggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={ToggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    ToggleCartHidden: () => {
      dispatch(ToggleCartHidden());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemscount(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
