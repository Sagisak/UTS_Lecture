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



function nama(){
  const now = new Date();
  const hours = now.getHours();
  const minute = now.getMinutes();
  const timestring = " " + hours + minute ;
  while(1){
    time = document.getElementById("time").innerHTML=" " + timestring;
    if (hours >= 0 && hours < 12){
      introduce = document.getElementById("nama").innerHTML="good morning "+ nama;
    } else if (hours >= 12 && hours  < 5){
      introduce = document.getElementByID("nama").innerHTML="good afternoon " + nama;
    } else {
      introduce = document.getElementByID("nama").innerHTML="good evening " + nama;
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
  width = 190;
  var id = setInterval(framekurang, 100); 
}

function framekurang(){
  if (width <= 0){
    clearInterval(id);
    i = 0;
  } else {
    width--;
    sisa1.style.width = width + "px"; //play
    sisa2.style.width = width + "px"; //bath
    sisa3.style.width = width + "px"; //sleep
    sisa4.style.width = width + "px"; //eat
  }
}

function framtambahMakan(){
    width+= 20;
    sisa4.style.width = width + "px";
}

function framtambahTidur(){
  width+= 20;
  sisa4.style.width = width + "px";
}

function framtambahMain(){
  width+= 20;
  sisa4.style.width = width + "px";
}

function framtambahMandi(){
  width+= 20;
  sisa4.style.width = width + "px";
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
  var id = setinterval(framekurang);
  var id2 = setinterval(frametambahMakan, 1);
}

function sleeping(){
  sisa3 = document.getElementById("sisa3"); //sleep
  var id2 = setInterval(frametambahTidur, 1);
}

function bath(){
  sisa2.style.width = width + "px"; //bath
  var id2 = setInterval(frametambahMandi, 1);
}

function play(){
  sisa1 = document.getElementById("sisa1");   
  var id2 = setInterval(frametambahMain, 1);
}

