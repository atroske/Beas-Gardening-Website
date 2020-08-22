
function OpenNav(){
	document.getElementById("button1").style.display = "none";
	document.getElementById("button2").style.display = "grid";
    document.getElementById("topNav").style.display = "grid";
    document.getElementsByClassName("optional").style.display = "none";
}

function CloseNav(){
	document.getElementById("button1").style.display = "grid";
	document.getElementById("button2").style.display = "none";
	document.getElementById("topNav").style.display = "none";
}
