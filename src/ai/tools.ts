import { tool as createTool } from 'ai';
import { z } from 'zod';
import { WeatherClient } from '@agentic/weather';

export const weatherTool = createTool({
    description: 'Display the weather for a location',
    parameters: z.object({
        location: z.string().describe('The location to get the weather for'),
    }),
    execute: async function ({ location }) {
        const weatherClient = new WeatherClient();
        const weather = await weatherClient.getCurrentWeather(location);
        console.log(weather, location);
        const currentWeather = weather.current
        return { location: weather.location.name, 
            temperature: currentWeather.temp_c, 
            condition: currentWeather.condition, 
            icon: currentWeather.condition.icon.replace(/^\/\//, "https://"), 
            currentWeather: currentWeather.condition.text,
            humidity: currentWeather.humidity,
            wind: currentWeather.wind_kph,
            pressure: currentWeather.pressure_mb,
            visibility: currentWeather.vis_km,
        };
    },
});

export const tools = {
    displayWeather: weatherTool,
};