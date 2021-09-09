var st;
st = '';

function clearr()
{   
    st = ''
    document.getElementById('shit').innerHTML = st;
}

function back()
{
    st = st.slice(0, -1);
    document.getElementById('shit').innerHTML = st;
}

function bebra(n)
{
    if (n == '+' || n == '-' || n == '/' || n == '*')
    {
        if (st[st.length - 1] != n)
        {
            if (st.length < 28)
            {
                st += String(n)
                document.getElementById("shit").innerHTML = st;
            }
        }
    }
    else
    {
        if (st.length < 28)
        {
            st += String(n)
            document.getElementById("shit").innerHTML = st;
        }
    }
}
function ready()
{
    document.getElementById("shit").innerHTML = eval(st);
    st = ''
}


function s()
{
    window.open("https://github.com/RedMaun");
}

