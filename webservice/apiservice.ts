
export class AppService {


    public async getUsers(): Promise<any> {
        const response = await fetch('/api/users');
        return await response.json();
    }

    public async getWeatherDetailApi() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=4d0381859843a60098022daa219fd6ce`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
           // body: JSON.stringify({user})
          });
        return await response.json();
    }

}