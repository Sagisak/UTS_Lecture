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
    tagimg = document.createElement(tagname="img");
    switch(dataImage){
      case "1":
        tagimg.src = "/images/avatar1.png";
        break;
      case "2":
        tagimg.src = "/images/avatar2.png";
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
      introduce = document.getElementById("nama").innerHTML="<center>Good Morning, "+ localStorage.getItem("nama") + "!</center>";
      introduce =  document.getElementById("nama").style.fontFamily='Cursive';
      introduce =  document.getElementById("nama").style.fontWeight='bold';
      introduce =  document.getElementById("nama").style.fontSize='50px';
    } else if (hours >= 12 && hours  < 17){
      introduce = document.getElementById("nama").innerHTML="<center>Good Afternoon, " + localStorage.getItem("nama") + "!</center>";
      introduce =  document.getElementById("nama").style.fontFamily='Cursive';
      introduce =  document.getElementById("nama").style.fontWeight='bold';
      introduce =  document.getElementById("nama").style.fontSize='50px';
    } else if (hours >= 17 && hours <= 23) {
      introduce = document.getElementById("nama").innerHTML="<center>Good Evening, " + localStorage.getItem("nama") + "!</center>";
      introduce =  document.getElementById("nama").style.fontFamily='Cursive';
      introduce =  document.getElementById("nama").style.fontWeight='bold';
      introduce =  document.getElementById("nama").style.fontSize='50px';
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
  width = 200;
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
  width+= 20;
  sisa4.style.width = width + "px";
  return;
}

function sleeping(){
  sisa3 = document.getElementById("sisa3"); //sleep
  width+= 20;
  sisa3.style.width = width + "px";

  return;
}

function bath(){
  sisa2 = document.getElementById("sisa2"); //bath
  width+= 20;
  sisa2.style.width = width + "px";

  return;
}

function play(){
  sisa1 = document.getElementById("sisa1");   
  width+= 20;
  sisa1.style.width = width + "px";

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
  var containergame = document.getElementById("container-game");
  containergame.style.display = "block";

  var circle = document.getElementById("circle");
  var star = document.getElementById("star");

  circle.style.left = 0;
  circle.style.top = 0;


  // let circle = document.querySelector('#circle');
  // let star = document.querySelector('#star');
  var moveBy = 0;
  moveBy = 125;

  let point = 0;

  let cl = 0;
  let ct = 0;

  let sl = 0;
  let st = 0;


  // let randomNumberX = Math.floor(Math.random() * 15) + 1;
  // let randomNumberY = Math.floor(Math.random() * 9) + 1;


  function starNewPos(){
      star.style.opacity = 1;
      sl = 0;
      st = 0;

      let randomNumberX = Math.floor(Math.random() * 13) + 1;
      let randomNumberY = Math.floor(Math.random() * 6) + 1;

      star.style.position = 'absolute';
      star.style.left = 0;
      star.style.top = 0;

      setTimeout(() => {
          /*star.style.transition = 2 + 's';*/
          star.style.opacity = 0;
          /*star.style.transition = 0 + 's';*/
      }, 750);
      /*star.style.opacity = 0;*/

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

          sisa1 = document.getElementById("sisa1");   
          width1+= point;

          if(parseInt(sisa1.style.width) + point >= 200 ){
            width1 = 200;
            sisa1.style.width = width1 + 'px';
            return;
          }

          sisa1.style.width = width1 + "px";

          return;
      }

  }, 1000); // 1000 milliseconds = 1 second

  window.addEventListener('keyup', (e) =>{
      switch(e.key){
          case 'ArrowLeft':
              circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
              cl = parseInt(cl) - 1;
              break;
          case 'ArrowRight':
              circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
              cl = parseInt(cl) + 1;
              break;
          case 'ArrowUp':
              circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
              ct = parseInt(ct) - 1;
              break;
          case 'ArrowDown':
              circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
              ct = parseInt(ct) + 1;
              break; 
      }

      if(cl == sl && ct == st){
          starNewPos();
          point = parseInt(point) + 1;
      }
      updateCoor(); 
  });

  function updateCoor(){
      document.getElementById("posCircle").innerHTML = "CIRCLE = X AXIS:" + parseInt(cl) + " Y AXIS:" + parseInt(ct);
      document.getElementById("posStar").innerHTML = "STAR = X AXIS:" + parseInt(sl) + " Y AXIS:" + parseInt(st);
      document.getElementById("point").innerHTML = "Point = " + parseInt(point);
  }
}

