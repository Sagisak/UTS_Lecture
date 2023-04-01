// FUNCTION UNTUK SLIDE SLIDE GG GIMANK!

time = 0;
lv = 1



let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}


function showSlide(n) {
  const slides = document.getElementsByClassName("slideshow-image");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

/*

document.getElementById("prevBtn").addEventListener("click", () => {
  changeSlide(-1);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  changeSlide(1);
});

*/

// SELESAI DISINI! HEHE

function info(){
    var pet = document.getElementById("petName").value;
    return pet;
}

var nama = info();

function name(){
  const hours = now.getHour();
  const minute = now.getMinute();
  const timestring = ${hours}:${minutes};
  while(1){
    time = getElementById("time").innerHTML=" " + timestring;
    if (hours >= 0 && hours < 12){
      introduce = getElementById("nama").innerHTML="good morning "+ nama;
    } else if (hours >= 12 && hour < 5){
      introduce = getElementByID("nama").innerHTML="good afternoon " + nama;
    } else {
      introduce = getElementByID("nama").innerHTML="good evening " + nama;
    }
    
  }
  
}




function game(){
    j = 3;
    l = 4;
    f = 2;
    menu = document.getElementById("menu");
    boxinput = document.getElementById("boxInput");
    gameplay = document.getElementById("gameplay");


    while(menu.hasChildNodes()){
        menu.removeChild(menu.firstChild);

    }

    while(boxinput.hasChildNodes()){
        boxinput.removeChild(boxinput.firstChild);
    }
    
    tagA = document.createElement(tagname="a");
    tagTable = document.createElement(tagname="table");
    tagTr = document.createElement(tagname="tr");
    tagTd = document.createElement(tagname="td");
    tagh2 = document.createElement(tagname="h2");
    tagimg = document.createElement(tagname="img");
    tagimg.src = "images/avatar1.png";

    tagbtn = document.createElement(tagname="button");


    menu.appendChild(tagA);
    tagA.appendChild(tagTable);
    for(i=0;i < j; i++){
            tagTr = document.createElement(tagname="tr");
            tagTable.appendChild(tagTr);
        for(k=0; k < l; k++){
            tagTr = document.createElement(tagname="tr");
            tagTd = document.createElement(tagname="td");
            tagTr.appendChild(tagTd);
        }
    }

    for(i = 0; i < f; i++){
        tagh2 = document.createElement(tagname="h2");
        gameplay.appendChild(tagh2);
    }
    gameplay.appendChild(tagimg);
    
    tagbtn.setAttribute("onclick",tambah());
    tagbtn.onclick = tambah();
    boxinput.appendChild(btn);

}

function statusbar(){
  var i =0;
  sisa = document.getElementById("sisa");
  width = 190;
  var id = setInterval(frame, 100);
}

function frame(){
  if (width <= 0){
    clearInterval(id);
    i = 0;
  } else {
    width--;
    sisa.style.width = width + "px";
  }
}

function level(){
  if (time == 180){
      lv += 1;
      new_level = document.getElementById("level").innerHTML ="level " + lv;
  } else if (time == 360){
    lv += 1;
    new_level = document.getElementById("level").innerHTML ="level " + lv;
  } else if (time == 720){
    new_level = document.getElementById("level").innerHTML = "the dead!";
  }

}

