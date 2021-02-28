import React from 'react';
import CanvasJSReact from '../canvas/canvasjs.react';
function Analytics() {
  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const options = {
    animationEnabled: true,
    theme: 'light4',
    title: {
      text: 'Most Popular Social Networking Sites',
      fontFamily: 'Candara',
      fontColor: 'black',
      fontSize: '23',
    },
    axisX: {
      title: 'Social Network',
      titleFontFamily: 'Candara',
      reversed: true,
    },
    axisY: {
      title: 'Weekly Redirects',
      titleFontFamily: 'Candara',
      includeZero: true,
      labelFormatter: function addSymbols(e) {
        var suffixes = ['', '', '', 'k'];
        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
        if (order > suffixes.length - 1) order = suffixes.length - 1;
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
      },
    },
    data: [
      {
        type: 'area',
        dataPoints: [
          { y: 2200, label: 'Facebook' },
          { y: 1800, label: 'YouTube' },
          { y: 800, label: 'Google Forms' },
          { y: 563, label: 'Instagram' },
          { y: 376, label: 'Reddit' },
          { y: 336, label: 'Twitter' },
          { y: 330, label: 'others' },
        ],
      },
    ],
  };

  return (
    <div className="w-75 mx-auto mb-5">
      <h1 className="text-center apply-font-2 text-info">Analytics</h1>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </div>
  );
}
export default Analytics;
