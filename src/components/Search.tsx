import { ChangeEvent, useEffect } from "react";
import { optionCityType } from "../types";

type Props = {
  setTerm: React.Dispatch<React.SetStateAction<string>>;
  term: string;
  options: [];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  setCity: React.Dispatch<
    React.SetStateAction<optionCityType | null | undefined>
  >;
};

const Search = ({
  term,
  options,
  handleChange,
  handleSubmit,
  setCity,
  setTerm,
}: Props): JSX.Element => {
  useEffect(() => {
    setTerm("");

    // eslint-disable-next-line
  }, []);

  return (
    <div className=" flex flex-col items-center h-72 w-1/4">
      <section className=" flex flex-col items-center">
        <h1 className="text-3xl font-bold">Weather Prediction</h1>
        <p className="pl-8 my-1 text-md font-semibold">If you are curious about the weather forecast, write the name of the city</p>
        <div className="">
          <input
            className="w-60 h-10 rounded-md mr-3 pl-3"
            type="text"
            value={term}
            onChange={handleChange}
          />
          <button
            className="border-2 w-20 font-bold text-lg  h-10 rounded-md hover:bg-gray-500 "
            onClick={handleSubmit}
          >
            Search
          </button>

          <div className="min-h-80 bg-yellow-200">
            <ul className="bg-gray-600  mt-3 rounded-md">
              {options.length > 1 &&
                options.map((optionCity: optionCityType, index: number) => (
                  <li
                    className="flex justify-start font-semibold text-white hover:text-black hover:bg-gray-500 hover:font-bold pl-3 hover:rounded-md h-8 rounded-md"
                    key={index}
                  >
                    <button onClick={() => setCity(optionCity)}>
                      {optionCity.name} {optionCity.country}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
