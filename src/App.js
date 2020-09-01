import React, { useRef, useEffect, useState } from "react";
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  axisRight,
  scaleLinear,
} from "d3";

function App() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);
    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);
   
    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat(index => index+1); //requires a scale
    const yAxis = axisRight(yScale);
    
    svg
      .select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis);
    svg
      .select(".y-axis")
      .style('transform', 'translate(300px')
      .call(yAxis);
    const pLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    // svg
    //   .selectAll("circle")
    //   .data(data)
    //   .join('circle')
    //   .attr("r", (value) => value)
    //   .attr("cx", (value) => value * 2)
    //   .attr("cy", (value) => value * 2)
    //   .attr("stroke", "red");
    svg
      .selectAll(".line")
      .data([data]) //single array so d3 only makes one path instead of multiple
      .join("path")
      .attr("class", "line")
      .attr("d", pLine)
      .attr("fill", "none")
      .attr("stroke", "black");
  }, [data]);

  return (
    <div className="App">
      {/* <Graph_1 />
      <Graph_2 />
      <Graph_3 /> */}
      <svg ref={svgRef}>
        <g className="x-axis"></g>
        <g className="y-axis"></g>
      </svg>
      <br /><br />
      <button onClick={() => setData(data.map((data) => Math.random() * 100))}>
        Randomize Data
      </button>
      <button onClick={() => setData(data.filter((data) => data < 60))}>
        Filter Data
      </button>
    </div>
  );
}

export default App;
