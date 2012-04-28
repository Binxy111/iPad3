var Content = {
	init : function(){
		if(this.lock){
			//Ipad.content.innerHTML = ''
		}	
	},
	unlock : function(){
		Ipad.areas.lock_icon.style.display = 'none';
		Ipad.areas.unlock_bar.style.display = 'none';
		Ipad.areas.lock_bar.style.display = 'none';
		this.lock = false;
		Lockscreen.init();
	},
	power : function(){
		if(!this.off){
			Ipad.areas.unlock_bar.style.display = 'none';
			Ipad.areas.lock_bar.style.display = 'none';
			Ipad.areas.top_bar.style.visibility = 'hidden';
			Ipad.areas.screen.className = 'off';
			this.off = true;	
		} else {
			Ipad.areas.top_bar.style.visibility = 'visible';
			Ipad.areas.screen.className = '';
			Ipad.areas.lock_icon.style.display = 'block';
			Ipad.areas.unlock_bar.style.display = 'block';
			Ipad.areas.lock_bar.style.display = 'block';
			Ipad.areas.unlock_knob.left = 0 + 'px';
			this.off = false;
		}
	},
	checkSlide : function () {
		if(Ipad.areas.slideText.className.indexOf('animate') !== -1){
			Ipad.areas.slideText.className = Ipad.areas.slideText.className.substring(0, Ipad.areas.slideText.className.indexOf('animate'));
		} else if(Ipad.areas.slideText.className.indexOf('animate') == -1){
			Ipad.areas.slideText.className += 'animate';
		}
	},
	els : {
				
	},
	lock: true,
	off	: false
};