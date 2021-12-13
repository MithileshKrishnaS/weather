
window.onload  = function(){
var button=document.querySelector('.b1');
var inp=document.querySelector('.i1');
var temp=document.querySelector('.result');
button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inp.value+'&appid=cb5d13456ad029c044b9f0cd44d54225')
    .then(response => response.json())
    .then(data => {
        var t1= data['main']['temp'];
        var t2=t1-273.15;
        var t3=t2.toFixed(2);
        temp.innerHTML=t3+'℃ ';
    })
    
})
}



