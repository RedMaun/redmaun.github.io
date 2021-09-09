let arr = [];
globalThis.arr;
function dudos()
{
    // document.getElementById('one-1').checked
    if (document.getElementById('one-1').checked || document.getElementById('one-2').checked && document.getElementById('two-1').checked || document.getElementById('two-2').checked && document.getElementById('three-1').checked || document.getElementById('three-2').checked && document.getElementById('four-1').checked || document.getElementById('four-2').checked && document.getElementById('five-1').checked || document.getElementById('five-2').checked && document.getElementById('six-1').checked || document.getElementById('six-2').checked && document.getElementById('seven-1').checked || document.getElementById('seven-2').checked && document.getElementById('eight-1').checked || document.getElementById('eight-2').checked && document.getElementById('nine-1').checked || document.getElementById('nine-2').checked && document.getElementById('ten-1').checked || document.getElementById('ten-2').checked)
    {
        if (document.getElementById('one-1').checked)
        {
            arr.push(111);
        }
        else
        {
            arr.push(222)
        }
        if (document.getElementById('two-1').checked)
        {
            arr.push(333);
        }
        else
        {
            arr.push(444)
        }
        if (document.getElementById('three-1').checked)
        {
            arr.push(555);
        }
        else
        {
            arr.push(666)
        }
        if (document.getElementById('four-1').checked)
        {
            arr.push(777);
        }
        else
        {
            arr.push(888)
        }
        if (document.getElementById('five-1').checked)
        {
            arr.push(999);
        }
        else
        {
            arr.push(101010)
        }
        if (document.getElementById('six-1').checked)
        {
            arr.push(111111);
        }
        else
        {
            arr.push(121212)
        }
        if (document.getElementById('seven-1').checked)
        {
            arr.push(131313);
        }
        else
        {
            arr.push(141414)
        }
        if (document.getElementById('eight-1').checked)
        {
            arr.push(151515);
        }
        else
        {
            arr.push(161616)
        }
        if (document.getElementById('nine-1').checked)
        {
            arr.push(171717);
        }
        else
        {
            arr.push(181818);
        }
        if (document.getElementById('ten-1').checked)
        {
            arr.push(191919);
        }
        else
        {
            arr.push(202020)
        }
    if (arr.length >10)
    {
        while (arr.length != 10)
        {
            arr.shift();
        }
    }
    console.log(arr)
    var c = 0;
    for (var i = 0; i < 10; i++)
    {
        if (arr[i] % 2 == 0)
        {
            c += 1;
        }
    }
    if (c == 0)
    {
        window.location.replace("result1.html");
    }
    else if (c == 10)
    {
        window.location.replace("result2.html");
    }
    else if (c != 0 && c != 10) 
    {
        var seed = 0;
        for (var j = 0; j < arr.length; j++)
        {
            seed += arr[j];
        }
      
        Math.seedrandom(seed);
        x = Math.abs(Math.round(Math.random() * 10));
        if (x == 0 || x == 1 || x == 2)
        {
            x += 3;
        }
        window.location.replace("result" + x + ".html");

    } 
    else 
    {
        document.write("<h1>Ты ответил не на все вопросы!</h1>");
    }
}
}