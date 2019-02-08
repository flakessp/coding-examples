// BLOTTER - Example 2
var text = new Blotter.Text("Криэйтив 🥚", {
  family : "'PT Mono', serif",
  size : 80,
  fill : "#171717",
  paddingLeft : 40,
  paddingRight : 40
});

var text2 = new Blotter.Text("кодинг", {
  family : "'PT Mono', serif",
  size : 30,
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

var elem = document.querySelector(".canvas-container");
var scope = blotter.forText(text);
var scope2 = blotter.forText(text2);
scope.appendTo(elem);
scope2.appendTo(elem);


let winsize;
    const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
    calcWinsize();
    window.addEventListener('resize', calcWinsize);

    const getMousePos = (ev) => {
        let posx = 0;
        let posy = 0;
        if (!ev) ev = window.event;
        if (ev.pageX || ev.pageY) {
            posx = ev.pageX;
            posy = ev.pageY;
        }
        else if (ev.clientX || ev.clientY) 	{
            posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
            posy = ev.clientY + body.scrollTop + docEl.scrollTop;
        }
        return {x: posx, y: posy};
    }

    let mousePos = {x: winsize.width/2, y: winsize.height/2};
    window.addEventListener('mousemove', ev => {
      mousePos = getMousePos(ev);
    });