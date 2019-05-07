import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-annotation";

class PedestrianFatalities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
        ],
        datasets: [
          {
            label: "Pedestrian Fatalities",
            backgroundColor: "rgba(207, 0, 15, 1)",
            borderColor: "rgba(242, 38, 19, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(150, 40, 27, 1)",
            hoverBorderColor: "rgba(192, 57, 43, 1)",
            data: [29, 32, 34, 20, 28, 32, 31, 30, 37, 48]
          }
        ]
      }
    };
  }
  render() {
    const options = {
      annotation: {
        annotations: [
          {
            drawTime: "afterDatasetDraw",
            borderColor: "red",
            borderDash: [2, 2],
            borderWidth: 2,
            mode: "vertical",
            type: "line",
            value: 10,
            scaleID: "x-axis-0",
          }
        ],
        label: {
          backgroundColor: "red",
          fontFamily: "sans-serif",
          fontSize: 10,
        }
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
        position: "bottom",
        fontSize: 20,
        text: "Pedestrian Fatalities",
      }
      //maintainAspectRatio: false
    };
    return (
      <Bar data={this.state.data} width={50} height={25} options={options} />
    );
  }
}

export default PedestrianFatalities;