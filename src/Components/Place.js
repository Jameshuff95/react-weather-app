import { useContext } from "react";
import WeatherContext from "../context/weather.context";

function Place() {
  const { place } = useContext(WeatherContext);

  return (
    <div className='place'>
      <i class="bi bi-geo-alt-fill"></i> {' '}
      <div>
        <b>{place.name},</b> {' '} {place.adm_area1}
      </div>
    </div>
  )
}

export default Place
