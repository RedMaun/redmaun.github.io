function play() {
    var audio = new Audio('siren.mp3');
    audio.play();
}

function bebra()
{
    var but = document.getElementById('button');
    var dno = document.getElementById('dno');
    if (but.style.marginTop != "20vh")
    {
        but.style.marginTop = "22vh";
        dno.style.marginTop = "-12.7vh";
        play();
        document.getElementById('dsdadd').style.opacity ="1";
        
    }
}

