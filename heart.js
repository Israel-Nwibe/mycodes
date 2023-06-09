let total = 0

document.querySelector('#deer').addEventListener('click', boot)
document.querySelector('#moose').addEventListener('click', run)
document.querySelector('#silver').addEventListener('click', rich)
document.querySelector('#copper').addEventListener('click', shock)
document.querySelector('#tree').addEventListener('click', leaf)
document.querySelector('#fire').addEventListener('click', burn)
function boot() {
     total = total + 9;
     document.querySelector('#Resultplace'
     ).innerHTML = total
}
function run() {
     total = total + 5;
     document.querySelector('#Resultplace').innerHTML = total
     }
function rich() {
     total = total + 3;
     document.querySelector('#Resultplace').innerHTML = total
}
function shock() {
     total = 0;
     document.querySelector('#Resultplace').innerHTML = total
     
}
function leaf() {
     total = total - 5;
     document.querySelector('#Resultplace').innerHTML = total
     
}
function burn() {
     total = total - 9;
     document.querySelector('#Resultplace').innerHTML = total
     } 