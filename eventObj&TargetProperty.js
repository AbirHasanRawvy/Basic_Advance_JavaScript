//Event Type & ysrget object;
let btn = document.getElementById('myBtn');

btn.addEventListener('click', function(event){//here, event is a object;

    console.log(event);
    console.log(event.target);
    console.log(event.target.tagName);
});