import "./App.css";
import Temperatures from "./Temperatures";

export default function App() {
  let weatherData = {
    city: "New York",
    date: "10:00 AM",
    description: "Cloudy",
    img: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    current: 42,
  };

  return (
    <div className="App">
      <header>
        <form>
          <div className="container">
            <div className="row">
              <div className="col-sm-10 text-center pl-0 pr-2 mt-2">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  required
                  className="form-control"
                />
              </div>
              <div className="col-sm-2 text-left mt-2 p-0">
                <button type="submit" className="btn btn-outline-primary">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </header>
      <Temperatures
        current={weatherData.current}
        city={weatherData.city}
        date={weatherData.date}
        description={weatherData.description}
        img={weatherData.img}
      />
    </div>
  );
}
