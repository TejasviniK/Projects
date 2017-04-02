var myReq = new XMLHttpRequest();

myReq.open('GET', 'data4.json', true);
myReq.responseType ='text';
myReq.send();

myReq.onload = function () {
    if(myReq.status === 200){
        var myStr = JSON.parse(myReq.responseText);
        console.log(myStr);
        display(0);
    }
}

function display(x){
    console.log(x);
    var myStr = JSON.parse(myReq.responseText);
    document.getElementById('name').innerHTML = myStr[x].Name;
    
    document.getElementById('imgName').src = myStr[x].image;
    document.getElementById('imgName').style.width="400px";
    document.getElementById('imgName').style.height="400px";
    document.getElementById('imgName').style.border="2px solid black";
    document.getElementById('description').innerHTML = myStr[x].Description;
}