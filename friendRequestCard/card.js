const btn = document.querySelector('button');
const h4 = document.querySelector('h4');
btn.addEventListener('click',()=>{
    h4.innerHTML = "Request Sent";
    h4.style.color = "gold";
    setTimeout(()=>{
        h4.innerHTML = "Added to Friends List";
        h4.style.color = "green";
    },5000);
})