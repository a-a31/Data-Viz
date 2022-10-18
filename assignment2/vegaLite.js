var vg_1 = "CHORO_MAP.json";
vegaEmbed("#map_chart", vg_1)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);


var vg_2 = "LOLLIPOP_OVERALL.json";
vegaEmbed("#lollipop_top_10", vg_2)
.then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
})
.catch(console.error);

var vg_3 = "scatterplot_rating_value.json";
vegaEmbed("#scatter_plot", vg_3)
.then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
})
.catch(console.error);

var vg_4 = "Multi-chart.json";
vegaEmbed("#multi_plot", vg_4)
.then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
})
.catch(console.error);

var vg_5 = "potential.json";
vegaEmbed("#potential", vg_5)
.then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
})
.catch(console.error);



