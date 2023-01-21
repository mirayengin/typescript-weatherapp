import React from "react";
import {
  getFeelLike,
  getHumidityValue,
  getPop,
  getVisibilityValue,
  getWindDirection,
} from "../helpers";
import { forecastType } from "../types";
import { FiWind } from "@react-icons/all-files/fi/FiWind";
import { RiTempHotFill } from "@react-icons/all-files/ri/RiTempHotFill";
import { WiHumidity } from "@react-icons/all-files/wi/WiHumidity";
import { WiDayRainMix } from "@react-icons/all-files/wi/WiDayRainMix";
import { RiSpeedMiniLine } from "@react-icons/all-files/ri/RiSpeedMiniLine";
import { MdVisibility } from "@react-icons/all-files/md/MdVisibility";

type Props = {
  data: forecastType;
};

export const InfoBox = ({ data }: Props): JSX.Element => {
  console.log(data.list[0]);
  const weatherInfo = data.list[0];

  return (
    <div className="flex flex-col items-center mb-5">
      <div className="flex justify-center w-78 gap-3  ">
        <div className="flex flex-col justify-start w-48 h-32 p-6 rounded-lg shadow-lg bg-white max-w-sm hover:bg-gradient-to-br from-green-500  to-gray-300">
          <h5 className=" flex justify-start items-center text-gray-900 text-xl leading-tight font-medium mb-2">
            <span className="mr-3">
              <FiWind />
            </span>{" "}
            Wind
          </h5>
          <h3>{`${Math.round(weatherInfo.wind.speed)} km`}</h3>
          <p className="text-gray-700 text-xs mb-4 font-bold">
            {`${getWindDirection(
              Math.round(weatherInfo.wind.deg)
            )}, gusts 
            ${weatherInfo.wind.gust.toFixed(1)} km/h`}
          </p>
        </div>

        <div className=" flex justify-start flex-col w-48 h-32 p-6 rounded-lg shadow-lg bg-white max-w-sm hover:bg-gradient-to-br from-green-500  to-gray-300">
          <h5 className="flex justify-start text-gray-900 text-xl leading-tight font-medium mb-2">
            <span className="mr-3">
              <RiTempHotFill />
            </span>{" "}
            Feels
          </h5>
          <h3>{Math.round(weatherInfo.main.feels_like)}<sup>o</sup></h3>
          <p className="text-gray-700  mb-4 text-xs font-bold">
            {getFeelLike(weatherInfo.main.feels_like)}.
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-5 my-5">
        <div className="block w-48 h-32 p-6 rounded-lg shadow-lg bg-white max-w-sm hover:bg-gradient-to-br from-green-500  to-gray-300">
          <h5 className=" flex text-gray-900 text-xl leading-tight font-medium mb-2">
            <span className="mr-3">
              <WiHumidity />
            </span>{" "}
            Humidity
          </h5>
          <h3>{`${Math.round(weatherInfo.main.humidity)} %`}</h3>
          <p className="text-gray-700 text-xs mb-4 font-bold">
            {getHumidityValue(weatherInfo.main.humidity)}
          </p>
        </div>

        <div className="block w-48 h-32 p-6 rounded-lg shadow-lg bg-white max-w-sm hover:bg-gradient-to-br from-green-500  to-gray-300">
          <h5 className="flex text-gray-900 text-xl leading-tight font-medium mb-2">
            <span className="mr-3">
              <WiDayRainMix />
            </span>{" "}
            Precipitation
          </h5>
          <h3>{`${Math.round(weatherInfo.clouds.all)} %`}</h3>
          <p className="text-gray-700 text-xs mb-4 font-bold">
            {getPop(weatherInfo.clouds.all)}
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-5">
        <div className="block w-48 h-32 p-6 rounded-lg shadow-lg bg-white max-w-sm hover:bg-gradient-to-br from-green-500  to-gray-300">
          <h5 className="flex text-gray-900 text-xl leading-tight font-medium mb-2">
            <span className="mr-3">
              <RiSpeedMiniLine />
            </span>{" "}
            Pressure
          </h5>
          <h3>{`${Math.round(weatherInfo.main.pressure)} hPa`}</h3>
          <p className="text-gray-700 text-xs mb-4 font-bold">
            {weatherInfo.main.pressure > 1013
              ? "High pressure"
              : "Low pressure"}
          </p>
        </div>

        <div className="block w-48 h-32 p-6 rounded-lg shadow-lg bg-white max-w-sm hover:bg-gradient-to-br from-green-500  to-gray-300">
          <h5 className="flex text-gray-900 text-xl leading-tight font-medium mb-2">
            <span className="mr-3">
              <MdVisibility />
            </span>{" "}
            Visibility
          </h5>
          <h3>{`${Math.round(weatherInfo.visibility / 1000)} km`}</h3>
          <p className="text-gray-700 text-xs mb-4 font-bold">
            {getVisibilityValue(weatherInfo.visibility)}
          </p>
        </div>
      </div>
    </div>
  );
};
