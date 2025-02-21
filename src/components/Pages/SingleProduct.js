import { useParams } from "react-router-dom";
import pList from "../../prodcutData.json";
import { useEffect, useState } from "react";

const SingleProduct = () => {
  const { id } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    const product = pList.products.find((value) => value.id == id);
    setData(product);
  }, []);

  return (
    <>
      <h1>
        <b>Product Name - </b>
        {data ? data.title : "No Data"}
      </h1>
      <h2>
        <b>Price - </b>
        {data ? data.price : "No Data"}
      </h2>
    </>
  );
};
export default SingleProduct;
