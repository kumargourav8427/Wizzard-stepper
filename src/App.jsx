import {Routes, Route } from "react-router-dom";
import "./App.css";
import Output from "./components/Output";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Validation from "./Validation";
import Validation2 from "./Validation2";

function App() {
  const [inputVal, setInputVal] = useState({
    name: "",
    dob: "",
    address: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [errors1, setErrors1] = useState({});
  // const [storeData, setStoreData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputVal({
      ...inputVal,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  function nextButtonHome(e) {
    e.preventDefault();
    setErrors(Validation(inputVal));
    if (inputVal.name == "" || inputVal.dob == "" || inputVal.address == "") {
      return false;
    }else {
      navigate("/page2");
    }
  }

  function preButton(e) {
    e.preventDefault();
    navigate(-1);
  }

  function nextButton(e) {
    e.preventDefault();
    // setStoreData((predata) => [...predata, inputVal]);
    setErrors1(Validation2(inputVal));
    if (inputVal.phone == "" || inputVal.email == "") {
      return false
    }else {
      navigate("/output");
    }
  }

  function clearData() {
    setInputVal({});
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Page1
              inputVal={inputVal}
              handleChange={handleChange}
              nextButtonHome={nextButtonHome}
              errors={errors}
            />
          }
        />
        <Route
          path="/page2"
          element={
            <Page2
              inputVal={inputVal}
              handleChange={handleChange}
              preButton={preButton}
              nextButton={nextButton}
              errors1={errors1}
            />
          }
        />
        <Route
          path="/output"
          element={
            <Output
              inputVal={inputVal}
              clearData={clearData}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
