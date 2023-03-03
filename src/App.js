import axios from "axios";
import React, { useState } from "react";
import foto from "./assets/foto.jpg";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=807d004e98ade9ef529a71c7e287eea0
`;
  const location = () => {
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
    setCity("");
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      location();
    }
  };
  return (
    <div className="w-full h-screen relative">
      <img className="w-full h-screen object-cover" src={foto} alt="/" />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/20"></div>
      <div className="absolute w-full text-white top-10 flex flex-col mx-auto text-3xl">
        <div className=" justify-between text-center ">
          <div className="max-w-[1240px] h-[700px] mx-auto ">
            <input
              className="bg-gray-900/70 rounded-lg text-center p-2 mb-4"
              placeholder="Enter location"
              value={city}
              type="text"
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={handleKeypress}
            />
            <button onClick={location} className="text-gray-400">
              <HiArrowRightOnRectangle />
            </button>
            <p className="mt-10 text-4xl">{data.name}</p>
            {data.main ? (
              <h1 className="text-8xl p-4">{data.main.temp.toFixed()} ℃</h1>
            ) : (
              ""
            )}
            {data.main ? (
              <p className="absolute rotate-90 mt-10 right-5">
                {data.weather[0].main}
              </p>
            ) : (
              ""
            )}
          </div>
          {data.main ? (
            <div className="flex justify-evenly max-w-[700px] mx-auto rounded-lg p-3 bg-gray-900/70">
              <div>
                {data.main ? (
                  <p className="font-bold">
                    {data.main.feels_like.toFixed()} ℃
                  </p>
                ) : (
                  ""
                )}
                <p className="text-2xl">Feels like</p>
              </div>
              <div>
                {data.main ? (
                  <p className="font-bold">{data.main.humidity} %</p>
                ) : (
                  ""
                )}
                <p className="text-2xl">Humidity</p>
              </div>
              <div>
                {data.wind ? (
                  <p className="font-bold">{data.wind.speed.toFixed()} KMH</p>
                ) : (
                  ""
                )}
                <p className="text-2xl">Wind speed</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
