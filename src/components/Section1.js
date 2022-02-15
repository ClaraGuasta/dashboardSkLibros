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
    fetch("http://localhost:3030/api/genres")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setcategoryList(data.data.count);
      });
  }, []);


  return (
    <React.Fragment>
      <div className="section1-cards">
        <Card title="Total de productos" total={productList} icon='fa-book'/>
        <Card title="Total de usuarios" total={userList} icon="fa-user"/>
        <Card title="Total de categorias" total={categoryList} icon='fa-layer-group'/>
      </div>
    </React.Fragment>
  );
}
export default Section1;
