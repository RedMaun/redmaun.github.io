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
    if (named.value.length > 9)
    {
        var newStr = '';
        for (var g = 0; g < 9; g++)
        {
            newStr += named.value[g];
        }
        newStr += '...';
        named.value = newStr;
    }
    
    var url = link.value;
    if (!url.includes("https://"))
    {
        url = "https://" + url;
    }

    var cont = document.createElement("div");
    cont.className = "cont";

    var atag = document.createElement("a");
    atag.href = url;

    var element = document.createElement("div");
    element.className = "block";

    var ic = document.createElement("div");
    ic.className = "block-icon";
    ic.style.backgroundImage = "url(" + 'https://www.google.com/s2/favicons?sz=64&domain_url=' + url + ")";
    element.appendChild(ic);

    var te = document.createElement("div");
    te.className = "block-text";
    te.innerHTML = named.value;
    element.appendChild(te);

    atag.appendChild(element)
    cont.appendChild(atag)

    var ed = document.createElement("button");
    ed.innerHTML = '⋮';
    ed.className = "edit";
    cont.appendChild(ed)

    var row = add.parentNode; 
    row.appendChild(cont)
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
    var a = row1.getElementsByClassName('cont');
    n1 = a.length;
    var b = row2.getElementsByClassName('cont');
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
        row2.getElementsByClassName('cont')[1].style.gridColumnStart = ""
        row2.getElementsByClassName('cont')[2].style.gridColumnStart = "1";
    }
    update_storage();
}

function update_storage()
{
    var a = row1.getElementsByClassName('cont');
    n1 = a.length;
    var b = row2.getElementsByClassName('cont');
    n2 = b.length;
    var list = [];
    for (var i = 0; i < n1; i++)
    {
        if (a[i] != add)
        {
            list.push([a[i].getElementsByClassName('block-text')[0].innerText, a[i].getElementsByTagName('a')[0].href])
        }
    }
    for (var i = 0; i < n2; i++)
    {
        if (b[i] != add)
        {
            list.push([b[i].getElementsByClassName('block-text')[0].innerText, b[i].getElementsByTagName('a')[0].href])
        }
    }
    localStorage.removeItem('list');
    localStorage.setItem('list', JSON.stringify([list]));
}

function load_storage()
{
    var store = JSON.parse(localStorage.getItem('list'));
    if (store != null)
    {
        for (var i = 0; i < store[0].length; i++)
        {
            var na = store[0][i][0];
            if (na.length > 9)
            {
                var newStr = '';
                for (var g = 0; g < 9; g++)
                {
                    newStr += na[g];
                }
                newStr += '...';
                na = newStr;
            }

            var url = store[0][i][1];
            if (!url.includes("https://"))
            {
                url = "https://" + url;
            }

            var cont = document.createElement("div");
            cont.className = "cont";

            var atag = document.createElement("a");
            atag.href = url;

            var element = document.createElement("div");

            var ic = document.createElement("div");
            ic.className = "block-icon";
            ic.style.backgroundImage = "url(" + 'https://www.google.com/s2/favicons?sz=64&domain_url=' + url + ")";
            element.appendChild(ic);

            var te = document.createElement("div");
            te.className = "block-text";
            te.innerHTML = na;
            element.appendChild(te);

            atag.appendChild(element)
            cont.appendChild(atag)

            var ed = document.createElement("button");
            ed.innerHTML = '⋮';
            ed.className = "edit";
            cont.appendChild(ed)
            
            var row = add.parentNode; 
            row.appendChild(cont)
            update_edit();
            update();
        }
    }

}
$( document ).ready(function() {
    load_storage();
});