import React, { Component } from 'react';
// import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import Chart from '../components/common/Chart';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: '最低成交价',
      fillColor: '#1890ff',
      strokeColor: '#1890ff',
      pointColor: '#096DD9',
      pointStrokeColor: '#1890ff',
      pointHighlightFill: '#1890ff',
      pointHighlightStroke: '#1890ff',
      data: [82200, 83200, 83100, 85100, 85000, 84400, 87200, 86900, 86500, 88300, 88600, 88300]
    },
    {
      label: '警示价',
      fillColor: '#FF4340',
      strokeColor: '#FF4340',
      pointColor: '#FF181C',
      pointStrokeColor: '#FF4340',
      pointHighlightFill: '#FF4340',
      pointHighlightStroke: '#FF4340',
      data: [80600, 80600, 80600, 82800, 82800, 82800, 84800, 84800, 84800, 86800, 86800, 86800]
    },
    {
      label: '差价',
      fillColor: '#fff',
      strokeColor: '#fff',
      pointColor: '#fff',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: '#fff',
      data: [1600, 2600, 2500, 2300, 2200, 1600, 2400, 2100, 1700, 1500, 1800, 1500]
    }
  ]
};
const options = {
  // Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines: true,

};


@connect()
@autobind
export default class extends Component {
  render() {
    return (
      <div>
        <Chart
          data={data}
          options={options}
        />
      </div>
    );
  }
}
