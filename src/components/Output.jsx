import React from "react";

function Output({ inputVal, clearData }) {
  console.log(inputVal, "output");
  return (
    <>
      <div className="bg-black flex flex-col h-[100vh] items-center justify-center ">
        <div className="flex flex-col w-72 md:w-96 border-4 bg-slate-700 p-4 py-4 text-white rounded-lg">
          {Object.keys(inputVal).map((key, index) => (
            <div key={index} className="my-3 border p-2 rounded">
              <span className="capitalize font-semibold gap-2">{key}</span> :{" "}
              {inputVal[key]}
            </div>
          ))}

          <div className="mx-auto">
            <button
              type="sunmit"
              className=" bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-3 rounded-full "
              onClick={clearData}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Output;
