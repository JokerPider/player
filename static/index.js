var music = false;

function play(){
	var audio = document.getElementById("bgMusic");
	var img = document.getElementById('boy');
	if(music){
		audio.pause();
		img.style.animation = 'circle 10s infinite linear paused';
	}
	else{
		audio.play();
		img.style.animation = 'circle 10s infinite linear running';
	}
	music = !music;
}

function volumeCtrl(v){
	document.getElementByTag('audio').volumen = v / 10;
}

function nomoney(){
	// document.getElementById("money").innerHTML = '没钱买音乐';
	alert("no more song ...");
}