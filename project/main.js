var input = document.getElementById("text_input");
var a = -1;
globalThis.a; 
input.addEventListener("keyup", function(event) 
{
    if (event.key === 'Enter') 
    {
        event.preventDefault();
        bebra();
    }

});

function bebra()
{
    var val = document.getElementById("text_input").value;
    if (val != '')
    {
        document.getElementById('clear').disabled = false;
        document.getElementById("text_input").value = "";
        if (localStorage.getItem('list') == null)
        {
            localStorage.setItem('list', JSON.stringify([val]));
        }
        else
        {
            var storedNames = JSON.parse(localStorage.getItem("list"));
            storedNames.push(val);
            localStorage.setItem('list', JSON.stringify(storedNames));
        }
        script();
    }
}

function script(k)
{
    if (k == 1)
    {
        var myList = document.getElementById('list');
        myList.innerHTML = '';
    }
    else
    {
        var storedNames = JSON.parse(localStorage.getItem("list"));
        if (storedNames == null)
        {
            document.getElementById('clear').disabled = true;
        }
        else
        {
            var c = 0;
            for (var d = 0; d < storedNames.length; d++)
            {
                if (storedNames[d] == null)
                {
                    c += 1;
                }
            }
            if (c == storedNames.length)
            {
                document.getElementById('clear').disabled = true;
            }
            else if (storedNames == 0)
            {
                document.getElementById('clear').disabled = true;
            }
            var n = Object.keys(storedNames).length;
            var myList = document.getElementById('list');
            myList.innerHTML = '';
            for (var i = 0; i < n; i++)
            {
                var node = document.createElement('li');
                if (storedNames[i] != null){
                    var inn = document.createElement('input');
                    inn.value = storedNames[i];
                    inn.className = "inn"
                    inn.id = "0" + String(i);
                    node.appendChild(inn);
                    var h = document.createElement('button');
                    h.className = "trash";
                    h.id = i;
                    node.appendChild(h);
                    document.querySelector('ul').appendChild(node);
                }
            }
            $(document).ready(function() {
                $('.trash').click(function(event) {
                    var storedNames = JSON.parse(localStorage.getItem("list"));
                    var id = event.target.id;
                    storedNames[id] = null;
                    localStorage.setItem('list', JSON.stringify(storedNames));
                    if (document.activeElement === document.getElementById(id))
                    {
                        script();
                        elements = document.getElementsByClassName("trash");
                        if (elements.length != 0)
                        {
                            a -= 1;
                            if (a >= elements.length)
                            {
                                a = 0;
                            }
                            if (a < 0)
                            {
                                a = 0;
                            }
                            document.getElementById(elements[a].id).focus();
                        }
                    }
                });
            });
        }
    }
}



window.onload = function() {
    script();
}

function clearr()
{
    document.getElementById('clear').disabled = true;
    localStorage.clear();
    script(1);
}

document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === 'a' || event.altKey && event.key === 'ф') {
        var el = document.getElementById('text_input');
        if (document.activeElement === el)
        {
            document.getElementById("text_input").blur();
        }
        else
        {
            document.getElementById("text_input").focus(); 
        }
    }
    if (event.altKey && event.key === 'q' || event.altKey && event.key === 'й') {
        document.getElementById("clear").click();  
    }
});

document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === 'w' || event.altKey && event.key === 'ц') {
        a += 1;
        elements = document.getElementsByClassName("trash");
        if (a >= elements.length)
        {
            a = 0;
        }
        document.getElementById(elements[a].id).focus();
    }
});

var u = 0;
globalThis.u;
function openNav() {
    if (u == 0)
    {
        document.getElementById("mySidenav").style.width = "300px";
        u = 1;
    }
    else
    {
        document.getElementById("mySidenav").style.width = "0";
        u = 0
    }
}
  
function s()
{
    window.open("https://github.com/RedMaun");
}

function da()
{
    document.getElementsByClassName("one")[0].style.boxShadow = "0 5px 10px rgba(83, 83, 83, 0.25), 0 0px 10px rgba(83, 83, 83, 0.25)";
}

function net()
{
    document.getElementsByClassName("one")[0].style.boxShadow = ""   
}

$(document).ready(function() {
    $('.inn').blur(function(event) {
        var did = event.target.id;
        var storedNames = JSON.parse(localStorage.getItem("list"));
        storedNames[Number(did.substring(1))] = event.target.value;
        localStorage.setItem('list', JSON.stringify(storedNames));
    });
});