const openface = document.querySelector(".open")
const closedface = ducument.querySelector(".closed")
openface.addEventListener("click", function(){
closedface.style.display = "block";
openface.style.display = "none";
})
closedface.addEventListener("click", function(){
openface.style.display = "block";
closedface.style.display = "none";
})