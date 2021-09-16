var siren = new Audio('siren.mp3')
function bebra()
{
    var elem = document.getElementById('button');
    
    if (elem.style.top == "25%")
    {
        elem.style.top = "20%";
    }
    else
    {
        elem.style.top = "25%";
        siren.play();
        var body_style = document.querySelector('body').style
        body_style.background = 'url(siren.png)';
        body_style.backgroundRepeat = "no-repeat";
        body_style.backgroundSize = "cover";
    }
}