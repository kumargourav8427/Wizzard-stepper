import React, { useState } from "react";

function Page1({ inputVal, handleChange, nextButtonHome, errors }) {
  // const [inputVal, setInputVal] = useState({
  //   name: "",
  //   dob: "",
  //   address: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setInputVal({
  //     ...inputVal,
  //     [name]: value,
  //   });
  // };

  // const navigate = useNavigate();

  // function nextButtonHome(e) {
  //   e.preventDefault();
  //   // if (inputVal != "") {
  //   //   setStoreData((predata) => [...predata, inputVal]);
  //   //   setInputVal("");
  //   // }
  //   navigate("/page2");
  //   console.log(inputVal, "page1 input");
  // }

  return (
    <div className="bg-black flex flex-col h-[100vh] items-center justify-center ">
      <h1 className="text-white text-2xl font-bold text-center mb-5">
        Fill Form
      </h1>
      <form >
        <div className="flex flex-col w-72 md:w-96 border-4 bg-slate-700 p-4 py-4 text-white rounded-lg">
          <div className="mb-4">
            <label className="block font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 text-black rounded text-sm font-semibold"
              required
              value={inputVal.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-700 font-semibold">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">D.O.B</label>
            <input
              type="date"
              name="dob"
              className="w-full p-2 text-black rounded text-sm font-semibold"
              value={inputVal.dob}
              onChange={handleChange}
            />
            {errors.dob && (
              <p className="text-red-700 font-semibold">{errors.dob}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Address</label>
            <input
              type="text"
              name="address"
              className="w-full p-2 text-black rounded text-sm font-semibold"
              value={inputVal.address}
              onChange={handleChange}
            />
            {errors.address && (
              <p className="text-red-700 font-semibold">{errors.address}</p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              className="w-20 bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-3 rounded-full "
              onClick={(e) => nextButtonHome(e)}
              type="submit"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Page1;
