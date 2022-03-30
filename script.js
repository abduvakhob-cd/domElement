"use strict";
const parentDiv = document.querySelector(".parent");

const div = document.createElement("div");
circle = document.querySelectorAll(".circle");
div.classList.add("box");
div.style.background = "black";
//parentDiv.append(div);
//parentDiv.prepend(div);
circle[0].after(div);
console.log(div);
