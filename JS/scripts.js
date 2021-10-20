function flTbsp(tbsp){
  return tbsp / 2;
}

function flozCup (floz){
return floz / 8;
}

function cupPint (cup){
  return cup / 2;
}

function pintQuart (pint){
  return pint * 2;
}

$(document).ready(function() {
$("form#tablespoon").submit(function(event){
event.preventDefault();
const tbsp = parseInt($("#tbsp").val());
const result = flTbsp(tbsp);
$("#output").text(result);
})

$("form#fluid-ounce").submit(function(event){
  event.preventDefault();
  const floz = parseInt($("#fl-oz").val());
  const result = flozCup(floz);
  $("#output").text(result);
  })

  $("form#cups").submit(function(event){
    event.preventDefault();
    const george = parseInt($("#cups").val());
    const result = cupPint(george);
    $("#output").text(result);
    })

    $("form#pints").submit(function(event){
      event.preventDefault();
      const george = parseInt($("#pints").val());
      const result = pintQuart(george);
      $("#output").text(result);
      })
})

