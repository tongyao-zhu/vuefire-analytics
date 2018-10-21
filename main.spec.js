import Vue from "vue";
import App from "./components/App.js";

describe("Vue component tests", () => {
  it("An example test should pass.", () => {
    expect(2).toEqual(2);
  });
  it("App should be a Vue component.", () => {
    //expect(App._isVue).toEqual(true);
  });
  it("App localBarData should be an instance of Array.", () => {
    //expect(App.data.currentRoute).toBeInstanceOf(Array);
  });

  //localBarData: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]],
});
