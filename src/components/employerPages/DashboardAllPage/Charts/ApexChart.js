// ApexChart.js

import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [10, 55, 15, 20],
      options: {
        chart: {
          width: 300,
          type: "pie",
        },
        labels: [
          "industry A",
          "industry B",
          "industry C",
          "industry D",
        ],
        markers: {
          colors: ["#F44336", "#E91E63", "#9C27B0"],
        },
        theme: {
          monochrome: {
            enabled: true,
          },
        },
        responsive: [
          {
            breakpoint: 400,
            options: {
              chart: {
                width: 150,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width={380}
        />
      </div>
    );
  }
}

export default ApexChart;
