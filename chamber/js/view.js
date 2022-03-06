const gridButton = document.querySelector("#gridBtn");
const listButton = document.querySelector("#listBtn");

gridButton.addEventListener("click", function() {
    document.querySelector(".cards").style.display = "grid";
    document.querySelector(".btable").style.display = "none";
})

listButton.addEventListener("click", function() {
    document.querySelector(".cards").style.display = "none";
    document.querySelector(".btable").style.display = "block";
})