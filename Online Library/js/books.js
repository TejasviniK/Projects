var myReq = new XMLHttpRequest();

function send() {
    document.getElementById('title').innerHTML = " ";
    document.getElementById('imgName').style.visibility = "hidden";
    document.getElementById('authors').innerHTML = "";

    var url = 'https://www.googleapis.com/books/v1/volumes?q=' + document.getElementById('text').value;
    myReq.open('GET', url, true);
    myReq.send();
}

var myStr;
myReq.onload = function () {
    if (myReq.status === 200) {
        myStr = JSON.parse(myReq.responseText);
        document.getElementById('id1').innerHTML = "<br><ul>";
        var i;
        for (i = 0; i < myStr.items.length; i++) {
            document.getElementById('id1').innerHTML += "<li><button type=button style=" + "background:lightgray" + " class=btn btn-primary onclick=display(" + i + ")>" + myStr.items[i].volumeInfo.title + "</button></li><br>";
        }
        document.getElementById('id1').innerHTML += "</ul>";
    }
};

function display(x) {
    
    document.getElementById('title').innerHTML = myStr.items[x].volumeInfo.title;
    
    if (myStr.items[x].volumeInfo.subtitle !== null) {
        document.getElementById('subtitle').innerHTML = "Subtitle: " + myStr.items[x].volumeInfo.subtitle;
    }
    
    if (myStr.items[x].volumeInfo.publisher !== null) {
        document.getElementById('publisher').innerHTML = "Publisher: " + myStr.items[x].volumeInfo.publisher;
    }
    
    if (myStr.items[x].volumeInfo.imageLinks.thumbnail !== null) {
        document.getElementById('imgName').style.visibility = "visible";
        document.getElementById('imgName').src = myStr.items[x].volumeInfo.imageLinks.thumbnail;
        document.getElementById('imgName').style.width = "400px";
        document.getElementById('imgName').style.height = "400px";
        document.getElementById('imgName').style.border = "2px solid black";
    }
    
    if (myStr.items[x].volumeInfo.authors[0] !== null) {
        document.getElementById('authors').innerHTML = "<br>Authors: " + myStr.items[x].volumeInfo.authors[0];
        var i;
        for (i = 1; i < myStr.items[x].volumeInfo.authors.length; i++) {
            document.getElementById('authors').innerHTML += "," + myStr.items[x].volumeInfo.authors[i];
        }
    }
    
    if (myStr.items[x].volumeInfo.infoLink !== null) {
        document.getElementById('infoLink').innerHTML = "<br>infoLink: <a href=" + myStr.items[x].volumeInfo.infoLink + ">" + myStr.items[x].volumeInfo.infoLink + "</a>";
    }
    
    if (myStr.items[x].volumeInfo.previewLink !== null) {
        document.getElementById('previewLink').innerHTML = "<br>previewLink: <a href=" + myStr.items[x].volumeInfo.previewLink + ">" + myStr.items[x].volumeInfo.previewLink + "</a>";
    }
    
    if (myStr.items[x].accessInfo.webReaderLink !== null) {
        document.getElementById('webReaderLink').innerHTML = "<br>webLink: <a href=" + myStr.items[x].accessInfo.webReaderLink + ">" + myStr.items[x].accessInfo.webReaderLink + "</a>";
    }
}
