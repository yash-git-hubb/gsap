function codebreak() {
  var h1 = document.querySelector("h1");
  var h1text = document.querySelector("h1").textContent;

  var splitted = h1text.split("");
  var half = splitted.length / 2;
  var clutter = "";

  splitted.forEach(function (val, idx) {
    if (idx < half) {
      clutter += `<span class="a">${val}</span>`;
    } else {
      clutter += `<span class="b">${val}</span>`;
    }
  });

  h1.innerHTML=clutter
  console.log(clutter)
}

codebreak()

gsap.from('h1 .a',{
    opacity:0,
    y:120,
    duration:0.6,
    delay:0.5,
    stagger:0.20
})

gsap.from('h1 .b',{
    opacity:0,
    y:120,
    duration:0.6,
    delay:0.5,
    stagger:-0.20
})