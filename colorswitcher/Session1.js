const heading = document.querySelector('h1');
//> Selection of Element
// console.log(heading);
// heading.innerHTML = "Kuchh V"; //> Changing HTML
// heading.style.color = "red"; //> Changing CSS 
// heading.style.backgroundColor = "blue";//> Changing CSS 

//> Eventlistner . 
// function handleClick(){
//     heading.innerHTML = "Changed";
//     heading.style.color = "yellow";
//     heading.style.fontSize = '100px';
// }
// if(heading){
// heading.addEventListener('click',handleClick); 
// }else{
//     console.log(`<h1> is not here .`);
// }

// ? Session 2 color switching Project 
let btn = document.querySelector('button');
let box = document.querySelector('.box')

btn.addEventListener('click',()=>{
    let randomvalue1 = Math.floor(Math.random()*256)
    let randomvalue2 = Math.floor(Math.random()*256)
    let randomvalue3 = Math.floor(Math.random()*256)
    box.style.backgroundColor = `rgb(${randomvalue1} , ${randomvalue2} , ${randomvalue3})`
})
