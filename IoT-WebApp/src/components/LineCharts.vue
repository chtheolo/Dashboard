<template>
  <v-container>
    <div class="Linechart">
      <div id="chart" style="height: 250px" ref="linechart"></div>
    </div>
  </v-container>
</template>


<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import BackendAPI from "../services/api/backEnd";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dark);

var last_timestamp;
export default {
  props: ["chartData"],
  data: () => ({
    dataType: "",
    indicatorLabel: ""
  }),
  computed: {
  },
  watch: {
  },
  created() {
    this.getData();
  },
  mounted() {
    this.createChart();
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
  methods: {
    createChart() {
      var chart = am4core.create(this.$refs.linechart, am4charts.XYChart);
      (chart.paddingRight = 0), 0, 0, 0;
      //create the axis
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.minGridDistance = 50;
      dateAxis.periodChangeDateFormats.setKey("hour", "[bold]MMM dd[/]");
      dateAxis.endLocation = 1;
      dateAxis.tooltipDateFormat = "dd-MM-YYYY/" + "HH:mm";

      var indicator;
      indicator = chart.tooltipContainer.createChild(am4core.Container);
      // indicator.background.fill = am4core.color("#fff");
      // indicator.background.fillOpacity = 0.8;
      indicator.width = am4core.percent(100);
      indicator.height = am4core.percent(100);

      this.indicatorLabel = indicator.createChild(am4core.Label);
      // this.indicatorLabel.text ="";
      this.indicatorLabel.align = "center";
      this.indicatorLabel.valign = "middle";
      this.indicatorLabel.fontSize = 20;

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      switch (this.chartData) {
        case "GAS":
          valueAxis.renderer.labels.template.adapter.add("text", function(
            text
          ) {
            return text + "%";
          });
          this.dataType = "gas";
          break;
      }

      var gradient;
      var gradient1;
      if (this.dataType == "gas") {
        // for (let i = 0; i < this.sensors.length; i++) {
          let i = 0;
          this[`series${i}`] = chart.series.push(new am4charts.LineSeries());
            // this[`series${i}`].name = this.AgroNodeID[i].replace("node_", this.$t("node"));
            this[`series${i}`].name ="gas_premier_sensor";
            // this[`series${i}`].name = this[`series${i}`].name.substring(0, this[`series${i}`].name.length - 2);
          this[`series${i}`].dataFields.valueY = "sensor_data";
          this[`series${i}`].dataFields.dateX = `date_${i}`;
          //this[`series${i}`]series.tooltipText = "{valueY.value}";
          this[`series${i}`].tooltipText = "{valueY}";
          this[`series${i}`].tooltip.pointerOrientation = "vertical";
          this[`series${i}`].tooltip.background.cornerRadius = 20;
          this[`series${i}`].tooltip.background.strokeOpacity = 1;
          this[`series${i}`].tooltip.getStrokeFromObject = true;
          this[`series${i}`].tooltip.label.minWidth = 40;
          this[`series${i}`].tooltip.label.minHeight = 40;
          this[`series${i}`].minBulletDistance = 15;
          this[`series${i}`].tooltip.label.textAlign = "middle";
          this[`series${i}`].tooltip.label.textValign = "middle";

          if (i == 0) {
            this[`series${i}`].fill = am4core.color("#33FF9F");
            this[`series${i}`].stroke = am4core.color("#33FF9F");
          } else if (i == 1) {
            this[`series${i}`].fill = am4core.color("#33D7FF");
            this[`series${i}`].stroke = am4core.color("#33D7FF");
          }
          this[`series${i}`].fillOpacity = 1;
          this[`series${i}`].fillOpacity = 1;

          gradient = new am4core.LinearGradient();
          gradient.addColor("#33FF9F", 0.05);
          this[`series${i}`].fill = gradient;

          gradient1 = new am4core.LinearGradient();
          gradient1.addColor("#33D7FF", 0.05);
          this[`series${i}`].fill = gradient;
          this[`bullet${i}`] = this[`series${i}`].bullets.push(
            new am4charts.CircleBullet()
          );
          this[`bullet${i}`].circle.radius = 2;
          
        // } end of for-loop
      }
      chart.cursor = new am4charts.XYCursor();
      chart.legend = new am4charts.Legend();
      this.chart = chart;
    },
    getData() {
      console.log("Enter");
      var measurements = [];

      BackendAPI.get('/gas_all')
      .then(response => {
        for(let i=0; i<response.data.length; i++) {
          measurements.push({
            [`date_0`]: response.data[i].date,
            [`sensor_data`]: response.data[i].sensor_data
          });
        }

        this.chart.data = measurements;
      })
      .catch(error => {
        console.log(error);
      })

    }
  }
};
</script>

<style scoped>
#chart {
  height: 245px;
}
.amcharts-chart-div > a {
  display: none !important;
}
</style>
