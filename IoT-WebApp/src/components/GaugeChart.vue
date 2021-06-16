<template>
  <div class="Gauge">
    <div id="gauge" ref="gaugeChart"></div>
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import BackendAPI from "../services/api/backEnd";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dark);

var Value;
var label;
var hand;

export default {
  props: ["chartData", "Options"],
  data: () => ({
    option: "LAST",
    units: "",
    dataType: "",
    max: ""
  }),
  created() {
    this.getData();
  },
  mounted() {
    var chart = am4core.create(this.$refs.gaugeChart, am4charts.GaugeChart);
    chart.innerRadius = am4core.percent(80);
    chart.radius = am4core.percent(100);
    chart.startAngle = 120;
    chart.endAngle = 420;

    switch (this.chartData) {
      case "GAS":
        this.units = "%"
        break;
    }
    var axis = chart.xAxes.push(new am4charts.ValueAxis());

    axis.min = 0;
    axis.max = 100;
    axis.strictMinMax = true;
    axis.renderer.radius = am4core.percent(75);
    axis.renderer.inside = true;
    axis.renderer.ticks.template.length = 10;
    axis.renderer.grid.template.disabled = true;
    axis.renderer.labels.template.radius = 23;

    var colorSet = new am4core.ColorSet();

    var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
    axis2.min = 0;
    axis2.max = 100;
    axis2.renderer.innerRadius = -30;
    axis2.strictMinMax = true;
    axis2.renderer.labels.template.disabled = true;
    axis2.renderer.ticks.template.disabled = true;
    axis2.renderer.grid.template.disabled = true;

    var range0 = axis2.axisRanges.create();
    range0.value = 0;
    range0.endValue = 70;
    range0.axisFill.fillOpacity = 1;
    range0.axisFill.fill = colorSet.getIndex(17);

    var range1 = axis2.axisRanges.create();
    range1.value = 10;
    range1.endValue = 100;
    range1.axisFill.fillOpacity = 1;
    range1.axisFill.fill = colorSet.getIndex(4);

    label = chart.radarContainer.createChild(am4core.Label);
    label.isMeasured = false;
    label.fontSize = 12;
    label.x = am4core.percent(30);
    label.y = am4core.percent(80);
    label.horizontalCenter = "middle";
    label.verticalCenter = "bottom";
    label.text = "0 " + this.units;

    hand = chart.hands.push(new am4charts.ClockHand());
    hand.axis = axis2;
    hand.innerRadius = am4core.percent(75);
    hand.startWidth = 8;
    hand.pin.disabled = true;
    hand.value = 0;

    hand.events.on("propertychanged", function(ev) {
      range0.endValue = ev.target.value;
      range1.value = ev.target.value;
      axis2.invalidate();
    });

    // eslint-disable-next-line no-unused-vars
    var animation = new am4core.Animation(hand, {
      property: "Value",
      to: Value
    });
  },
  methods: {
    getData() {
      setInterval(function() {
        BackendAPI.get('/gas')
          .then(response => {
            console.log(response.data.sensor_data);
            Value = response.data.sensor_data;
            label.text = Value + "%";
            hand.value = Value;
            // eslint-disable-next-line no-unused-vars
            var animation = new am4core.Animation(hand, {
              property: "Value",
              to: Value
            });
            
          })
          .catch(error => {
            console.log(error);
          })
      }, 2000);
    }
  }
};
</script>

<style scoped>
#gauge {
  height: 298px;
}
</style>
