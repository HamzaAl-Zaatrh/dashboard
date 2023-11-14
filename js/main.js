var options = {
  chart: {
    height: "100%",
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: "Series 1",
      data: [30, 230, 200, 450, 350, 530, 300],
    },
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

// pie-chart

var optionsPie = {
  series: [40, 20, 15, 25],
  chart: {
    type: "donut",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  labels: ["Documents Files", "Images Files", "Voices Files", "Vidoes Files"],
  colors: ["#32c7ef", "#f9a618", "#f53b4f", "#2884fc"],
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
};

var chartPie = new ApexCharts(document.querySelector("#pie-chart"), optionsPie);

chartPie.render();

// Stacked Bars 100 ---------`
var optionsBars = {
  series: [
    {
      name: "Within One Days",
      data: [83, 44],
    },
    {
      name: "Within Two Days",
      data: [7, 39],
    },
    {
      name: "Within Four Days",
      data: [5, 11],
    },
    {
      name: "More Than Four Days",
      data: [4, 6],
    },
  ],
  chart: {
    type: "bar",
    height: "85%",
    stacked: true,
    stackType: "100%",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  stroke: {
    width: 1,
    colors: ["#fff"],
  },
  xaxis: {
    categories: ["Response Time", "Resolution Time"],
  },
  // tooltip: {
  //   y: {
  //     formatter: function (val) {
  //       return val + "K";
  //     },
  //   },
  // },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    offsetX: 40,
  },
};

var chartBars = new ApexCharts(
  document.querySelector("#bars-chart"),
  optionsBars
);

chartBars.render();

// function handleInputChange(e) {
//   let target = e.target;
//   if (e.target.type !== "range") {
//     target = document.getElementById("range");
//   }
//   const min = target.min;
//   const max = target.max;
//   const val = target.value;
//   let percentage = ((val - min) * 100) / (max - min);

//   // condition to check whether the document has RTL direction
//   // you can move it to a variable, if document direction is dynamic
//   if (document.documentElement.dir === "rtl") {
//     percentage = max - val;
//   }

//   target.style.backgroundSize = percentage + "% 100%";
// }
