import React from 'react';
import { PropTypes } from 'prop-types';
import { Line as LineChart } from 'react-chartjs-2';

const Chart = props => (
  <LineChart
    data={props.data}
    options={props.options}
  />);


Chart.propTypes = {
  data: PropTypes.PropTypes.oneOf(['Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    fillColor: PropTypes.string.isRequired,
    strokeColor: PropTypes.string.isRequired,
    pointColor: PropTypes.string.isRequired,
    pointStrokeColor: PropTypes.string.isRequired,
    pointHighlightFill: PropTypes.string.isRequired,
    pointHighlightStroke: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired).isRequired,
};
export default Chart;
