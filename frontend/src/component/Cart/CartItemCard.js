import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { Grid } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const CartItemCard = ({
  item,
  deleteCartItems,
  deleteCompareItems,
  products,
}) => {
  const options = {
    size: "large",
    value: products,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Grid
      spacing={4}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <img src={item.image} alt="ssa" />
      </Grid>
      <Grid item>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
      </Grid>

      <Grid item>
        <span>{`Price: ₹${item.price}`}</span>
      </Grid>
      {/* <Grid item>
        <Rating {...options} />
        <span className="detailsBlock-2-span">
          {" "}
          {products &&
            products.map((product) => (
              <span className="productCardSpan"> {product}</span>
            ))}
          Reviews
        </span>
      </Grid> */}

      <Grid item>
        <p
          onClick={() => {
            window.location.pathname == "/cart"
              ? deleteCartItems(item.product)
              : deleteCompareItems(item.product);
          }}
        >
          Remove
        </p>
      </Grid>

      {/* <div className="CartItemCard">
        <div>
          <Link to={`/product/${item.product}`}>{item.name}</Link>
          <span>{`Price: ₹${item.price}`}</span>
          <p
            onClick={() => {
              window.location.pathname == "/cart"
                ? deleteCartItems(item.product)
                : deleteCompareItems(item.product);
            }}
          >
            Remove
          </p>
        </div>
      </div> */}
    </Grid>
  );
};

export default CartItemCard;
