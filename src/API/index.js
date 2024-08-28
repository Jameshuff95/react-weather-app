import axios from 'axios';

export async function getWeatherData(endpoint, place_id, measurementSystem) {
    const options = {
      method: 'GET',
      url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
      params: {
        place_id,
        language: 'en',
        units: measurementSystem
      },
      headers: {
        'x-rapidapi-key': 'd1b96bc3bamsh825dd2e7c439674p10d9cajsn4a5d73597616',
        'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
      }
    };

    try {
    	const response = await axios.request(options);
    	return response.data;
    } catch (error) {
    	console.error(error);
    }
}