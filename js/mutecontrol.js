var audio = document.getElementById('player');
 
document.getElementById('muted').addEventListener('click', function (e)
{
e = e || window.event;
audio.muted = !audio.muted;
e.preventDefault();
}, false);
