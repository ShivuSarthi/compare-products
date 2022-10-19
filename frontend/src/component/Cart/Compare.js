import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
// import {
//   addItemsToCompare,
//   removeItemsFromCart,
// } from "../../actions/cartAction";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";

import {
  addItemsToCompare,
  removeItemsFromCompare,
} from "../../actions/compareAction";

const useStyles = makeStyles({
  root: {
    color: "red",
    justifyContent: "center",
  },
});

const Compare = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { compareItems } = useSelector((state) => state.compare);

  const { products } = useSelector((state) => state.products);

  console.log("shiva", products);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCompare(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCompare(id, newQty));
  };

  const deleteCompareItems = (id) => {
    dispatch(removeItemsFromCompare(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <Fragment>
      {compareItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No Product to Compare</Typography>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <Fragment>
          <div className="cartPage">
            <Grid container className={classes.root}>
              <Typography variant="h4">Compare Products</Typography>
            </Grid>

            <Container>
              <Grid container justifyContent={"center"}>
                <Grid item xs={12} sm={8} md={6}>
                  <Grid container>
                    {compareItems &&
                      compareItems.map((item) => (
                        <Grid item xs={12} sm={6} key={item.product}>
                          <CartItemCard
                            item={item}
                            deleteCompareItems={deleteCompareItems}
                            product={products}
                          />
                        </Grid>
                      ))}
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Compare;
