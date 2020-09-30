var code = document.getElementById("code");
var icon = document.getElementById("icon");
var submit = document.getElementById("submit");
var circle = document.getElementById("circle");
var condition = document.getElementById("condition");
var popup = document.getElementById("myPopup");

/*submit.disabled = true; */

code.addEventListener("input", (e) => {

    var regex = /^[0-9]{8}$/;
    var saisiCode = code.value;

    if((saisiCode.length != 8) &&  !regex.test(saisiCode) ){
        icon.src = "images/false.png";
        submit.disabled = true;
        submit.style.opacity = 0.4;
        submit.style.backgroundColor="red";
        console.log(regex.test(saisiCode))
    }else{
        icon.src = "images/true.jpg";
        submit.disabled = false;
        submit.style.backgroundColor="red";
        submit.style.opacity = 1;
        
    }
});

condition.addEventListener("click", (e) => {
    condition.style.backgroundColor="green";
    condition.style.textAlign="left";
    condition.innerText = "Oui";
    condition.style.color="white";
});

circle.addEventListener("click", (e) => {
    popup.classList.toggle("show");
});




