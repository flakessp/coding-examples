// BLOTTER - Example 2
var text = new Blotter.Text("Криэйтив", {
  family : "'PT Mono', serif",
  size : 100,
  fill : "#171717",
  paddingLeft : 40,
  paddingRight : 40
});

var text2 = new Blotter.Text("кодинг", {
  family : "'PT Mono', serif",
  size : 50,
  fill : "#171717",
  paddingLeft : 40,
  paddingRight : 40
});


var material = new Blotter.LiquidDistortMaterial();

// Play with the value for uSpeed. Lower values slow
// down animation, while higher values speed it up. At
// a speed of 0.0, animation is stopped entirely.
material.uniforms.uSpeed.value = 0.1;

// Try uncommenting the following line to play with
// the "volatility" of the effect. Higher values here will
// produce more dramatic changes in the appearance of your
// text as it animates, but you will likely want to keep
// the value below 1.0.
//material.uniforms.uVolatility.value = 0.30;

var blotter = new Blotter(material, {
  texts : [text,text2]
});

var elem = document.querySelector(".container");
var scope = blotter.forText(text);
var scope2 = blotter.forText(text2);
scope.appendTo(elem);
scope2.appendTo(elem);