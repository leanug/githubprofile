import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'column2D',
    width: '100%',
    height: 400,
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Most Popular Repos",
        "decimals": 0,
        "showPercentValues": 0,
        "yAxisName": "Stars",
        "xAxisName": "Repos",
        "xAxisNameFontSize": "16px",
        "yAxisNameFontSize": "16px",
        "theme": "candy",
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />
}

export default ChartComponent
