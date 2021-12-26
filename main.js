

function fToCel(){
    let f = document.querySelector("#input").value;
    let c = (5/9) * (f -32);
    document.querySelector("#result").innerHTML = c.toFixed(2)+"C";
    document.querySelector("#input").value = "";

}


function cToFeh(){
    let c = document.querySelector("#input").value;
    let f = (9/5 * c) + 32;
    document.querySelector("#result").innerHTML = f.toFixed(2)+"F";
    document.querySelector("#input").value = "";
}