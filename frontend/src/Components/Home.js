import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../App";

const Home = ({theme}) => {
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ numbers: [], challenge: "" });
  useEffect(() => {
    let date = new Date();
    let day = date.getDate().toString();
    let month = ((date.getMonth())+1).toString();
    let year = date.getFullYear().toString();
    let collection = document.getElementsByTagName("div")
    let collections = document.getElementsByTagName("html")
    if(theme==="dark"){
      for (let i = 0; i < collections.length; i++) {
        collections[i].style.backgroundColor = "#243447";
        collections[i].style.color = "white";
  
      }
      for (let i = 0; i < collection.length; i++) {
        collection[i].style.backgroundColor = "#243447";
        collection[i].style.color = "white";
  
      }
    }
    else{
      for (let i = 0; i < collections.length; i++) {
        collections[i].style.backgroundColor = "white";
        collections[i].style.color = "black";
  
      }
      for (let i = 0; i < collection.length; i++) {
        collection[i].style.backgroundColor = "white";
        collection[i].style.color = "black";
  
      }
    }

    // element.classList.toggle("dark-mode");
    setDate(day.concat(".").concat(month).concat(".").concat(year));
    getData();
  }, [theme]);
  const getData = async () => {
    const docRef = doc(db, "data", "d");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setLoading(false);
      setData(docSnap.data());
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  return (
    <>
      {loading === true ? (
        <Spinner
          animation="border"
          role="status"
          style={{
            width: "100px",
            height: "100px",
            margin: "auto",
            display: "block",
          }}
        >
          <span className="sr-only"></span>
        </Spinner>
      ) : (
        <Container style={{width:"100%",background:`${theme==="dark"? "#243447":"white"}`}}>
          <Row>
            <h1 style={{ textAlign: "center" }}>Wave</h1>
          </Row>
          <Row>
            <p style={{ fontSize: "20px", color: "red" }} className="m-3 p-3">
              Today is: {date}{" "}
            </p>
          </Row>
          <Row>
            <p style={{ fontSize: "20px", color: "red" }} className="m-3 p-3">
              Numbers: {data.numbers.map((e) => e.toString().concat(","))}
            </p>
          </Row>
          <Row>
            <p style={{ fontSize: "20px", color: "red" }} className="m-3 p-3">
              Challenge: {data.challenge}
            </p>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Home;
