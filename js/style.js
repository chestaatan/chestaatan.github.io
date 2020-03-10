const [red, green, blue] = [255, 255, 255]



let switch_white_pos = getPos(document.getElementById("light_theme")).y;
let switch_black_pos = getPos(document.getElementById("dark_theme")).y;

window.addEventListener('scroll', () => {
  const scroll_pos = (window.scrollY || window.pageYOffset);
  console.log (scroll_pos);
  if(scroll_pos > switch_white_pos) {
    document.body.className = "background_alt";
    if(scroll_pos > switch_black_pos) {
      document.body.className = "background";
    } 
    else {
      document.body.className = "background_alt";
    }
  } 
  else {
    document.body.className = "background";
  }
})

window.onresize=function onWindowResize(){
  switch_white_pos = getPos(document.getElementById("light_theme")).y;
  switch_black_pos = getPos(document.getElementById("dark_theme")).y;
};

function getPos(el) {
  // yay readability
  for (var lx=0, ly=0;
    el != null;
    lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
  return {x: lx,y: ly};
}