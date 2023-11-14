const [viewportWidth,fontSizeRem,fontSizePx] = document.querySelectorAll("h1");

function calculate(){
  viewportWidth.innerText = `Viewport Width: ${window.innerWidth}px`;
  
  fontSizeRem.innerText = `Font Size (rem): ${Number(window.getComputedStyle(viewportWidth).fontSize.slice(0, -2)) / 16}rem`;
  
  fontSizePx.innerText = `Font Size (px): ${window.getComputedStyle(viewportWidth).fontSize}`;
  
  if(window.innerWidth >= 840 || window.innerWidth <= 360){
    fontSizePx.classList.add("red");
    fontSizeRem.classList.add("red");
  }else{
    fontSizePx.classList.remove("red");
    fontSizeRem.classList.remove("red");
  }
}

window.addEventListener("resize", () => {
  calculate();
});

calculate();