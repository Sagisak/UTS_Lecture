// FUNCTION UNTUK SLIDE SLIDE GG GIMANK!

let slideIndex = 1;
showSlide(slideIndex);
counter(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
  counter(slideIndex);
}

function counter(n){
  if (n > 4){
    n = 1;
  } else if (n == 0){
    n = 4;
  }
  id = document.getElementById("test").innerHTML = "1" + n;
  switch(n){
    case 1:
      localStorage.setItem("pet", "1");
      break;
    case 2:
      localStorage.setItem("pet", "2");
      break;
    case 3:
      localStorage.setItem("pet", "3");
      break;
    case 4:
      localStorage.setItem("pet", "4");
      break;
    default:
      localStorage.setItem("pet", "4");
      break;
  }
  id2 = document.getElementById("test2").innerHTML = "1" + localStorage.getItem("pet");
  }

  function pictureprint(){
    avatar = document.getElementById("avatar");
    
    var dataImage = localStorage.getItem("pet");
    tagimg = document.createElement("img");
    tagimg.id= ("petimage");
    switch(dataImage){
      case "1":
        tagimg.src = "/images/biasa.png";
        break;
      case "2":
        tagimg.src = "/images/biasa2.png";
        break;
      case "3":
        tagimg.src = "/images/avatar3.png";
        break;
      case "4":
        tagimg.src = "/images/avatar4.png";
        break;
      default :
      tagimg.src = "/images/avatar4.png";
      break;
  
    }
    avatar.appendChild(tagimg);
    petkita = document.getElementById("petimage").style.width = "300px";
    petkita = document.getElementById("petimage").style.display = "flex";
    petkita = document.getElementById("petimage").style.marginLeft = "auto";
    petkita = document.getElementById("petimage").style.marginRight = "auto";
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


loop = 1;

function info(){
    var NamaPet = document.getElementById("petName").value;
    localStorage.setItem("nama",NamaPet);
} 

function nama(){ 
  var t = 0;
  const now = new Date();
  let hours = addZero(now.getHours());
  var minute = now.getMinutes(); 
  namaprocess();
  setInterval(namaprocess, 1000);

  function namaprocess(){
    var hourprint;
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
    time = document.getElementById("time").style.fontSize='30px';
    if (hours >= 0 && hours < 12){
      introduce = document.getElementById("nama").innerHTML="<center>Good Morning, "+ localStorage.getItem("nama") + "!</center>";
      introduce =  document.getElementById("nama").style.fontFamily='Cursive';
      introduce =  document.getElementById("nama").style.fontWeight='bold';
      introduce =  document.getElementById("nama").style.fontSize='50px';
    } else if (hours >= 12 && hours  < 17){
      introduce = document.getElementById("nama").innerHTML="<center>Good Afternoon, " + localStorage.getItem("nama") + "!</center>";
      introduce =  document.getElementById("nama").style.fontFamily='Cursive';
      introduce =  document.getElementById("nama").style.fontWeight='bold';
      introduce =  document.getElementById("nama").style.fontSize='25px';
      introduce =  document.getElementById("nama").style.fontSize='50px';
    } else if (hours >= 17 && hours <= 23) {
      introduce = document.getElementById("nama").innerHTML="<center>Good Evening, " + localStorage.getItem("nama") + "!</center>";
      introduce =  document.getElementById("nama").style.fontFamily='Cursive';
      introduce =  document.getElementById("nama").style.fontWeight='bold';
      introduce =  document.getElementById("nama").style.fontSize='50px';
    }
    
  }
  
  
}


sisa1 = document.getElementById("sisa1"); //play
sisa2 = document.getElementById("sisa2"); //bath
sisa3 = document.getElementById("sisa3"); //sleep
sisa4 = document.getElementById("sisa4"); //eat
var time;

// function game(){
//     j = 3;
//     l = 4;
//     f = 2;
//     menu = document.getElementById("menu");
//     boxinput = document.getElementById("boxInput");
//     gameplay = document.getElementById("gameplay");


//     while(menu.hasChildNodes()){
//         menu.removeChild(menu.firstChild);

//     }

//     while(boxinput.hasChildNodes()){
//         boxinput.removeChild(boxinput.firstChild);
//     }
    
//     tagA = document.createElement(tagname="a");
//     tagTable = document.createElement(tagname="table");
//     tagTr = document.createElement(tagname="tr");
//     tagTd = document.createElement(tagname="td");
//     tagh2 = document.createElement(tagname="h2");
//     tagimg = document.createElement(tagname="img");
//     tagimg.src = "images/avatar1.png";

//     tagbtn = document.createElement(tagname="button");


//     menu.appendChild(tagA);
//     tagA.appendChild(tagTable);
//     for(i=0;i < j; i++){
//             tagTr = document.createElement(tagname="tr");
//             tagTable.appendChild(tagTr);
//         for(k=0; k < l; k++){
//             tagTr = document.createElement(tagname="tr");
//             tagTd = document.createElement(tagname="td");
//             tagTr.appendChild(tagTd);
//         }
//     }

//     for(i = 0; i < f; i++){
//         tagh2 = document.createElement(tagname="h2");
//         gameplay.appendChild(tagh2);
//     }
//     gameplay.appendChild(tagimg);
    
//     tagbtn.setAttribute("onclick",tambah());
//     tagbtn.onclick = tambah();
//     boxinput.appendChild(btn);

// }

function statusbar(){
  var i =0;
  sisa1 = document.getElementById("sisa1"); //play
  sisa2 = document.getElementById("sisa2"); //bath
  sisa3 = document.getElementById("sisa3"); //sleep
  sisa4 = document.getElementById("sisa4"); //eat
  width1 = 150;
  width2 = 150;
  width3 = 150;
  width4 = 150;
  id = setInterval(framekurang, 1000); 
  
}

function framekurang(){
  if (width1 <= 0 || width2 <= 0 || width3 <= 0 || width4 <= 0){
    clearInterval(id);

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
  var time = 0;
  var lv = 1;
  levelprocess();
  setInterval(levelprocess, 1000);

  function levelprocess(){
  time = time + 1;
  if (time == 720){
    new_level = document.getElementById("level").innerHTML = "<b><center>the dead!</center></b>";
    id = setInterval(framekurang, 100);
  }
  else if (time == 20){
      lv += 1;
      new_level = document.getElementById("level").innerHTML ="<b><center>level " + lv + "</center></b>";
      id = setInterval(framekurang, 200);
  } else if (time == 3){
    lv += 1;
    new_level = document.getElementById("level").innerHTML ="<b><center>level " + lv + "</center></b>";
    id = setInterval(framekurang, 500);
  } else{
    new_level = document.getElementById("level").innerHTML = "<b><center>level " + lv + "</center></b>";
  }
  
  
  }

}

//For Diabling Button for 3 seconds
// const buttonAct = document.getElementById("button-act");
// function disableButton(input) {
//   buttonAct.disabled = true;
//   setTimeout(enableButton, parseInt(input) * 1000); // enable button after 3 seconds
// }

// function enableButton() {
//   buttonAct.disabled = false;
// }
////////////////////////////////////

function eating(){
  if (width4 + 20 >= 200){
    sisa4.style.width = 200 + 'px';
    return;
  }

  width4+= 20;
  sisa4.style.width = width4 + "px";
  return;
}

function sleeping(){
  sisa3 = document.getElementById("sisa3"); //sleep

  if (width3 + 20> 200){
    sisa3.style.width = 200 + 'px';
    return;
  }

  width3+= 20;
  sisa3.style.width = width3 + "px";

  return;
}

function bath(){
  sisa2 = document.getElementById("sisa2"); //bath

  if (width2 + 20 > 200){
    sisa2.style.width = 200 + 'px';
    return;
  }

  width2+= 20;
  sisa2.style.width = width2 + "px";

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

/* INI FUNCTION GAME NYARI2 BINTANG!!! PADALAH DI TAMPILANNYA ITU KOTAK HEHE*/
function gameRaihBintang(){
  sisa1 = document.getElementById("sisa1");
  var containergame = document.getElementById("container-game");
  containergame.scrollIntoView({ behavior: "smooth", block: "start", inline:"start"});
  containergame.style.display = "block";

  var circle = document.getElementById("circle");
  var star = document.getElementById("star");

  circle.style.left = 0;
  circle.style.top = 0;

  let point = 0;

  let cl = 0;
  let ct = 0;

  let sl = 0;
  let st = 0;

  let moveBy = 125;

  function starNewPos(){
      var moveBy = 125;
      star.style.opacity = 1;
      sl = 0;
      st = 0;

      let randomNumberX = Math.floor(Math.random() * 8) + 1;
      let randomNumberY = Math.floor(Math.random() * 4) + 1;

      star.style.position = 'absolute';
      star.style.left = 0;
      star.style.top = 0;

      setTimeout(() => {
          star.style.opacity = 0;
      }, 500);

      star.style.left = parseInt(star.style.left) + (moveBy * randomNumberX) + 'px';
      star.style.top = parseInt(star.style.top) + (moveBy * randomNumberY) + 'px';
      
      st = st + randomNumberY;
      sl = sl + randomNumberX;
  }

  starNewPos();
  updateCoor();

  // Set the starting time in seconds
  var timeLeft = 15;

  // Get a reference to the timer element
  var timerEl = document.getElementById("timer");

  // Update the timer display every second
  var timerInterval = setInterval(function() {
      // Decrement the time left
      timeLeft--;

      // Update the timer display
      timerEl.textContent = timeLeft;

      // If the timer reaches 0, stop the interval
      if (timeLeft === 0) {
          clearInterval(timerInterval);
          alert("Time's up!");
          containergame.style.display = "none";

          window.removeEventListener('keyup', circleMovements);

          sisa1 = document.getElementById("sisa1");   
          sisa2 = document.getElementById("sisa2");
          sisa3 = document.getElementById("sisa3");
          sisa4 = document.getElementById("sisa4");
          width1+= point * 3;

          if(parseInt(sisa1.style.width) + point >= 200 ){
            width1 = 200;
            sisa1.style.width = width1 + 'px';
          }
          else{
            sisa1.style.width = width1 + "px";
          }
          width2 -= 10;
          width3 -= 15;
          width4 -= 20;

          sisa2.style.width = width2 + 'px';
          sisa3.style.width = width3 + 'px';
          sisa4.style.width = width4 + 'px';

          return;
      }

  }, 1000); // 1000 milliseconds = 1 second

  function circleMovements(e){
      switch(e.key){
          case 'a':
              circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
              cl = parseInt(cl) - 1;
              break;
          case 'd':
              circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
              cl = parseInt(cl) + 1;
              break;
          case 'w':
              circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
              ct = parseInt(ct) - 1;
              break;
          case 's':
              circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
              ct = parseInt(ct) + 1;
              break; 
      }

      if(cl == sl && ct == st){
          starNewPos();
          point = parseInt(point) + 1;
      }
      updateCoor(); 
  }
  window.addEventListener('keyup', circleMovements);

  function updateCoor(){
      document.getElementById("posCircle").innerHTML = "CIRCLE = X AXIS:" + parseInt(cl) + " Y AXIS:" + parseInt(ct);
      document.getElementById("posStar").innerHTML = "STAR = X AXIS:" + parseInt(sl) + " Y AXIS:" + parseInt(st);
      document.getElementById("point").innerHTML = "Point = " + parseInt(point);
  }

  
}

