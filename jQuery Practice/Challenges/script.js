document.getElementById('paragraph').style.fontSize = '24px';

$('#paraquery').css('font-size', '24px');

var paraselect = document.querySelectorAll('#main p');
for (p of paraselect) {
    p.style.color = 'red';
    p.style.fontSize = '24px';
}

$("#mainquery p").css({ "font-size": "24px", "color": "red" });
// or $("#mainquery p").css("font-size", "24px").css("color", "red");

var ch5para = document.querySelector('#ch5para p:last-of-type');
ch5para.style.fontSize = "36px";
ch5para.style.color = "red";

$('#ch6query p').last().css({ "font-size": "36px", "color": "red" });
// or $("#main p:last-of-type").css({ "font-size": "36px", "color": "red"

var ch7paragraphs = document
    .querySelectorAll('#ch7paragraphs p:nth-child(even)');
for (x of ch7paragraphs) {
    x.style.color = 'red';
}

$('#ch8query p').even().css("color", "red");

var ch9js = document.querySelectorAll("#ch9js p");
for (var i = 0; i < ch9js.length; i++) {
    if (ch9js[i].innerHTML == "Llamas and Chickens!") {
        ch9js[i].style.color = "red";
    }
}

$('#ch10query p:contains(Llamas)').css("color", "red");

var links = document.querySelectorAll('#ch11js nav ul li a');
for (l of links) {
    l.addEventListener('click', () => {
        alert('clicked');
    });
    // or l.onclick = function () { alert("clicked!") };
}

$('#ch12query nav ul li a').click(function () {
    alert('clicked query');
});

var linky = document.querySelectorAll('#ch13js nav ul li a');
for (o of linky) {
    o.addEventListener('click', function () {
        alert(this.innerHTML);
    })
}

$('#ch14query nav li a').click(function () {
    alert($(this).html());
});

var fifteen = document.querySelectorAll('#ch15jss nav ul li a');
for (f of fifteen) {
    f.addEventListener('click', function () {
        this.style.color = 'red';
    });
}

$('#ch16query nav li a').click(function () {
    $(this).css('color', 'red');
});

var seventeen = document.querySelectorAll('#ch17 nav ul li a');
for (let i = 0; i < seventeen.length; i++) {
    seventeen[i].addEventListener("click", function () {
        const thisLink = this.innerHTML;
        document.getElementById('linkGoogle').innerHTML = `You clicked ${thisLink}`;
    });
}

$("#ch18jq nav ul li a").click(function () {
    const thisssLink = $(this).html();
    $("#ch18jq #paragraph").html(`You clicked ${thisssLink}`);
});

var nineteen = document.querySelectorAll('#ch19 nav ul li a');
var nineteenPara = document.querySelectorAll('#ch19 p');
for (paralink of nineteen) {
    paralink.addEventListener('click', function () {
        const paraNumber = "#para" + this.id; //constructs a string like this: "#paralink3"
        for (peas of nineteenPara) {
            peas.style.color = 'black';//loop through and make all paras black
        }
        const thisParagraph = document.querySelector(paraNumber);
        thisParagraph.style.color = 'red'; //change just the one paragraph red
    });
}

$('#ch20 nav ul li a').click(function () {
    const paraNumber = "#para" + $(this).attr("id"); // constructs #paralink3 for example
    $("#ch20 p").css("color", "black");
    $(paraNumber).css("color", "red");
});