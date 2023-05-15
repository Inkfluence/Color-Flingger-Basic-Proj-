const colors = [ "green", "red", "rgba(122, 295, 122)", "#f1f3f2"]; 

// get elements gets retrieves the element by its DOM ID while the query selectr retrieves the element by its css property
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

// btn event listener

btn.addEventListener("click", function(){
    const randNum = getRandNum();
    document.body.style.backgroundColor= colors[randNum];
    color.textContent =colors[randNum];
});

// math.floor rounds up the numberr while math.random genertes a number between 0-0.99 so we have to multiply with the length of const here
function getRandNum(){
    return Math.floor(Math.random()*colors.length);
}