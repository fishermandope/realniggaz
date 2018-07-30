var message = new Array();
message[0] =  "R";
message[1] =  "RE";
message[2] =  "REA";
message[3] =  "REAL";
message[4] =  "REAL";
message[5] =  "REALN";
message[6] =  "REALNI";
message[7] =  "REALNIG";
message[8] =  "REALNIGG";
message[9] =  "REALNIGGA";
message[10] = "REALNIGGAZ";
message[11] = "REALNIGGAZ.";
message[12] = "REALNIGGAZ.p";
message[13] = "REALNIGGAZ.pw";
message[14] = "REALNIGGAZ.pw";
var reps = 2;
var speed = 50; var p = message.length;
var T = "";
var C = 0;
var mC = 0;
var s = 0;
var sT = null;
if (reps < 1) reps = 1;
function doTheThing() {
T = message[mC];
A();
}
function A() {
s++;
if (s > 14) { s = 1;}
if (s == 1)  { document.title =  '+T+' '; }
if (s == 2)  { document.title =  '+T+' '; }
if (s == 3)  { document.title =  '+T+' '; }
if (s == 4)  { document.title =  '+T+' '; }
if (s == 5)  { document.title =  '+T+' '; }
if (s == 6)  { document.title =  '+T+' '; }
if (s == 7)  { document.title =  '+T+' '; }
if (s == 8)  { document.title =  '+T+' '; }
if (s == 9)  { document.title =  '+T+' '; }
if (s == 10) { document.title =  '+T+' '; }
if (s == 11) { document.title =  '+T+' '; }
if (s == 12) { document.title =  '+T+' '; }
if (s == 13) { document.title =  '+T+' '; }
if (s == 14) { document.title =  '+T+' '; }
if (C < (14 * reps)) {
sT = setTimeout("A()", speed);
C++;
}
else {
C = 0;
s = 0;
mC++;
if(mC > p - 1) mC = 0;
sT = null;
doTheThing();
}
}
doTheThing();
