import Search from "./search";

export default class Display {
  constructor() {}

  refresh() {}
  render() {
    return `
      ${new Search().render()}
    `;
  }
}
