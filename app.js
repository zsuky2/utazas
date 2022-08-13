//Eltárolunk minden elemet változóba, amivel szeretnék dolgozni
var prev = document.getElementById("prev");
next = document.getElementById("next");
thumb = document.getElementsByClassName("thumb");

//Eltárolom egy tömbbe a beállítani kívánt háttérképek elérési útját úgy, hogy ezek tömbelemek legyenek
var backgroundImage = [

    "img/bg1.jpg",
    "img/bg2.jpg",
    "img/bg3.png",
    "img/bg4.jpg",
    "img/bg5.png"
];

var i = 0;

next.addEventListener("click", function () {

    //Ha az i értéke kisebb, mint 4 --> amíg tudom előre léptetni a képeket
    if (i < 4) {

        //Akkor megváltoztatom az éppen aktuális háttérképre a body hátterét, továbbléptetem a kis képen az active classt és ezzel egyidejűleg az előzőről leveszem
        //document.body.style.backgroundImage = "url('" + backgroundImage[i + 1] + "')";
        document.body.style.backgroundImage = `url('${backgroundImage[i+1]}')`; //ua. mint az előző sor!!!!
        thumb[i + 1].classList.add("active");
        thumb[i].classList.remove("active");
        document.body.style.transition = "background 0.2s ease";
        i++;
    }
})

prev.addEventListener("click", function () {

    if (i > 0) {

        //document.body.style.backgroundImage = "url('" + backgroundImage[i - 1] + "')"; 
        document.body.style.backgroundImage = `url('${backgroundImage[i-1]}')`; //ua. mint az előző sor!!!!
        thumb[i - 1].classList.add("active");
        thumb[i].classList.remove("active");
        document.body.style.transition = "background 0.2s ease";
        i--;
    }
})