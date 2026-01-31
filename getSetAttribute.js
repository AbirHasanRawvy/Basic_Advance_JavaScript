//getAttribute: knowing for attribute value;

let link = document.getElementById("myLink");
let hrefValue = link.getAttribute("href");
console.log(hrefValue);

//setAttribute:;
const image = document.getElementById("mainImage");

const oldSRC = image.getAttribute("src");

console.log(oldSRC);

image.setAttribute("src","https://www.elabedu.eu/wp-content/webp-express/webp-images/uploads/2025/01/view-of-rosenlaui-with-male-tourist-walking-along-2024-04-01-22-33-37-utc-1-1024x683.jpg.webp");
