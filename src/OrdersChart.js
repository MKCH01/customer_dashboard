import React from "react";
import { GoogleCharts } from "google-charts";

function OrdersChart(props) {
  const { data } = props;
  const datas = data();

  GoogleCharts.load(drawChart);

  const chartData = [["No. of Orders", "Customer Count"]];

  for (const key in datas) {
    chartData.push([key, datas[key]]);
  }

  function drawChart() {
    const data = GoogleCharts.api.visualization.arrayToDataTable(chartData);
    const pie_1_chart = new GoogleCharts.api.visualization.PieChart(
      document.getElementById("chart1")
    );
    var option = {
      title: "Order Distribution",
    };
    pie_1_chart.draw(data, option);
  }

  return (
    <div>
      <div id="chart1" style={{ width: "480px", height: "300px" }}></div>
    </div>
  );
}

export default OrdersChart;
