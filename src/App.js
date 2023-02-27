import axios from "axios";
import React, { useState } from "react";
import foto from "./assets/foto.jpg";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=807d004e98ade9ef529a71c7e287eea0
`;
  const location = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setCity("");
    }
  };

  return (
    <div className="w-full h-screen relative">
      <img className="w-full h-screen object-cover" src={foto} />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/20"></div>
      <div className="absolute w-full text-white top-10 flex flex-col mx-auto text-3xl">
        <div className=" justify-between text-center ">
          <div className="max-w-[1240px] h-[700px] mx-auto">
            <input
              className="bg-gray-900/70 rounded-lg text-center p-2 mb-4"
              placeholder="Enter location"
              onKeyDown={location}
              value={city}
              type="text"
              onChange={(e) => setCity(e.target.value)}
            ></input>
            <p className="mt-10">Dallas</p>
            <h1 className="text-8xl p-4">29oC</h1>
            <p className="absolute rotate-90 mt-10 right-5">Sunny</p>
          </div>
          <div className="flex justify-evenly max-w-[700px] mx-auto rounded-lg p-3 bg-gray-900/70">
            <div>
              <p className="font-bold">66oC</p>
              <p className="text-2xl">Feels like</p>
            </div>
            <div>
              <p className="font-bold">20</p>
              <p className="text-2xl">Humidity</p>
            </div>
            <div>
              <p className="font-bold">12kmh</p>
              <p className="text-2xl">Wind speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
