import React, { useEffect, useState } from "react";
import { VegaLite } from "react-vega";
import "../App.css";

import data from "vega-datasets";

function BasicExamples() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await data["cars.json"]();
      console.log("cars :", res[0]);
      setCars(res);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <VegaLite spec={spec} data={barData} style={{ width: "95%" }} />
        {/* <div>{JSON.stringify(cars)}</div> */}
        {cars && (
          <div>
            <p>example of width and height based on container</p>
            <VegaLite
              spec={spec2}
              data={{
                table: cars,
              }}
              style={{ width: "500px", height: "60px" }}
            />
            <VegaLite
              spec={spec3Detail}
              data={{
                table: cars,
              }}
            />
            <VegaLite
              spec={spec4line}
              data={{
                table: cars,
              }}
            />
            <VegaLite
              spec={spec5}
              data={{
                table: cars,
              }}
            />
            <VegaLite
              spec={spec6}
              data={{
                table: cars,
              }}
            />
            <div>
              {JSON.stringify({
                table: cars,
              })}
            </div>
          </div>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const spec = {
  width: "container",
  height: 200,
  view: { fill: "red" },
  background: "steelblue",
  mark: "bar",
  encoding: {
    x: { field: "a", type: "ordinal" },
    y: { field: "b", type: "quantitative" },
    opacity: {
      condition: {
        test: {
          selection: "sel2",
        },
        value: 0.9,
      },
      value: 0.1,
    },
  },
  data: { name: "table" }, // note: vega-lite data attribute is a plain object instead of an array
  selection: {
    sel2: {
      type: "interval",
      encodings: ["x"],
    },
  },
};

const barData = {
  table: [
    { a: "A", b: 28 },
    { a: "B", b: 55 },
    { a: "C", b: 43 },
    { a: "D", b: 91 },
    { a: "E", b: 81 },
    { a: "F", b: 53 },
    { a: "G", b: 19 },
    { a: "H", b: 87 },
    { a: "I", b: 52 },
  ],
};

const spec2 = {
  width: "container",
  height: "container",
  mark: {
    type: "bar",
  },
  encoding: {
    x: {
      field: "Year",
      type: "ordinal",
      timeUnit: "year",
      axis: {
        title: null,
        labelAngle: 0,
      },
    },
    y: {
      type: "quantitative",
      aggregate: "count",
      title: null,
    },
    opacity: {
      condition: {
        test: {
          selection: "sel2",
        },
        value: 0.9,
      },
      value: 0.1,
    },
  },
  data: { name: "table" }, // note: vega-lite data attribute is a plain object instead of an array
  selection: {
    sel2: {
      type: "interval",
      encodings: ["x"],
    },
  },
};

const spec3Detail = {
  mark: {
    type: "point",
  },
  encoding: {
    x: {
      field: "Horsepower",
      type: "quantitative",
    },
    y: {
      field: "Miles_per_Gallon",
      type: "quantitative",
    },
  },
  data: { name: "table" },
};

const spec4line = {
  width: 400,
  height: 300,
  data: { name: "table" },
  mark: {
    type: "line",
  },
  encoding: {
    x: {
      field: "Year",
      type: "temporal",
    },
    y: {
      field: "Miles_per_Gallon",
      type: "quantitative",
      aggregate: "average",
    },
  },
};

const spec5 = {
  mark: { type: "point" },
  data: { name: "table" },
  encoding: {
    x: { field: "Horsepower", type: "quantitative" },
    y: { field: "Miles_per_Gallon", type: "quantitative" },
    color: { field: "Origin", type: "nominal" },
    tooltip: [
      { field: "Name", type: "nominal" },
      { field: "Origin", type: "nominal" },
    ],
  },
};

const spec6 = {
  vconcat: [
    {
      mark: { type: "bar" },
      data: { name: "table" },
      encoding: {
        x: {
          field: "Year",
          type: "ordinal",
          timeUnit: "year",
          axis: { title: null, labelAngle: 0 },
        },
        y: { type: "quantitative", aggregate: "count", title: null },
        opacity: {
          condition: { test: { selection: "sel3" }, value: 0.9 },
          value: 0.1,
        },
      },
      selection: { sel3: { type: "interval", encodings: ["x"] } },
      width: 400,
      height: 50,
    },
    {
      mark: { type: "point" },
      data: { name: "table" },
      encoding: {
        x: { field: "Horsepower", type: "quantitative" },
        y: { field: "Miles_per_Gallon", type: "quantitative" },
        opacity: {
          condition: { test: { selection: "sel3" }, value: 0.9 },
          value: 0.1,
        },
      },
    },
  ],
};
export default BasicExamples;
