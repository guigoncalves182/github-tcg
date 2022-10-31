import "./Home.module.scss";
import React from "react";
import { useParams } from "react-router-dom";
import Card from "./Components/Card";

function Home() {
  const { github, legendary } = useParams();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        boxSizing:"border-box",
        alignItems:"center",
        height:"100vh"
      }}
    >
      {(github && <Card github={github} legendary={legendary} />) || (
        <>
          <Card github="guigoncalves182" legendary/>
          <Card github="celymoon" />
          <Card github="martinsbrz" />
          <Card github="icarusramos" />
        </>
      )}  
    </div>
  );
}
export default Home;
