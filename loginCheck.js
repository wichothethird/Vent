/*
 How does AJAX work?
    When using AJAX, the browser requests information from the web server.
    It then proccess the server response to display it in the browser.
    AJAX is an asynchronous proccessing model. 
*/

/*
    Client side 
    The Browser creates an object called XMLHttprequest. 
    Because AJAX is an ASYNCHRONOUS processing model the browser doesnt wait for 
    the request to be completed instead it continues with loading the page.
*/

/*
    Server Side 
    All the things that happen in the server side is not part of AJAX
    Server side technologies include node.js ASP.net and etc.
    Now when the server sends back data, it can be in HTML, XML, or JSON 
    file format. 
*/

/*
    Back to Client Side
    Once the server side has finish responding to all the data requested
    then the client side shoots an event, this event can then trigger a 
    function that will allow to proccess the data and incoparate it in the web page.
*/


/*This is the request to the server*/
/*
var xhr = new XMLHttpRequest();


xhr.onload() = () => {
    if (xhr.status == 200){
        document.getElementById('UsernameInput').innerHTML = xhr.responseText;
        console.log(xhr.responseText)
    }

}
*/


/*The open function has three parameters
    1. HTTP method
    2. The URL
    3. Boolean that indicates the request is Asynchronous
    xhr.open('GET','/showusers',true);
xhr.send(null);
*/



/*
    AJAX wont work on cross domains, work arounds for this is JSONP 

*/


/*
GET is used to request data from a specified resource.
GET is one of the most common HTTP methods.
POST is used to send data to a server to create/update a resource.
POST is one of the most common HTTP methods.
PUT is used to send data to a server to create/update a resource.
*/



function login(form){
    
    var xhr = XMLHttpRequest();
    xhr.open('post','Login',true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhrhttp.status == 200) {
            loginResults();
        }
    }
}

function loginResults(){
    document.write("Hello world")

}



/*
    First step is the get the element that has the login form
*/



/*
    addEventListener has three parameters
    1. The event you want to listen to 
    2. The code you want to fire or trigger once the event occurs
    3. Boolean that allows us to know how events flow 
*/


var forma = document.getElementById('loginForm');
forma.addEventListener('submit',() => {
    console.log("hreerq");
    /* Call the login Function login(forma);*/
});

