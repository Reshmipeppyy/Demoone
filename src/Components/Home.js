import React from "react";
import Child from "./Child";
import "./Home.css";
import"./Button.Module.css";

const Home = () => {
  console.log("Rendering Home Component");
  return (
    <div className="divone">
      <h1>Component 2</h1>
      <Child />
      <button className="loginBtn">login</button>
      <button className="logoutBtn">logout</button>
    </div>
  );
};

export default Home;
