import { useState } from "react";
import Axios from "axios";

const ExcuseGenerator = () => {
  const [excuse, setExcuse] = useState("Click a butto to generate an excuse");
  const generateExcuse = (category) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then(
      (res) => {
        setExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <>
      <h1 className="text-4xl text-center font-bold my-6">
        Generate An Excuse
      </h1>
      <div className="flex justify-around items-center gap-4">
        <button
          onClick={() => generateExcuse("party")}
          className="bg-blue-800 p-3 mx-auto text-white font-bold rounded-lg"
        >
          Party
        </button>
        <button
          onClick={() => generateExcuse("family")}
          className="bg-indigo-800 p-3 mx-auto text-white font-bold rounded-lg"
        >
          Family
        </button>
        <button
          onClick={() => generateExcuse("office")}
          className="bg-purple-800 p-3 mx-auto text-white font-bold rounded-lg"
        >
          Office
        </button>
      </div>

      <p className="bg-gray-300 p-4 text-center mx-auto md:w-96 my-6 font-semibold text-xl">
        {excuse}
      </p>
    </>
  );
};

export default ExcuseGenerator;
