var vg_1 = "viz_1.json";
vegaEmbed("#scatter_chart", vg_1)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);


var vg_2 = "viz_2.json";
vegaEmbed("#bubble_chart", vg_2)
.then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
})
.catch(console.error);
