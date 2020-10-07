const colors = ["green", "red", "rgba(133,122,200)", "f15025"];
const btn = document.getElementById('btn')
const color = document.querySelector(".color")

btn.addEventListener('click', function(){
    // goal: get random number 0-3 //
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randonNumber];
    function getRandomNumber(params) {
        return Math.floor(Math.random() *colors.length);
    }
})