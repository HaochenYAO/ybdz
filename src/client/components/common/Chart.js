import React from 'react';
import { PropTypes } from 'prop-types';
import { Line as LineChart } from 'react-chartjs-2';

const Chart = props => (
  <LineChart
    data={props.data}
    options={props.options}
  />);

Chart.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      fillColor: PropTypes.string,
      strokeColor: PropTypes.string,
      pointColor: PropTypes.string,
      pointStrokeColor: PropTypes.string,
      pointHighlightFill: PropTypes.string,
      pointHighlightStroke: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired).isRequired,
  }),
  options: PropTypes.shape({
    scaleShowGridLines: PropTypes.bool
  }),
};

Chart.defaultProps = {
  data: {
    labels: [],
    datasets: [],
  },
  options: {}
};
export default Chart;
