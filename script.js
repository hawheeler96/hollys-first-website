const link1 = document.getElementById("email");
console.log(link1)
link1.style.color = "whitesmoke"
link1.addEventListener("mouseover", function handleMouseOver() {
    link1.style.color= "red";
});
link1.addEventListener("mouseout", function handleMouseOut() {
    link1.style.color = "whitesmoke";
})

const link2 = document.getElementById("linkedIn");
console.log(link2)
link2.style.color = "whitesmoke"
link2.addEventListener("mouseover", function handleMouseOver() {
    link2.style.color= "red";
});
link2.addEventListener("mouseout", function handleMouseOut() {
    link2.style.color = "whitesmoke";
})