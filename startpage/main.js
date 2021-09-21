var add = document.getElementById('add');
var row1 = document.getElementById('row1');
var row2 = document.getElementById('row2');
var popup = document.getElementById('popup');
var cancel = document.getElementById('cancel');
var ok = document.getElementById('ok');
var named = document.getElementById('name');
var link = document.getElementById('link');
var search = document.getElementById('search');

ok.disabled = true;

named.addEventListener("keyup", function(event) 
{
    if (event.key === 'Enter') 
    {
        event.preventDefault();
        ok.click();
    }

});

link.addEventListener("keyup", function(event) 
{
    if (event.key === 'Enter') 
    {
        event.preventDefault();
        ok.click();
    }

});

search.addEventListener("keyup", function(event) 
{
    if (event.key === 'Enter') 
    {
        event.preventDefault();
        window.open('https://www.google.com/search?q=' + search.value, "_self");
    }

});

add.style.gridColumnStart = 56;
function update_edit() {
    var edits = document.getElementsByClassName('edit');
    for (var i = 0; i < edits.length; i++)
    {
        var edit = edits[i];
        edit.onclick = function(event)
        {
            var row = event.target.parentNode.parentNode;
            var blockk = event.target.parentNode;
            row.removeChild(blockk);
            update();
        }
    }
}
update_edit();

add.onclick = function() 
{
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
}

cancel.onclick = function() 
{
    popup.style.opacity = "0";
    popup.style.visibility = "hidden";
}

ok.onclick = function() 
{
    var element = document.createElement("div");
    element.className = "block";
    element.value = link.value;
    var ic = document.createElement("div");
    ic.className = "block-icon";
    ic.style.backgroundImage = "url(" + 'https://s2.googleusercontent.com/s2/favicons?domain=' + link.value + ")";
    element.appendChild(ic);
    var te = document.createElement("div");
    te.className = "block-text";
    te.innerHTML = named.value;
    element.appendChild(te);
    var ed = document.createElement("button");
    ed.innerHTML = '⋮';
    ed.className = "edit";
    element.appendChild(ed);
    if (!link.value.includes("https://"))
    {
        element.value = "https://" + link.value;
    }
    else
    {
        element.value = link.value;
    }
    element.onclick = function(event) 
    {
        if (event.target.className != "edit")
        {
            if (event.target.className == "block-text" || event.target.className == "block-icon")
            {
                window.open(event.target.parentNode.value);
            }
            else
            {
                window.open(event.target.value);
            }
        }
    };  
    row2.appendChild(element)
    update_edit();
    update();
    popup.style.opacity = "0";
    popup.style.visibility = "hidden";
    ok.disabled = true;
    named.value = '';
    link.value = '';
}

named.onkeyup = function() 
{
    if (named.value != '' && link.value != '')
    {
        ok.disabled = false;
    }
    else
    {
        ok.disabled = true;
    }
}

link.onkeyup = function() 
{
    if (named.value != '' && link.value != '')
    {
        ok.disabled = false;
    }
    else
    {
        ok.disabled = true;
    }
}

function update()
{
    var a = row1.getElementsByClassName('block');
    n1 = a.length;
    var b = row2.getElementsByClassName('block');
    n2 = b.length;
    if (n1 >= 6 && n2 == 0)
    {
        row2.appendChild(add)
        row2.appendChild(a[3])
        row2.appendChild(a[3])
    }
    else if (n1 == 4 && n2 < 2 && n2 != 0)
    {
        for (var i = 0; i < n2; i++)
        {
            row1.appendChild(b[0]);
        }
    }
    else if (n2 == n1 + 1)
    {
        row1.appendChild(b[1])
    }
    else if (n1 == n2 + 2 && n1 + n2 > 6)
    {
        row2.appendChild(a[a.length - 1])
    }
    if (n1 + n2 < 6 && n2 != 0)
    {
        for (var i = 0; i < n2; i++)
        {
            row1.appendChild(b[0]);
        }
    }
    if (n1 == 4 && n2 == 2)
    {
        row2.appendChild(a[a.length - 1])
        row2.getElementsByClassName('block')[1].style.gridColumnStart = ""
        row2.getElementsByClassName('block')[2].style.gridColumnStart = "1";
    }
    update_storage();
}

function update_storage()
{
    var a = row1.getElementsByClassName('block');
    n1 = a.length;
    var b = row2.getElementsByClassName('block');
    n2 = b.length;
    var list = [];
    for (var i = 0; i < n1; i++)
    {
        if (a[i] != add)
        {
            list.push([a[i].getElementsByClassName('block-text')[0].innerText, a[i].value])
        }
    }
    for (var i = 0; i < n2; i++)
    {
        if (b[i] != add)
        {
            list.push([b[i].getElementsByClassName('block-text')[0].innerText, b[i].value])
        }
    }
    localStorage.removeItem('list');
    localStorage.setItem('list', JSON.stringify([list]));
    console.log('lol')
}

function load_storage()
{
    var store = JSON.parse(localStorage.getItem('list'));
    //console.log(store[0][1])
    for (var i = 0; i < store[0].length; i++)
    {
        var na = store[0][i][0];
        var url = store[0][i][1];
        
        var element = document.createElement("div");
        element.className = "block";
        element.value = url;
        var ic = document.createElement("div");
        ic.className = "block-icon";
        ic.style.backgroundImage = "url(" + 'https://s2.googleusercontent.com/s2/favicons?domain=' + url + ")";
        element.appendChild(ic);
        var te = document.createElement("div");
        te.className = "block-text";
        te.innerHTML = na;
        element.appendChild(te);
        var ed = document.createElement("button");
        ed.innerHTML = '⋮';
        ed.className = "edit";
        element.appendChild(ed);
        if (!url.includes("https://"))
        {
            element.value = "https://" + url;
        }
        else
        {
            element.value = url;
        }
        element.onclick = function(event) 
        {
            if (event.target.className != "edit")
            {
                if (event.target.className == "block-text" || event.target.className == "block-icon")
                {
                    window.open(event.target.parentNode.value);
                }
                else
                {
                    window.open(event.target.value);
                }
            }
        };  
        row1.appendChild(element)
        update_edit();
        update();
    }

}
load_storage()