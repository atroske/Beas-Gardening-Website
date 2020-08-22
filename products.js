function HideProduct(topic){
    var i;
    var divs = document.getElementById("visualProducts");
    var children = divs.children;
    for(i = 1; i < children.length; i++){
        if(children[i] == topic) {
            children[i].style.display = "grid"
        }
        else {
            children[i].style.display = "none"
        }
    }
    document.getElementsByClassName(drpdwn).style.display = "inline-block";
}

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
