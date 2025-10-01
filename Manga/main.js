//Popup form
	document.getElementById('intro_btn').onclick = function() {
		document.getElementById('main').classList.add('pop-open');
		var $elem = document.querySelector('#bl3-ttl-1');
		var text = $elem.textContent;
		document.getElementById('find').value = text
	}
	document.getElementById('intro_btn2').onclick = function() {
		document.getElementById('main').classList.add('pop-open');
		var $elem = document.querySelector('#bl3-ttl-2');
		var text = $elem.textContent;
		document.getElementById('find').value = text
	}
	document.getElementById('intro_btn3').onclick = function() {
		document.getElementById('main').classList.add('pop-open');
		var $elem = document.querySelector('#bl3-ttl-3');
		var text = $elem.textContent;
		document.getElementById('find').value = text
	}
	document.getElementById('intro_btn4').onclick = function() {
		document.getElementById('main').classList.add('pop-open');
		var $elem = document.querySelector('#bl3-ttl-4');
		var text = $elem.textContent;
		document.getElementById('find').value = text
	}
	document.getElementById('pop_close').onclick = function() {
		document.getElementById('main').classList.remove('pop-open');
	}
	document.getElementById('pop_close2').onclick = function() {
		document.getElementById('main').classList.remove('pop-result');
		document.getElementById('main').classList.remove('pop-open');
	}



//Validate form
function validate(){
   document.getElementById('main').classList.add('pop-result');

    return true;
}


//Soundbar
	var audio;
	var audio = document.getElementById("audioPlayer");
    var playBtn=document.getElementsByClassName("play-btn")[0];
    var slowDown=document.getElementsByClassName("slowDown")[0];
    var speedUp=document.getElementsByClassName("speedUp")[0];
	var isPlaying = false;
	
	playBtn.addEventListener("click", (a)=> {
		if(isPlaying) {
			audio.pause();
			isPlaying=false;
			playBtn.innerHTML="<img src='img/play.svg'>";
		} else {
			audio.play();
			isPlaying=true;
			playBtn.innerHTML="❚❚";
		}
	});
	slowDown.addEventListener("click", (a)=> {
		audio.play();
		audio.playbackRate = 0.5;
	});
	speedUp.addEventListener("click", (a)=> {
		audio.play();
		audio.playbackRate = 2;
	});

//Soundbar 2
	var audio2;
	var audio2 = document.getElementById("audioPlayer2");
    var playBtn2=document.getElementsByClassName("play-btn2")[0];
    var playBtn3=document.getElementsByClassName("play-btn3")[0];
	var isPlaying2 = false;

	function play2() {
		audio2.play();
	}
	playBtn3.addEventListener("click", (a)=> {
		if(isPlaying2) {
			audio2.pause();
			isPlaying2=false;
			playBtn2.innerHTML="<img src='img/play.svg'>";
		} else {
			audio2.play();
			isPlaying2=true;
			playBtn2.innerHTML="❚❚";
		}
	});
