let teamsOfIpl = ['RCB','CSK','MI','RR','KKR','DC','GT','LSG','PBKS','SRH']

let btn = document.querySelector('#predict-btn')
let box = document.querySelector("#predictor-box");

btn.addEventListener('click',()=>{
    let randomTeam = teamsOfIpl[Math.floor(Math.random()*teamsOfIpl.length)]
    box.innerHTML = `<h1>${randomTeam}</h1>`
})