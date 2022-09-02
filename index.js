// Slider Functon
$(document).ready(function () {
 $('#responsive').lightSlider({
  item: 2.3,
  loop: false,
  pager: false,
  autoWidth: true,
  slideMove: 1,
  slideMargin: 32,
  mode: "slide",
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  responsive: [{
    breakpoint: 800,
    settings: {
     item: 3,
     slideMove: 1,
     slideMargin: 12,
     controls: true,
    }
   },
   {
    breakpoint: 480,
    settings: {
     item: 2.2,
     slideMove: 1,
     slideMargin: 12,
    }
   }
  ]
 });
});

// Add Product Variant Options
const colors = ['#99C3CC', '#CC9999', '#CB99CC', '#BCD9B2']
$(colors).each((i, color) => {
 $("<div/>", {
  "class": "variant",
  "css": {
   "background-color": color,
  },
 }).appendTo(".js-variant-option");
})