import Navigation from "./navigation";
import Search from "./search";
import WeatherToday from "./weatherToday";
import WeatherForecast from "./weatherForecast";
import Loading from "./loading";

export default class Display {
  refresh(data, units) {
    const body = document.querySelector("body");
    switch (data.currentConditions.icon) {
      case "clear-day":
      case "partly-cloudy-day":
        body.className = "yellow";
        break;

      case "rain":
      case "wind":
        body.className = "blue";
        break;

      case "clear-night":
      case "partly-cloudy-night":
        body.className = "black";
        break;

      default:
        body.className = "grey";
        break;
    }

    body.innerHTML = `
      ${new Navigation(data, units).render()}
      ${new Search(data).render()}
      <main>
        ${new WeatherToday(data).render()}
        ${new WeatherForecast(data).render()}
      </main>
    `;
  }

  loading() {
    const main = document.querySelector("main");
    main.innerHTML = `
      ${new Loading().render()}
    `;
  }
  render() {
    return `
      ${new Navigation().render()}
      ${new Search().render()}
      <main></main>
    `;
  }
}
