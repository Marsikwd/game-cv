var audio = document.querySelector("audio");
audio.volume = 0.5;

myVid = document.getElementById("audio");
imgMute = document.getElementById("mute");

var x = 0;

function Mute() {
	if (x == 0) {
		myVid.muted = true;
		imgMute.src = '../img/icons/mute_on.png';
		x = 1;
	} else {
		myVid.muted = false;
		imgMute.src = '../img/icons/mute_off.png';
		x = 0;
	}
}

function setCookie(c_name, value, exdays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
	document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
	var i, x, y, ARRcookies = document.cookie.split(";");
	for (i = 0; i < ARRcookies.length; i++) {
		x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
		y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
		x = x.replace(/^\s+|\s+$/g, "");
		if (x == c_name) {
			return unescape(y);
		}
	}
}

var song = document.getElementsByTagName('audio')[0];
var played = false;
var tillPlayed = getCookie('timePlayed');

function update() {
	if (!played) {
		if (tillPlayed) {
			song.currentTime = tillPlayed;
			song.play();
			played = true;
		} else {
			song.play();
			played = true;
		}
	} else {
		setCookie('timePlayed', song.currentTime);
	}
}
setInterval(update, 1000);

let mql = window.matchMedia("(max-width: 1100px)");

if (mql.matches) {
	audio.volume = 0;
};