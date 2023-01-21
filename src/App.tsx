import Forecast from "./components/Forecast";
import Search from "./components/Search";
import useForecast from "./hook/useForecast";

const App = () => {
  const { forecast, term,setForecast, options, handleSubmit, handleChange, setCity, setTerm } =
    useForecast();

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-sky-500  to-gray-300 w-full p-5 min-h-screen ">
      {forecast ? (
        <Forecast data={forecast} setForecast={setForecast} />
      ) : (
          <Search
          setTerm={setTerm}
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
