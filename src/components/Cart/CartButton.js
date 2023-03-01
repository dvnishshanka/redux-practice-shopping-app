import { useDispatch, useSelector } from "react-redux";
import { uiSliceActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const noOfCartItems = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiSliceActions.toggleCartVisibility());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
    </button>
  );
};

export default CartButton;
