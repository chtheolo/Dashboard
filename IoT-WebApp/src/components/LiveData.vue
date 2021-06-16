<template>
  <div>
    <v-container grid-list-md fluid>
      <div>
        <v-layout row wrap>
          <v-flex md6 sm6>
            <v-card class="card_chart" color="#303030">
              <v-card-actions>
                {{ $t('chartGasSensor') }}
                <v-spacer></v-spacer>
              </v-card-actions>
              <line-chart
                keep-alive
                :chartData="gas"
                ref="gas_linechart"
              ></line-chart>
            </v-card>
          </v-flex>
          <v-flex md3 sm3>
            <v-card elevation="24" hover class="card_chart" color="#303030" height="100%">
              <v-card-actions>
                {{ $t('chartGasSensor') }}
                <v-spacer></v-spacer>
              </v-card-actions>
              <br />
              {{ $t('chartGasLastMeasurement') }}
              <gauge-chart
                :chartData="gas"
                :Options="gaugeOptionsWindSpeed"
                ref="gas_gauge"
              ></gauge-chart>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>

<script>
import GaugeChart from "./GaugeChart";
import linecharts from "./LineCharts";
import "vue-weather-widget/dist/css/vue-weather-widget.css";

var Id_inter;
var Id_gaugeInter;

export default {
  components: {
    "line-chart": linecharts,
    "gauge-chart": GaugeChart,
  },
  data: () => ({
    intervalTimeout: 900000,
    gas:"GAS",
    gaugeWindSpeed: "GAUGE_WINDSPEED",
    BasicOption: true,
    notBasicOption: false,
    chartOptions: "",
    gaugeOptionsWindSpeed: "",
    gaugeOptionsWindSpeedTitle: "",
  }),
  computed: {
    ChartOptions() {
    },
  },
  watch: {
  },
  created() {
  },
  mounted() {
  },
  beforeDestroy() {
    clearInterval(Id_inter);
    clearInterval(Id_gaugeInter);
  },
  methods: {
    formatTitle(metric) {
      if (this.$i18n.locale == "en") return metric;

      var options = {
        MEAN: "ΜΕΣΗ ΤΙΜΗ",
        MIN: "ΕΛΑΧΙΣΤΗ",
        MAX: "ΜΕΓΙΣΤΗ",
        MEDIAN: "ΔΙΑΜΕΣΟΣ",
        LAST: "ΠΡΟΣΦΑΤΗ",
        FIRST: "ΠΑΛΑΙΟΤΕΡΗ"
      };
      return options[metric];
    }
  }
};
</script>

<style>
.card_chart {
  border-style: solid;
  border-color: #424242 !important;
  border-width: 2px;
}
.meteo_avatar {
  border-style: solid;
  border-color: rgb(252, 226, 5, 1) !important;
  border-width: 2px;
}
.agro {
  border-style: solid;
  border-color: #424242 !important;
  border-width: 2px;
}
.analytics {
  border-style: solid;
  border-color: #424242 !important;
  border-width: 2px;
}
.meteorectangle {
  border-radius: 2px;
  margin-right: 5px;
  height: 20px;
  width: 60px;
  background-color: yellow;
}
.agrorectangle {
  border-radius: 2px;
  margin-right: 5px;
  height: 20px;
  width: 50px;
  background-color: green;
}
.analyticsrectangle {
  border-radius: 2px;
  margin-right: 5px;
  height: 20px;
  width: 90px;
  background-color: royalblue;
}

.fe_alert a {
  color: orange;
}

.amcharts-chart-div a {
  display: none !important;
}

.container {
  padding: 24px;
}

.v-card {
  max-width: 50;
  min-width: 100;
}
</style>
