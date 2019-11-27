function addPoster1() {
  var img1 = document.createElement("img");
  img1.src = "img/poster1.jpg";
  img1.classList.add("poster1");
  img1.setAttribute("id", "img");
  body.appendChild(img1);
}

function addPoster2() {
  var img2 = document.createElement("img");
  img2.src = "img/poster2.png";
  img2.classList.add("poster2");
  img2.setAttribute("id", "img");
  body.appendChild(img2);
}

function addPoster3() {
  var img3 = document.createElement("img");
  img3.src = "img/poster3.jpg";
  img3.classList.add("poster3");
  img3.setAttribute("id", "img");
  body.appendChild(img3);
}

function addPoster4() {
  var img4 = document.createElement("img");
  img4.src = "img/poster4.jpg";
  img4.classList.add("poster4");
  img4.setAttribute("id", "img");
  body.appendChild(img4);
}

function addPoster5() {
  var img5 = document.createElement("img");
  img5.src = "img/poster5.jpg";
  img5.classList.add("poster5");
  img5.setAttribute("id", "img");
  body.appendChild(img5);
}

function addPoster6() {
  var img6 = document.createElement("img");
  img6.src = "img/poster6.jpg";
  img6.classList.add("poster6");
  img6.setAttribute("id", "img");
  body.appendChild(img6);
}

function addPoster7() {
  var img7 = document.createElement("img");
  img7.src = "img/poster7.jpg";
  img7.classList.add("poster7");
  img7.setAttribute("id", "img");
  body.appendChild(img7);
}

function addPoster8() {
  var img8 = document.createElement("img");
  img8.src = "img/poster8.jpg";
  img8.classList.add("poster8");
  img8.setAttribute("id", "img");
  body.appendChild(img8);
}

function addPoster9() {
  var img9 = document.createElement("img");
  img9.src = "img/poster9.png";
  img9.classList.add("poster9");
  img9.setAttribute("id", "img");
  body.appendChild(img9);
}

addPoster1()
addPoster2()
addPoster3()
addPoster4()
addPoster5()
addPoster6()
addPoster7()
addPoster8()
addPoster9()

console.log(img.length);

for (i = 0; i < img.length; i++) {
  img[i].addEventListener("mouseenter",
    function() {
      this.style.display = 'none';
    });
}

// body.addEventListener('mouseup', addLogo);
// var displayNone = false;
//
// function addLogo(event) {
//   displaynone = true;
//   var logo = document.createElement("img");
//   logo.src = "img/gg.jpg";
//   logo.classList.add("logo");
//   img.onclick = function() {
//
//   };
//   body.appendChild(logo);
// }

var icon = document.getElementById('body');

function myFunction() {
  icon.classList.toggle("change");
}

function makeRec() {
var rec = document.createElement("div");
rec.classList.add("rectangle");
}
