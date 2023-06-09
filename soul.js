document.querySelector('#check').addEventListener("click", check )
function check(){
   const day = document.querySelector('#day').value

if(day === 'Friday'||day === 'friday'|| day ==='tuesday'||
day ==='Tuesday'||day ==='wednesday'||
day ==='Wednesday'||day==='Thursday'||day==='thursday'){
alert("It's School Day!")
}else if(day === 'saturday' || day=== 'Saturday' || 
    day=== 'sunday' || day=== 'Sunday'){
alert("It's The Weekend")
}else{alert('BORING')}
document.querySelector('#resultplace').innerHTML= alert}