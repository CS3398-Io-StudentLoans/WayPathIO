<script>
  window.onload = function() {

    var ghRouting = new GraphHopper.Routing({
      key: "2e56a8ad-9ca8-484e-9526-0fc70fd19742",
      vehicle: "car",
      elevation: false
    });

    ghRouting.addPoint(new GHInput(47.400905, 8.534317));
    ghRouting.addPoint(new GHInput(47.394108, 8.538265));

    ghRouting.doRequest()
      .then(function(json) {
        // Add your own result handling here
        console.log(json);
      })
      .catch(function(err) {
        console.error(err.message);
      });


  };
</script>