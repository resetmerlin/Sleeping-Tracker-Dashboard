import { useEffect, useState } from "react";
import { WeatherModel, UserModel } from "../../model/home/HomeModel";
import { HomeView } from "../../view/page";

export default function HomeController() {
  const [userModel] = useState(new UserModel(123));
  const [weatherModel] = useState(new WeatherModel());

  const [user, setUser] = useState(null);
  const [weather, setWeather] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);

  useEffect(() => {
    userModel.fetchDemoUser().then(() => {
      return setUser(userModel.getUser());
    });
    weatherModel
      .fetchWeater()
      .then(() => {
        setWeather(weatherModel.getWeather()?.weather[0]?.main);
        setWeatherIcon(weatherModel.getWeather()?.weather[0]?.icon);
      })
      .catch((res) => setWeather(res));
  }, [user, userModel, weatherModel]);

  console.log(weather);

  return <HomeView weather={weather} weatherIcon={weatherIcon} />;
}
