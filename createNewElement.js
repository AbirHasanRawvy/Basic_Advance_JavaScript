//Create New Element;
function addParagraph(){
    //1 step: Create a p tag;
    const para1 = document.createElement("p");

    //2 step: data add in p tag;
    para1.textContent = "This is JavaScript";

    //3 step: add this into data;
    document.getElementById("container").appendChild(para1);

    console.log(para1);

}