import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { autobind } from 'core-decorators';
import fetch from 'isomorphic-fetch';
import Chart from '../components/common/Chart';

@connect()
@autobind
export default class extends Component {
  static defaultProps = {
    match: {}
  }
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        brand: PropTypes.string,
        plateform: PropTypes.string,
        field: PropTypes.string
      })
    }),
  };

  state = {
    dataset: {
      labels: [],
      datasets: []
    },
  };

  fetchDate(brand, plateform, field) {
    const datasetTmp = {};
    const labels = [];
    const datasets = [];
    const data = {
      labels: [],
      datasets: []
    };
    fetch(`http://localhost:3006/data/${brand}/${plateform}`)
      .then(response => response.json())
      .then((json) => {
        for (let i = 0; i < json.length; i += 1) {
          const tDate = json[i].date;
          if (labels.indexOf(tDate) === -1) {
            labels.push(tDate);
          }
          if (datasetTmp[json[i].name] === undefined) {
            datasetTmp[json[i].name] = {
              data: [parseInt(json[i][field], 10)],
            };
          } else {
            datasetTmp[json[i].name].data.push(parseInt(json[i][field], 10));
          }
        }
        return datasetTmp;
      }).then((set) => {
        Object.keys(set).forEach((key) => {
          set[key].label = key;
          datasets.push(set[key]);
        });
        data.labels = labels;
        data.datasets = datasets.splice(0, 5);
        this.setState({ dataset: data });
      });
  }

  render() {
    const { match: { params: { brand, plateform, field } } } = this.props;
    this.fetchDate(brand, plateform, field);
    const options = {
      // Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: true,
    };
    return (
      <div>
        <Chart
          data={this.state.dataset}
          options={options}
        />
      </div>
    );
  }
}
