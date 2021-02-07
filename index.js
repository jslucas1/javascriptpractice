var count = 0;
function countMessage(){
    count++;
    let html = "The count is " + count;
    document.getElementById("helloMessage").innerHTML = html;
}

function showHello(){
    let html = "Welcome to the count app";
    document.getElementById("helloMessage").innerHTML = html;
}