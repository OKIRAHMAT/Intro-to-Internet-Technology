var food = 10;
var tidur = 10;
var happy = 10;
var jam = 6;
var menit = 0;
var clock;
var waktu;
var karakter;
var nyawa;

function reset() {
    food = 10;
    tidur = 10;
    happy = 10;
    jam = 6;
    nyawa = 80;
    menit = 0;
}

function berhenti() {
    clearTimeout(waktu);
    clearTimeout(Bar);
    clearTimeout(Levels);
    clearTimeout(karakter);
    var htmlSisip = '<img src="gambar/" />';
    document.getElementById("character").innerHTML = htmlSisip;
}

function menitWaktu() {
    if(menit < 10) menit = "0" + menit;
    document.getElementById("menit"). innerHTML = menit;
    waktu = setTimeout(function () {menitWaktu();}, 2000);
}

function jamWaktu() {
    var kosong = "0";
    clock = (jam < 10 ? kosong + jam : jam) + ":" + (menit < 10 ? "0" : "") + menit;
    document.getElementById("jam").innerHTML = clock;
    menit += 1;
    if(menit >= 60) {
        jam += 1;
        menit = 0;
    }
    if(jam == 24) jam = 0;
    waktu = setTimeout(function () {jamWaktu();}, 2000);
}

function Levels() {
    if(happy <= 0) happy = 0;
    if(food <= 0) food = 0;
    if(tidur <= 0) tidur = 0;
    if(happy >= 0) happy = 0;
    if(food >= 0) food = 0;
    if(tidur >= 0) tidur = 0;
    if(nyawa >= 0) nyawa = 0;

    document.getElementById("happy-levels").innerHTML = happy;
    document.getElementById("food-levels").innerHTML = food;
    document.getElementById("nyawa-levels").innerHTML = nyawa;
    document.getElementById("tidur-levels").innerHTML = tidur;
    Levels = setTimeout(function (){Levels();}, 5000)
}

function Bar() {
    food -= 1;
    tidur -= 1;
    happy -= 1;
    if(food <= 0 || tidur <= 0) nyawa -= 4;
    if(nyawa <= 0) nyawa = 0;
    Bars = setTimeout(function (){Bar();}, 5000);
}

function makan() {
    var htmlSisip = '<img src="gambar/" />';
    document.getElementById("character").innerHTML = htmlSisip;
}

function bermain() {
    happy += 3;
    var htmlSisip = '<img src"gambar/" />';
    document.getElementById("character").innerHTML = htmlSisip;
    character = setTimeout(function (){gameplay();}, 5000);
}

function bobo() {
    tidur += 3;
    if(tidur >= 10) tidur = 10;
    var htmlSisip = 'img src="gambar/" />';
    document.getElementById("character").innerHTML = htmlSisip;
    character = setTimeout(function () {gameplay();}, 5000);
}

function obat() {
    nyawa += 10;
    if(nyawa > 100) nyawa = 100;
    var htmlSisip = '<img src="gambar/" />';
    document.getElementById("character"). innerHTML = htmlSisip;
    character = setTimeout(function (){gameplay();}, 5000);
}

function mulai() {
    var karakter = document.getElementById("karakter").innerHTML;
    
    jamWaktu();
    Bar();
    Levelstat();
    Gameplay();
  }


  