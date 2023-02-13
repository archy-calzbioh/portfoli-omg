document.getElementById("main_content").innerHTML =
  '<object type="text/html" data="' + "home" + '.html" ></object>';

//iterate over navbar elements change active element, display new page content in main div

var navbar = document.getElementById("nav");
var btns = navbar.getElementsByClassName("link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    let myAnchor = document.getElementsByClassName("link active");
    let text = myAnchor[0].getAttribute("id");
    document.getElementById("main_content").innerHTML =
      '<object type="text/html" data="' + text + '.html" ></object>';
  });
}

//generate spans for arbitrary string

test = "portfoli-omg";
for (var i = 0; i < test.length; i++) {
  const headGet = document.getElementById("bouncy_header");
  headGet.append();

  const headerSpan = document.createElement("span");
  headerSpan.append(test[i]);

  headGet.append(headerSpan);
}

//make text bounce
$(document).ready(function () {
  var counter = 0,
    $chars = $(".test").children();

  setInterval(function () {
    $chars.eq(counter).effect("bounce", { times: 1 }, 500);
    counter++;
    if (counter >= $chars.length) {
      counter = 0;
    }
  }, 250);
});
