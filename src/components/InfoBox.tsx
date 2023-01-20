import React from "react";
import { getWindDirection } from "../helpers";
import { forecastType } from "../types";

type Props = {
  data: forecastType;
};

export const InfoBox = ({ data }: Props): JSX.Element => {
  console.log(data.list[0])
  const weatherInfo = data.list[0];


  return (
    <div className="">
      <div className="flex justify-center gap-5">
        <div className="flex justify-center w-40">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              <span>icon</span> Wind
            </h5>
            <h3>{weatherInfo.wind.speed}</h3>
            <p className="text-gray-700 text-base mb-4">
              {getWindDirection(weatherInfo.wind.deg)}
            </p>
          </div>
        </div>
        <div className="flex justify-center w-40">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              Feels
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5 my-5">
        <div className="flex justify-center w-40">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Humidity
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="flex justify-center w-40">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Precipitation
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <div className="flex justify-center w-40">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Pressure
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="flex justify-center w-40">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Visibility
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
