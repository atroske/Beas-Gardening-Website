
function OpenProductNav(n){
    document.getElementById(`sideDrpC${n}`).style.display = "grid";
    document.getElementById(`sideDrpO${n}`).style.display = "none";
    document.getElementById(`productOption${n}`).style.display = "grid";
}

function CloseProductNav(n) {
    document.getElementById(`sideDrpO${n}`).style.display = "grid";
    document.getElementById(`sideDrpC${n}`).style.display = "none";
    document.getElementById(`productOption${n}`).style.display = "none";
}

function OpenNav(){
	document.getElementById("button1").style.display = "none";
	document.getElementById("button2").style.display = "grid";
	document.getElementById("topNav").style.display = "grid";
}

function CloseNav(){
	document.getElementById("button1").style.display = "grid";
	document.getElementById("button2").style.display = "none";
	document.getElementById("topNav").style.display = "none";
}
