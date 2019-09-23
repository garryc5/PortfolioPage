var spin = document.getElementById("spin");
function spinner()
{   
    var stopper = 0;
    var timer = window.setInterval(()=>{
        spin.style.transform = `rotate(${stopper*15}deg)`;
        stopper++;
        if(stopper==25)
        {
            clearInterval(timer);
        }
    },42);
}