// eslint-disable-next-line max-classes-per-file
import { IUser } from "../../../dto";
import { user } from "../../../user";

// eslint-disable-next-line import/prefer-default-export
export class UserModel {
  private user: IUser | null = null;

  private userId: number;

  constructor(userId: number) {
    this.userId = userId;
  }

  async fetchUser(): Promise<void> {
    const response = await fetch(`/api/users/${this.userId}`);
    this.user = await response.json();
  }

  async fetchDemoUser(): Promise<void> {
    this.user = user;
  }

  getUser(): IUser | null {
    return this.user;
  }
}

// eslint-disable-next-line import/prefer-default-export
export class WeatherModel {
  private data: any;

  async fetchWeater(): Promise<void> {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=37.532600&lon=127.024612&appid=3bc51c414cd84cdaaa5aa50ec07aacf0`
    );
    this.data = await response.json();
  }

  getWeather() {
    return this.data;
  }
}
