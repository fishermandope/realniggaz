			var videoSource = new Array();
			videoSource[0]="css/files/video.mp4";
			var videoCount = videoSource.length;
			document.getElementById("player").setAttribute("src",videoSource[0]);
			document.getElementById("player").play();
			var unmute = document.getElementById("player");
			var i = 1;
			document.getElementById("player").volume = 0;
			document.getElementById("player").addEventListener('ended',myHandler,false);
			function myHandler()
			{
				if(i == (videoCount-1))
				{
					document.getElementById("player").setAttribute("src",videoSource[i]);
					document.getElementById("player").play();
					i = 0;
				}
				else
				{
					document.getElementById("player").setAttribute("src",videoSource[i]);
					document.getElementById("player").play();
					i++;
				}  	
			}
