import { InstantApp } from "@felvin-search/core";
import { Component, queryToData } from "./App";

const App: InstantApp = {
  id: "@felvin-community/crypto",
  name: "cryptocurrency",
  description: "Provides crypto currency prices",
  queryToData,
  Component,
  screenshotPath: "./files/screenshot.png",
  exampleSearchQueries: ["price of cryto coin"],
};

export default App;
