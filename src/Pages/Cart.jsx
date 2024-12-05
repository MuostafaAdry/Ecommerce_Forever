import React, { useContext, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Cartclass from "../PagesCss/Cart/Cart.module.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { DeletProduct } from "../redux/productsitems/productSlice";

const Cart = () => {
  const Data = useSelector((state) => state.productsitems.CartProducts);

  const dispatch = useDispatch();
  const handelRemove = (item) => {
    dispatch(DeletProduct(item));
    toast.success("Deteted");
  };

  const calculateTotal = () => {
    return Data.reduce((acc, item) => acc + item.total, 0);
  };
  const total = calculateTotal();

  const paypalRef = useRef(null);
  const initializedRef = useRef(false);
  console.log(total)
  useEffect(() => {

    if (!initializedRef.current && paypalRef.current) {
      initializedRef.current = true;

      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: total + 10,

                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Transaction completed by ${details.payer.name.given_name}`);
            });
          },
        })
        .render(paypalRef.current); // Render PayPal button inside this container
    }
  }, [total,]);

  return (
    <div>
      <Container>
        <div className={Cartclass.tableContainer}>
          <table className={Cartclass.table}>
            <thead>
              <tr>
                <th>Item</th>
                <th>Name</th>
                <th>Size</th>
                <th>Amount</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.Cartimage} alt={item.name} width="50" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.Size}</td>
                  <td>{item.amount}</td>
                  <td>${item.total}</td>
                  <td>
                    <button
                      className={Cartclass.removeButton}
                      onClick={() => handelRemove(item)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



        <Container className={Cartclass.payment_container}>

          <Row>
            <Col md={6} className="payment-form">

              <div ref={paypalRef}></div>
            </Col>

            <Col md={6} className={Cartclass.payment_summary}>
              <h4>Order Summary</h4>
              <ul>
                <li>Subtotal: ${total}</li>
                <li>Shipping: $10</li>
                <li><strong>Total: ${!total ? <>0</> : <>{total + 10}</>}</strong></li>
              </ul>
            </Col>
          </Row>
        </Container>


      </Container>
    </div>
  );
};

export default Cart;
