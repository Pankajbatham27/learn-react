import { Link, useNavigate } from "react-router-dom";
import pList from "../../prodcutData.json";
import { useEffect, useState } from "react";
import { Reviews } from "@mui/icons-material";

const ProductList = () => {
//   const promiseHandler = async () => {
//     const orderPizza = new Promise((resolve, reject) => {
//       const isDelivered = true;

//       setTimeout(() => {
//         if (isDelivered) {
//           resolve("Pizza Delivered");
//         } else {
//           reject("Sorry! Unable to deliver Pizza");
//         }
//       }, 2000);
//     });

//     const pizzaTeaste = new Promise((resolve, reject) => {
//       const treate = true;

//       setTimeout(() => {
//         if (treate) {
//           resolve("This is teasty");
//         } else {
//           reject("No Good");
//         }
//       }, 4000);
//     });

//     // orderPizza
//     // .then((message) => {
//     //     console.log(message);
//     //     pizzaTeaste
//     //     .then((message) => console.log(message))
//     //     .catch((error) => console.log(error))
//     // })
//     // .catch((error) => console.log(error));

//     const deliverStatus = await orderPizza;
//     const teste = await pizzaTeaste;

//     console.log(deliverStatus)
//     console.log(teste)


//   };

const [pList, setPList] = useState();

    const testHandler = () => {
        const url = "https://fakestoreapi.com/products";
        const yy = fetch(url)
          .then((response) => response.json())
          .then((data) => setPList(data))
          .catch((error) => console.error(error));
    }

  

    

//   const promiseHandlerAsync = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Promise Resolved!");
//       }, 1000);
//     });
//   };

  //   const handlerFunction = async () => {
  //     const returnedValue = await promiseHandlerAsync();
  //     console.log(returnedValue)
  //     console.log("Ok 2")
  //   };

  return (
    <>
      <h1>Product List</h1>

      
      <ul>
        {/* {pList.map((value) => (
          <li key={value}>{value}</li>
        ))} */}

        {pList && pList.map((data) => (
          <li key={data.id}>
            <Link to={`/product/${data.id}`}>{data.title} - {data.price}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ProductList;
