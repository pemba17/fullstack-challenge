import { ref } from "vue";
import axios from "axios";
const getWeather = () => {
  const weatherDetails = ref(null);
  const load = async (user) => {
    await axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${user.latitude}&lon=${user.longitude}&appid=9a2436e7313889332b9511eb050072fd&units=metric`
      )
      .then((response) => {
        if (response.statusText === "OK") {
          weatherDetails.value = response.data;
        }
      });
  };
  return { weatherDetails, load };
};

export default getWeather;
