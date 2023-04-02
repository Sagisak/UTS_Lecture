// FUNCTION UNTUK SLIDE SLIDE GG GIMANK!





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

lv = 1
loop = 1;

function info(){
    var NamaPet = document.getElementById("petName").value;
    localStorage.setItem("nama",NamaPet);
}

 

function picture(){
  switch(slideIndex){
    case 1:
      pic = document.getElementById("avatar1").src;
      avatar = document.getElementById("avatar");
      tagimg = document.createElement(tagname="img");
      tagimg.src = pic;

      avatar.appendChild(tagimg);
      break;
    case 2:
      pic = document.getElementById("avatar2").src;
      avatar = document.getElementById("avatar");
      tagimg = document.createElement(tagname="img");
      tagimg.src = pic;

      avatar.appendChild(tagimg);
      break;
    case 3:
      pic = document.getElementById("avatar3").src;
      avatar = document.getElementById("avatar");
      tagimg = document.createElement(tagname="img");
      tagimg.src = pic;

      avatar.appendChild(tagimg);
      break;
    case 4:
      pic = document.getElementById("avatar4").src;
      avatar = document.getElementById("avatar");
      tagimg = document.createElement(tagname="img");
      tagimg.src = pic;

      avatar.appendChild(tagimg);
      break;
  }
}

function addZero(i) {
  if (i<10) {i = "0" + i};
  return i;
}




function nama(){ 
  var t = 0;
  const now = new Date();
  let hours = addZero(now.getHours());
  var minute = now.getMinutes(); 
  namaprocess();
  setInterval(namaprocess, 1000);

  function namaprocess(){
    var hoursprint;
    var printminute;
    minute = minute + 1;
    if(minute < 10){
      printminute =  "0" + minute;
    } else if (minute >= 10 && minute < 60){
      var printminute = minute;
    } else if (minute >= 60){
      minute = 0;
      printminute = "0" + 0;
      hours = hours + 1;
    }

    if (hours < 10){
      hourprint = "0" + hours;
    } else if (hours >= 10 && hours < 24){
      hourprint =  hours;
    } else if (hours >= 24){
      hours = 0;
      hourprint = "0" + hours;
    }

    var timestring = hourprint +" : " + printminute;
   
    time = document.getElementById("time").innerHTML="<center> " + timestring + "</center>";
    time = document.getElementById("time").style.fontWeight='bold';
    if (hours >= 0 && hours < 12){
      introduce = document.getElementById("nama").innerHTML="<center>good morning "+ localStorage.getItem("nama") + "</center>";
      introduce =  document.getElementById("nama").style.fontFamily='Arial';
      introduce =  document.getElementById("nama").style.fontWeight='bold';
    } else if (hours >= 12 && hours  < 17){
      introduce = document.getElementById("nama").innerHTML="<center>good afternoon " + localStorage.getItem("nama") + "</center>";
      introduce =  document.getElementById("nama").style.fontFamily='Arial';
      introduce =  document.getElementById("nama").style.fontWeight='bold';
    } else if (hours >= 17 && hours <= 23) {
      introduce = document.getElementById("nama").innerHTML="<center>good evening " + localStorage.getItem("nama") + "</center>";
      introduce =  document.getElementById("nama").style.fontFamily='Arial';
      introduce =  document.getElementById("nama").style.fontWeight='bold';
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
  sisa1 = document.getElementById("sisa1"); //play
  sisa2 = document.getElementById("sisa2"); //bath
  sisa3 = document.getElementById("sisa3"); //sleep
  sisa4 = document.getElementById("sisa4"); //eat
  width1 = 200;
  width2 = 200;
  width3 = 200;
  width4 = 200;
  var id = setInterval(framekurang, 1000); 
}

function framekurang(){
  if (width1 <= 0 || width2 <= 0 || width3 <= 0 || width4 <= 0){
    clearInterval(id);
    // i = 0;
  } else {
    width1--;
    width2--;
    width3--;
    width4--;

    sisa1.style.width = width1 + "px"; //play
    sisa2.style.width = width2 + "px"; //bath
    sisa3.style.width = width3 + "px"; //sleep
    sisa4.style.width = width4 + "px"; //eat
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

function eating(){
  sisa4 = document.getElementById("sisa4");
  width4+= 20;
  sisa4.style.width = width4 + "px";
  return;
}

function sleeping(){
  sisa3 = document.getElementById("sisa3"); //sleep
  width3+= 20;
  sisa3.style.width = width3 + "px";

  return;
}

function bath(){
  sisa2 = document.getElementById("sisa2"); //bath
  width2+= 20;
  sisa2.style.width = width2 + "px";

  return;
}

function play(){
  sisa1 = document.getElementById("sisa1");   
  width1+= 20;
  sisa1.style.width = width1 + "px";

  return;
}



function sound(){
  var buttonSound = document.getElementById("button-sound");
  var myButton = document.getElementsByClassName("button-container");

myButton.addEventListener("click", function() {
  buttonSound.currentTime = 0;
  buttonSound.play();
});
}

