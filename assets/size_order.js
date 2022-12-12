var arrSizes = [];
$(".reorderSelectedData[name='Talla']").first().find(".variant-input").each(function( index ) {
  switch ($(this).data("value")) {
    case "XS": arrSizes[10] = (this); break;
    case "S": arrSizes[20] = (this); break;
    case "M": arrSizes[30] = (this); break;
    case "L": arrSizes[40] = (this); break;
    case "XL": arrSizes[50] = (this); break;
    case "XXL": arrSizes[60] = (this); break;
  }
});
if(arrSizes.length >0){
  $(".reorderSelectedData[name='Talla']").first().html("");
  arrSizes.forEach(function(index) {
    console.log(index);
    $(".reorderSelectedData[name='Talla']").first().append(index);
  });
}

