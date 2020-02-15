// ==UserScript==
// @name         itüSenlikciProject
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.sis.itu.edu.tr/tr/ders_programlari/LSprogramlar/prg.php
// @grant        none
// ==/UserScript==
// @require https://code.jquery.com/jquery-3.3.1.js

//document.write("hello madafaka");





//head kısmını bootstrap ekleme
var href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
var rel = "stylesheet";
var integrity = "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T";
var crossorigin = "anonymous";

var link = document.createElement("link");
link.setAttribute("href", href);
link.setAttribute("rel", rel);
link.setAttribute("integrity", integrity);
link.setAttribute("crossorigin", crossorigin);

var headi = document.getElementsByTagName("head")[0];
headi.appendChild(link);




//div ekleme
var div = document.createElement("div");
div.style.width = "100%";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "white";
div.innerHTML = "Hello";
div.setAttribute("id","kontrolPanelim");

//document.getElementsByClassName("ustbant")[0].appendChild(div);




var bodi = document.getElementsByTagName("body")[0];
bodi.insertBefore(div, bodi.childNodes[0]);


//kontrolPanelim e button eklemek
var btn = document.createElement("button");
btn.setAttribute("onClick", "alert();");
btn.innerHTML = "bana tıkla";


var panel = document.getElementById("kontrolPanelim");;

panel.appendChild(btn);




//derskodları
var dersKodlari = [];
var dersKodlariElements = [];

dersKodlariElements = document.getElementsByTagName("option");
//console.log(dersKodlari);

var i;
for (i = 0; i < dersKodlariElements.length; i++) {
    dersKodlari[i] = dersKodlariElements[i].innerHTML;
}
console.log(dersKodlari);





//alert function u  // nedense alert veriyor ama ne alert yazısı ne console.log yazısı çalışmıyor // sebebi Şu: https://stackoverflow.com/questions/27680230/how-do-i-make-functions-added-by-tampermonkey-be-available-in-console-after-the
function alert(){
    console.log("heyo");
    alert("hello madafaka");





}














(function() {
    'use strict';

    // Your code here...
})();

