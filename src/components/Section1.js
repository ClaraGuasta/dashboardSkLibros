import React, { useState, useEffect } from "react";
import Card from "./Card";

function Section1() {
  const [productList, setproductList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/api/products")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setproductList(data.data.count);
      });
  }, []);
  const [userList, setuserList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/api/users")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setuserList(data.data.count);
      });
  }, []);
  const [categoryList, setcategoryList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/api/products")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data);
      });
  }, []);


  return (
    <React.Fragment>
      <div className="section1-cards">
        <Card title="Total de productos" total={productList} icon='fa-skull'/>
        <Card title="Total de usuarios" total={userList} />
        <Card title="Total de categorias" />
      </div>
    </React.Fragment>
  );
}
export default Section1;
