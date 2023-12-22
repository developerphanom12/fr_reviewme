// ApexChart.js

import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [25 , 10 ,30 ,17,18],
      options: {
        chart: {
          width: 300,
          type: 'pie',
        },
        labels: ['client A', 'client B', 'client C', 'client D', 'client E'],
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
                position: 'bottom',
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
        <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={350} />
      </div>
    );
  }
}

export default ApexChart2;
