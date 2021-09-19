var data = '[{"background": "https://static-sl.insales.ru/images/products/1/4239/200003727/maska-gaya-foksa-anonimusa.jpg", "price": "300 $", "name": "\u041c\u0430\u0441\u043a\u0430 / \u0410\u043d\u043e\u043d\u0438\u043c\u043d\u043e\u0441\u0442\u044c \u0441\u043a\u0440\u044b\u0442\u0430\u044f \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u044c \u0441\u0440\u0430\u0442\u044c \u0432 \u043f\u043e\u0434\u044a\u0435\u0437\u0434\u0435"}, {"background": "https://images.wbstatic.net/c324x432/new/5770000/5775357-1.jpg", "price": "899 \u20bd", "name": "Defender / \u041a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 Werewolf/\u043c\u0435\u043c\u0431\u0440\u0430\u043d\u043d\u0430\u044f/\u0418\u0433\u0440\u043e\u0432\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430"}, {"background": "https://images.wbstatic.net/c324x432/new/12620000/12620087-2.jpg", "price": "525 \u20bd", "name": "Gembird / \u041a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 \u043c\u0435\u043c\u0431\u0440\u0430\u043d\u043d\u0430\u044f"}, {"background": "https://images.wbstatic.net/c324x432/new/16470000/16476686-1.jpg", "price": "2 489 \u20bd", "name": "Defender / \u041a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 Tor/\u043c\u0435\u043c\u0431\u0440\u0430\u043d\u043d\u0430\u044f"}, {"background": "https://images.wbstatic.net/c324x432/new/19060000/19063478-1.jpg", "price": "1 732 \u20bd", "name": "Gembird / \u041a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 \u043c\u0435\u0445\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f"}, {"background": "https://images.wbstatic.net/c324x432/new/12310000/12315210-2.jpg", "price": "4 356 \u20bd", "name": "SKYLOONG / \u041a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 GK 61/\u043c\u0435\u0445\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f"}, {"background": "https://images.wbstatic.net/c324x432/new/9670000/9677828-1.jpg", "price": "2 332 \u20bd", "name": "Redragon / \u041a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 Kumara/\u043c\u0435\u0445\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f"}, {"background": "https://images.wbstatic.net/c324x432/new/13790000/13797269-1.jpg", "price": "4 353 \u20bd", "name": "SKYLOONG / \u041a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 GK 61/\u043c\u0435\u0445\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f"}, {"background": "https://images.wbstatic.net/c324x432/new/25240000/25248740-1.jpg", "price": "4 500 \u20bd", "name": "! \u0414\u041e\u0422\u0410 \u043a\u0435\u0439\u043a\u0430\u043f\u044b / \u041a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430"}]'
var mydata = JSON.parse(data);
// console.log(mydata[0].background);
var mainbox = document.getElementById('main-box');
for (var i = 0; i < Object.keys(mydata).length; i++)
{
    var element = document.createElement("div");
    element.className = "obj";
    var im = document.createElement("div");
    im.className = "image";
    im.style.backgroundImage = 'url(' + mydata[i].background + ')';
    element.appendChild(im)
    var pr = document.createElement("div");
    pr.className = "price"
    pr.innerHTML = mydata[i].price;
    element.appendChild(pr)
    var ti = document.createElement("div");
    ti.innerHTML = mydata[i].name;
    ti.className = "tit"
    element.appendChild(ti)
    mainbox.appendChild(element)
}


