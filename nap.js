var header = document.getElementById("ul");
var btns = header.getElementsByClassName("link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    let myAnchor = document.getElementsByClassName("link active");
    let text = myAnchor[0].getAttribute("href");
    document.getElementById("main").innerHTML = text;
  });
}
