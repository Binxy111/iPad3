var Content = {
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link href="style.css" rel="stylesheet" type="text/css">
  </head>
  <body>
		
		<div class="main">
			<div class="side left">
				<div class="dash left top"></div>

				<div class="audio">
					<div class="side ringer"></div>
					<div class="side volume up"></div>
					<div class="side volume down"></div>
				</div>

				<div class="dash left bottom"></div>
			</div>
      
			<div class="iphone home" id="iphone">
				<div class="dash top"></div>


				<div class="inner" id="inner">
					<div class="top">
						<div class="left">
							<p class="time"><span id="datetime"></span></p>
						</div>
						<div class="center">	
							<div class="mic">
							</div>

							<div class="cam">
							</div>
						</div>

						<div class="right">
							<ion-icon name="cellular" class="cellular"></ion-icon>

							<img src="Images/Icons/wifi.png" class="wifi">

							<img src="Images/Icons/battery.png" class="battery">
						</div>
					</div>


					<div class="content">
						<div class="icons">
							<div class="appContainer">
								<img src="Images/Apps/1.png" class="app">

								<p>FaceTime</p>
							</div>

							<div class="appContainer">
								<img src="https://icon-library.com/images/calendar-icon-ios/calendar-icon-ios-8.jpg" class="app">

								<p>Calendar</p>
							</div>

							<div class="appContainer">
								<img src="" class="app">

								<p>Photos</p>
							</div>

							<div class="appContainer"><a href="/backcamera.html">
								<img src="https://cdn.icon-icons.com/icons2/41/PNG/128/iphonecamera_6708.png" class="app"></a>

								<p>Camera</p>
							</div>

							<div class="appContainer">
								<img src="Images/Apps/5.png" class="app">

								<p>Mail</p>
							</div>

							<div class="appContainer">
								<img src="https://icon-library.com/images/ios-clock-icon/ios-clock-icon-0.jpg" class="app">

								<p>Clock</p>
							</div>

							<div class="appContainer">
								<img src="" class="app">

								<p>Maps</p>
							</div>

							<div class="appContainer">
								<img src="https://www.transparentpng.com/thumb/weather-report/iphone-weather-icon-png-30.png" class="app">

								<p>Weather</p>
							</div>

							<div class="appContainer">
								<img src="Images/Apps/9.png" class="app">

								<p>Reminders</p>
							</div>

							<div class="appContainer">
								<img src="https://th.bing.com/th/id/R.2e9a93b94a825f0d8da71230b8ef9453?rik=4VQyppdT3GlCwQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f_GBwb-MzTAVw%2fTIvxdiozNcI%2fAAAAAAAAADo%2fPQQEVfnsSqU%2fs1600%2fNotes.png&ehk=n1or2Psl3AJEwvlTC5wfvaqdqnEy2e4X3Ds5EmYrmSc%3d&risl=&pid=ImgRaw&r=0" class="app">

								<p>Notes</p>
							</div>

							<div class="appContainer"><a href="./calculator.html">
								<img src="https://icon-library.com/images/calculator-icon-ico/calculator-icon-ico-24.jpg" class="app"></a>

								<p>Calculator</p>
							</div>

							<div class="appContainer">
								<img src="Images/Apps/12.png" class="app">

								<p>News</p>
							</div>

							<div class="appContainer">
								<img src="Images/Apps/13.png" class="app">

								<p>Books</p>
							</div>

							<div class="appContainer">
								<img src="https://th.bing.com/th/id/R.8be014122b2e0fa944fd8b4d8c0c580b?rik=IToa2YslIl4HGg&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2009%2f05%2fdownload-app-store-icon_184210.png&ehk=AcN6Tk379jgdLIgoepdGvHZW57lnxrV4iTbGrbaVNsk%3d&risl=&pid=ImgRaw&r=0" class="app">

								<p>App Store</p>
							</div>

							<div class="appContainer">
								<img src="Images/Apps/15.png" class="app">

								<p>Podcasts</p>
							</div>

							<div class="appContainer">
								<img src="Images/Apps/16.png" class="app">

								<p>TV</p>
							</div>

							<div class="appContainer">
								<img src="Images/Apps/17.png" class="app">

								<p>Health</p>
							</div>

							<div class="appContainer">
								<img src="Images/Apps/18.png" class="app">

								<p>Stocks</p>
							</div>

							<div class="appContainer">
								<img src="Images/Apps/19.png" class="app">

								<p>Wallet</p>
							</div>

							<div class="appContainer">
								<img src="https://icon-library.com/images/ios-6-settings-icon/ios-6-settings-icon-8.jpg" class="app">

								<p>Settings</p>
							</div>

						</div>

						<div class="dots">
							<div class="dot"></div>

							<div class="dot active"></div>

							<div class="dot"></div>
						</div>

						<div class="dock">
							<img src="https://img00.deviantart.net/fef1/i/2012/320/8/1/contacts_icon_replacement_from_ios_by_flakshack-d5l677g.png" class="app">

							<img src="Images/Apps/safari.png" class="app">

							<img src="Images/Apps/iMessage.png" class="app">

							<img src="Images/Apps/music.png" class="app">
						</div>
					</div>

					<div class="dash bottom"></div>
				</div>
			</div>
			
			<div class="side right">
				<div class="dash right top"></div>

				<!-- <a href="./index.html"> -->
				<div class="side power" onclick="turnOffLock()"></div>
				<!-- </a> -->

				<div class="dash right bottom"></div>
			</div>
		</div>

    <script src="script.js"></script>
		<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
		<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  </body>
</html>

<style>

.iphone.home {
	background-image: url("https://th.bing.com/th/id/R.ea2e7bea19056aefb59411b1112e884f?rik=iSPioGF11n2Ltg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2fb%2f8%2f125071.jpg&ehk=RA0xu6XiWde7lxLeNN5iB3ho2JwZoWAyRQw9zSqxz18%3d&risl=&pid=ImgRaw&r=0");
}

.iphone .inner .top .left .time {
	font-size: 19px;
}

.iphone .inner .content .icons, .iphone .inner .content .dock {
	display: flex;
	gap: 20px;
	margin-top: 40px;
	flex-wrap: wrap;	
	justify-content: center;
}

.iphone .inner .content .icons .appContainer {
	display: flex; 
	flex-direction: column;
	align-items: center;
	gap: 5px;
}

.iphone .inner .content .icons .appContainer .app, .iphone .inner .content .dock .app {
	width: 70px;
	height: 70px;
	cursor: pointer;
	animation: appear 1s;
}

@keyframes appear {
	0% { transform: scale(1.3); }
	50% { transform: scale(0.95); }
	100% { transform: scale(1); }
}

.iphone .inner .content .icons .appContainer .app:active, .iphone .inner .content .dock .app:active {
	filter: brightness(0.7);
}

.iphone .inner .content .dots {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	margin-top: 82px;
}

.iphone .inner .content .dots .dot {
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background-color: #c8c5c569;
	cursor: pointer;
}

.iphone .inner .content .dots .dot.active {
	background-color: #fff;
}

.iphone .inner .content .dock {
	background-color: #c8c5c569;
	margin-top: 10px;
	padding: 5px;
	border-radius: 25px;
	width: 96%;
	height: 90px;
	display: flex;
	align-items: center;
}

.iphone.home .dash.bottom {
	top: 17px;
}


</style>



};
