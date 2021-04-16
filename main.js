
function submit(){
    var inputes=[];
    for(var i=1; i<=6; i++){
        inputes.push(document.getElementById("item_"+i).value);
        document.getElementById("display").innerHTML=inputes.join(".");
}
