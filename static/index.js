$(document).ready(function(){
  $(".prevandnext").click(function(){
  	alert("no more song ...");
  });


  var player = $('audio')[0];
  var img = $('#boy')[0];
 
  $('#boy').click(function(){
	if(player.paused){
		player.play();
		img.style.animation = 'circle 10s infinite linear running';
	}else{
	 	player.pause();
	 	img.style.animation = 'circle 10s infinite linear paused';
	}
  });


});