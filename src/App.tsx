import Forecast from "./components/Forecast";
import Search from "./components/Search";
import useForecast from "./hook/useForecast";

const App = () => {
  const { forecast, term,setForecast, options, handleSubmit, handleChange, setCity } =
    useForecast();

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-sky-500  to-gray-300 h-[100vh] w-full">
      {forecast ? (
        <Forecast data={forecast} setForecast={setForecast} />
      ) : (
        <Search
          term={term}
          options={options}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          setCity={setCity}
        />
      )}
    </div>
  );
};

export default App;
