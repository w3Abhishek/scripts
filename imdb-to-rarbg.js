// ==UserScript==
// @name         IMDB to RARBG
// @namespace    http://t...content-available-to-author-only...y.net/
// @version      1.0
// @description  Visit imdb and search for your favourite title
// @author       BillyMood
// @match        *.imdb.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let url = new URL(window.location.href);
    let rar = url.pathname;
    console.log(rar);

    function searchRARbg() {
        window.open('https://rarbg.to/torrents.php?imdb=category%5B%5D=14&category%5B%5D=48&category%5B%5D=17&category%5B%5D=44&category%5B%5D=45&category%5B%5D=47&category%5B%5D=50&category%5B%5D=51&category%5B%5D=52&category%5B%5D=42&category%5B%5D=46&category%5B%5D=54&search=' +rar)
    }

    var button = document.createElement("button");
    button.innerHTML = "Find Torrent on RARBG";

    button.setAttribute("style", "background-color: #f5de50; color: black; font-size: small; border: 2px solid #f5de50; line-height: 0; padding: 1em;");

    var summary_text = document.getElementsByClassName("credit_summary_item")[0];
    summary_text.appendChild(button);

    button.addEventListener ("click", searchRARbg);


})();
