// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { DeletProduct } from "../../../redux/productsitems/productSlice";

// const CartCounter = ({ item }) => {
//   const [Counter, setCounter] = useState(1);
//   const dispatch = useDispatch();
//   const handeldecremeint = (item) => {
//     if (Counter <= 1) {
//       dispatch(DeletProduct(item));
//     } else {
//       setCounter(Counter - 1);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={() => handeldecremeint(item)}>-</button>
//         {Counter}
//         <button onClick={() => setCounter(Counter + 1)}>+</button>
//       </div>
//     </div>
//   );
// };

// export default CartCounter;
