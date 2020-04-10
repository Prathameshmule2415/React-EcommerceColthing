import React from "react";

import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { CartItemAdd } from "../../Redux/cart/cart.action";

const CollectionItem = ({ item, CartItemAdd }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `URL(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => CartItemAdd(item)} invert>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    CartItemAdd: (item) => {
      dispatch(CartItemAdd(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
