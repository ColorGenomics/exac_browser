// Custom JS separate from all the components we're currently using
$(document).ready(function() {

  // Home page search binds to hide presuggestions when overridden by typeahead
  $("#home-searchbox-input").bind("focus", function() {
    $(".suggestions").show()
  })
  $("#home-searchbox-input").bind("blur", function() {
    $(".suggestions").delay(300).queue(function() {
      $(".suggestions").hide()
    })
  })
  $("#home-searchbox-input").bind("keyup", function() {
    console.log($(this).val())
    if($(this).val() != "") {
      $(".suggestions").hide()
    } else {
      $(".suggestions").show()
    }
  })

  // Slight delay is needed because table is dynamically generated, should fix so these events bind once the tables generated
  $("body").delay(500).queue(function() {
    // Make .table_variant row clickable to the first link found
    $("#variant_table .table_variant").click(function() {
      var link = $(this).find("a").attr('href')
      window.location = link
    })
    // add gray em dash to empty table cells
    $("#variant_table td").each(function(index) {
      if($(this).text() == "") {
        $(this).append("<span class='empty-cell'></span>")
      }
    })
  })
})
