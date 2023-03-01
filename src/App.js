import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCartData, sendCartData } from "./store/cart-actions";
import Notification from "./store/Notification";

let isInitial = true;

function App() {
  const isCartVisible = useSelector((state) => state.uiSlice.isCartVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.uiSlice.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;

      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart)); // dispatching a function that returns a function. Redux will execute that fuction
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
