import Vue from "vue";
import App from "./main";

describe("Vue component tests", () => {
  it("An example test should pass.", () => {
    expect(2).toEqual(2);
  });

  it("App should be a Vue component.", () => {
    expect(App._isVue).toEqual(true);
  });
});
