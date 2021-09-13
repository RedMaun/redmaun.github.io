function da()
{
    var proc = document.getElementById('procent').textContent;
    var now_proc = Number(proc) + 1;
    if (now_proc <= 100)
    {
        document.getElementById('procent').textContent = Number(proc) + 1;
        document.getElementById('amount').textContent = Math.round((70055020/100)*now_proc);
        document.getElementById('polosa').style.width = now_proc + "%";
    }
    else
    {
        document.getElementById('main-box').style.opacity = "0";
        document.getElementById('main-box').style.transition = "1000ms linear";
        var elem = document.getElementById("main-box");
        setTimeout(() => { elem.parentNode.removeChild(elem); document.getElementById('bank').style.marginTop = "15vh"; document.getElementById('bank').style.opacity = "1"; document.getElementById('bank-bank').style.opacity = "1"; document.getElementById('bank-bank').style.pointerEvents = "all"; document.getElementById('bank').style.pointerEvents = "all"; }, 1000);
        setTimeout(() => { document.getElementById('one').style.opacity = "1"; document.getElementById('one').style.pointerEvents = "all";}, 1500);
        setTimeout(() => { document.getElementById('bank').style.transition = "0ms linear"; document.getElementById('bank-bank').style.transition = "0ms linear"; document.getElementById('one').style.transition = "0ms linear"; }, 2000);
    }
}

var intervalId;
$("#da").mousedown(function() {
    intervalId = setInterval(do_something, 150);
}).mouseup(function() {
    clearInterval(intervalId);
}).mouseleave(function() {
    clearInterval(intervalId);
});

function do_something() {
    da();
}

function splitt()
{

    var a = document.getElementById('num').value;
    a = a.replaceAll(' ', '')
    console.log(a);
    if (a.length % 4 === 0)
    {
        let joy= a.match(/.{1,4}/g);
        let b = joy.join(' ');
        console.log(b)
        document.getElementById('num').value = b;
    }
}

document.getElementById('aaa').setAttribute('draggable', false);