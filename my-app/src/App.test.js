import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import ApplicationMessage from "./components/ApplicationMessage";
import Loader from "./components/Loader";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders without crashing", () => {
  shallow(<ApplicationMessage />);
});

it("renders without crashing", () => {
  shallow(<Loader />);
});
