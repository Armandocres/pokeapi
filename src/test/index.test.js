import React from "react";
import ReactDOM from "react-dom";
import PokeApi from '../PokeApi';

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Index.js", () => {
  it("Debe de hacer render sin romperse", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("../index");
    expect(ReactDOM.render).toHaveBeenCalledWith(<PokeApi />, div);
  });
});