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