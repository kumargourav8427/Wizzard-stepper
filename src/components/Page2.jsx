import React from "react";

function Page2({ inputVal, handleChange, preButton, nextButton, errors1 }) {
  return (
    <>
      <div className="bg-black flex flex-col h-[100vh] items-center justify-center ">
        <h1 className="text-white text-2xl font-bold text-center mb-5">
          Continue ...
        </h1>

        <form action="">
          <div className="flex flex-col w-72 md:w-96 border-4 bg-slate-700 p-4 py-4 text-white rounded-lg">
            <div className="mb-3">
              <label className="block font-semibold mb-2">Mobile Number </label>
              <input
                type="tel"
                name="phone"
                className="w-full p-2 text-black rounded text-sm font-semibold"
                value={inputVal.phone}
                onChange={handleChange}
              />
              {errors1.phone && (
                <p className="text-red-700 font-semibold">{errors1.phone}</p>
              )}
            </div>

            <div className="mb-3">
              <label className="block font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 text-black rounded text-sm font-semibold"
                value={inputVal.email}
                onChange={handleChange}
              />
              {errors1.email && (
                <p className="text-red-700 font-semibold">{errors1.email}</p>
              )}
            </div>

            <div className="flex justify-between my-3">
              <button
                type="submit"
                className=" bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-3 rounded-full "
                onClick={(e) => preButton(e)}
              >
                Previous
              </button>
              <button
                type="submit"
                className=" bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-3 rounded-full "
                onClick={(e) => nextButton(e)}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Page2;
