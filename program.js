// FUNCTION UNTUK SLIDE SLIDE GG GIMANK!

let slideIndex = 1;
showSlide(slideIndex);
counter(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
  counter(slideIndex);
}

function gameover(){
  var id = localStorage.getItem("over");
  if (id == "1"){
    window.alert("Game Over!");
    id == localStorage.setItem("over", "0");
  }
}

function counter(n){
  if (n > 4){
    n = 1;
  } else if (n == 0){
    n = 4;
  }
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
  }

  function pictureprint(){
    avatar = document.getElementById("avatar");
    var dataImage = localStorage.getItem("pet");
    tagimg = document.createElement("img");
    tagimg.id= ("petimage");
    switch(dataImage){
      case "1":
        tagimg.src = "/images/rubah/default.png";
        break;
      case "2":
        tagimg.src = "/images/babi/default.png";
        break;
      case "3":
        tagimg.src = "/images/kambing/default.png";
        break;
      case "4":
        tagimg.src = "/images/panda/default.png";
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
  const backimage = new Array(
    "/images/morning.jpg",
    "/images/daylight.jpg",
    "/images/evening.jpg",
    );
  const now = new Date();
  let hours = now.getHours();
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
    
    if (hours >= 5 && hours < 17){
      time = document.getElementById("time").innerHTML="<center> " + timestring + "</center>";
      time = document.getElementById("time").style.fontWeight='bold';
      time = document.getElementById("time").style.fontSize='30px';
    } else {
      time = document.getElementById("time").innerHTML="<center> " + timestring + "</center>";
      time = document.getElementById("time").style.fontWeight='bold';
      time = document.getElementById("time").style.fontSize='30px';
      time = document.getElementById("time").style.color='white';

    }
    
    if (hours >= 5 && hours < 12){
      background = document.getElementsByTagName("body")[0].setAttribute('style', 'background-image: url("'+backimage[0]+'")');
      introduce = document.getElementById("nama").innerHTML="<center>Good Morning, "+ localStorage.getItem("nama") + "!</center>";
      introduce =  document.getElementById("nama").style.fontFamily='Cursive';
      introduce =  document.getElementById("nama").style.fontWeight='bold';
      introduce =  document.getElementById("nama").style.fontSize='50px';
    } else if (hours >= 12 && hours  < 17){
      background = document.getElementsByTagName("body")[0].setAttribute('style', 'background-image: url("'+backimage[1]+'")');
      introduce = document.getElementById("nama").innerHTML="<center>Good Afternoon, " + localStorage.getItem("nama") + "!</center>";
      introduce =  document.getElementById("nama").style.fontFamily='Cursive';
      introduce =  document.getElementById("nama").style.fontWeight='bold';
      introduce =  document.getElementById("nama").style.fontSize='25px';
      introduce =  document.getElementById("nama").style.fontSize='50px';
    } else {
      background = document.getElementsByTagName("body")[0].setAttribute('style', 'background-image: url("'+backimage[2]+'")');
      introduce = document.getElementById("nama").innerHTML="<center>Good Evening, " + localStorage.getItem("nama") + "!</center>";
      introduce =  document.getElementById("nama").style.fontFamily='Cursive';
      introduce =  document.getElementById("nama").style.fontWeight='bold';
      introduce =  document.getElementById("nama").style.fontSize='50px';
      introduce =  document.getElementById("nama").style.color='white';
    }
    
  }
  
  
}




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

sisa1 = document.getElementById("sisa1"); //play
sisa2 = document.getElementById("sisa2"); //bath
sisa3 = document.getElementById("sisa3"); //sleep
sisa4 = document.getElementById("sisa4"); //eat
var time;


function statusbar(){
  var i =0;
  width1 = 150;
  width2 = 150;
  width3 = 150;
  width4 = 150;
  fk = setInterval(framekurang, 4000);
  
}

function framekurang(){
  if (width1 <= 0 || width2 <= 0 || width3 <= 0 || width4 <= 0){
    id = localStorage.setItem("over", "1");
    clearInterval(fk);
    window.location.replace("/home/main.html");
    return;
    // alert("game over");
    // location.replace("/home/main.html");

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

  if (width1 <= 50 || width2 <= 50 || width3 <= 50 || width4 <= 50){
    avatar = document.getElementById("avatar");
    avatar.removeChild(avatar.firstElementChild);
    var dataImage = localStorage.getItem("pet");
    tagimg = document.createElement("img");
    tagimg.id= ("petimage");
    switch(dataImage){
      case "1":
        tagimg.src = "/images/rubah/makan.png";
        break;
      case "2":
        tagimg.src = "/images/babi/makan.png";
        break;
      case "3":
        tagimg.src = "/images/kambing/makan.png";
        break;
      case "4":
        tagimg.src = "/images/panda/makan.png";
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
  } else {
    gantidefault();
  }
}

function level(){
  var time = 0;
  var lv = 1;
  levelprocess();
  setInterval(levelprocess, 1000); // 1000

  function levelprocess(){
  time = time + 1;
  if (time == 280){
    new_level = document.getElementById("level").innerHTML = "<b><center>the dead!</center></b>";
    fk = setInterval(framekurang, 200); //100
  }
  else if (time == 120){
      lv += 1;
      new_level = document.getElementById("level").innerHTML ="<b><center>level " + lv + "</center></b>";
      fk = setInterval(framekurang, 400); //200
  } else if (time == 40){
    lv += 1;
    new_level = document.getElementById("level").innerHTML ="<b><center>level " + lv + "</center></b>";
    fk = setInterval(framekurang, 1000); //500
  } else{
    new_level = document.getElementById("level").innerHTML = "<b><center>level " + lv + "</center></b>";
  }
  
  
  }

}

//For Diabling Button for 3 seconds
// const buttonAct1 = document.getElementById("buttonss1");
// const buttonAct2 = document.getElementById("buttonss2");
// const buttonAct3 = document.getElementById("buttonss3");
// const buttonAct4 = document.getElementById("buttonss4");

// buttonAct1.addEventListener("click", () => {
//   buttonAct1.disabled = true;
//   buttonAct2.disabled = true;
//   buttonAct3.disabled = true;
//   buttonAct4.disabled = true;
  
//   setTimeout(() => {
//     buttonAct1.disabled = false;
//     buttonAct2.disabled = false;
//     buttonAct3.disabled = false;
//     buttonAct4.disabled = false;
//   }, 3000);
// });

// buttonAct2.addEventListener("click", () => {
//   buttonAct1.disabled = true;
//   buttonAct2.disabled = true;
//   buttonAct3.disabled = true;
//   buttonAct4.disabled = true;
  
//   setTimeout(() => {
//     buttonAct1.disabled = false;
//     buttonAct2.disabled = false;
//     buttonAct3.disabled = false;
//     buttonAct4.disabled = false;
//   }, 3000);
// });

// buttonAct3.addEventListener("click", () => {
//   buttonAct1.disabled = true;
//   buttonAct2.disabled = true;
//   buttonAct3.disabled = true;
//   buttonAct4.disabled = true;
  
//   setTimeout(() => {
//     buttonAct1.disabled = false;
//     buttonAct2.disabled = false;
//     buttonAct3.disabled = false;
//     buttonAct4.disabled = false;
//   }, 3000);
// });

// buttonAct4.addEventListener("click", () => {
//   buttonAct1.disabled = true;
//   buttonAct2.disabled = true;
//   buttonAct3.disabled = true;
//   buttonAct4.disabled = true;
  
//   setTimeout(() => {
//     buttonAct1.disabled = false;
//     buttonAct2.disabled = false;
//     buttonAct3.disabled = false;
//     buttonAct4.disabled = false;
//   }, 3000);
// });


// function disableButton(input) {
//   buttonAct.style.cursor = "not-allowed";
//   setTimeout(enableButton, input);
//   //setTimeout(enableButton, parseInt(input) * 1000); // enable button after 3 seconds
// }

// function enableButton() {
//   buttonAct.style.cursor = "default";
// }



// const buttons = document.getElementsByClassName("button");

// function disableButton(input) {
//   for (let i = 0; i < buttonAct.length; i++) {
//     buttonAct[i].disabled = true;
//   }
//   setTimeout(enableButton, input);
// }

// function enableButton() {
//   for (let i = 0; i < buttonAct.length; i++) {
//     buttonAct[i].disabled = false;
//   }
// }
////////////////////////////////////

function eating(){

    avatar = document.getElementById("avatar");
    avatar.removeChild(avatar.firstElementChild);
    var dataImage = localStorage.getItem("pet");
    tagimg = document.createElement("img");
    tagimg.id= ("petimage");
    switch(dataImage){
      case "1":
        tagimg.src = "/images/rubah/makan.png";
        break;
      case "2":
        tagimg.src = "/images/babi/makan.png";
        break;
      case "3":
        tagimg.src = "/images/kambing/makan.png";
        break;
      case "4":
        tagimg.src = "/images/panda/makan.png";
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

  
  if (width4 + 20 >= 200){
    sisa4.style.width = 200 + 'px';
    setTimeout(gantidefault, 2000);
    return;
  }

  //menambah makan di status bar
  width4+= 20;
  sisa4.style.width = width4 + "px";
  
  //mengurangi mandi di status bar
  width2-= 10;
  sisa2.style.width = width2 + "px";

  //mengurangi main di status bar
  width1-= 5;
  sisa1.style.width = width1 + "px";

  
  
  setTimeout(gantidefault, 2000);
  return;
}

function sleeping(){
  avatar = document.getElementById("avatar");
    avatar.removeChild(avatar.firstElementChild);
    var dataImage = localStorage.getItem("pet");
    tagimg = document.createElement("img");
    tagimg.id= ("petimage");
    switch(dataImage){
      case "1":
        tagimg.src = "/images/rubah/tidur.png";
        break;
      case "2":
        tagimg.src = "/images/babi/tidur.png";
        break;
      case "3":
        tagimg.src = "/images/kambing/tidur.png";
        break;
      case "4":
        tagimg.src = "/images/panda/tidur.png";
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

  sisa3 = document.getElementById("sisa3"); //sleep

  if (width3 + 20>= 200){
    sisa3.style.width = 200 + 'px';
    setTimeout(gantidefault, 2000);
    return;
  }


  width3+= 20; //tidur namba status
  width4-= 10; //makan kurang status
  width1-= 5; //main  kurang status
  width2-= 2;  //mandi kurang status

  sisa1.style.width = width1 + "px"; //play
  sisa2.style.width = width2 + "px"; //bath
  sisa3.style.width = width3 + "px"; //sleep
  sisa4.style.width = width4 + "px"; //eat


  setTimeout(gantidefault, 2000);
  return;
}

function bath(){
  avatar = document.getElementById("avatar");
  avatar.removeChild(avatar.firstElementChild);
  var dataImage = localStorage.getItem("pet");
  tagimg = document.createElement("img");
  tagimg.id= ("petimage");
  switch(dataImage){
    case "1":
      tagimg.src = "/images/rubah/mandi.png";
      break;
    case "2":
      tagimg.src = "/images/babi/mandi.png";
      break;
    case "3":
      tagimg.src = "/images/kambing/mandi.png";
      break;
    case "4":
      tagimg.src = "/images/panda/mandi.png";
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

  sisa2 = document.getElementById("sisa2"); //bath

  if (width2 + 20 >= 200){
    sisa2.style.width = 200 + 'px';
    setTimeout(gantidefault, 2000);
    return;
  }
  
  width2+= 20; //mandi kurang status
  width3-= 5; //tidur namba status
  width4-= 5; //makan kurang status
  width1-= 5; //main  kurang status

  sisa1.style.width = width1 + "px"; //play
  sisa2.style.width = width2 + "px"; //bath
  sisa3.style.width = width3 + "px"; //sleep
  sisa4.style.width = width4 + "px"; //eat

  setTimeout(gantidefault, 2000);

  return;
}

function play(){
  gameRaihBintang();
}


function sound(){
  var buttonSound = document.getElementById("button-act");
  var myButton = document.getElementsByClassName("button-container");
  buttonSound.currentTime = 0;
  buttonSound.play();
}
    
    
/* INI FUNCTION GAME NYARI2 BINTANG!!! PADALAH DI TAMPILANNYA ITU KOTAK HEHE*/
function gameRaihBintang(){

  alert("Gapai Bola dengan menggunakan WASD secepat-cepatnya!\nBola akan menghilang setelah bola berpindah\nTekan OK jika siap untuk main.");
  
  avatar = document.getElementById("avatar");
  avatar.removeChild(avatar.firstElementChild);
  var dataImage = localStorage.getItem("pet");
  tagimg = document.createElement("img");
  tagimg.id= ("petimage");
  switch(dataImage){
    case "1":
      tagimg.src = "/images/rubah/main.png";
      break;
    case "2":
      tagimg.src = "/images/babi/main.png";
      break;
    case "3":
      tagimg.src = "/images/kambing/main.png";
      break;
    case "4":
      tagimg.src = "/images/panda/main.png";
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

  setTimeout(gantidefault,30000);


  var containergame = document.getElementById("container-game");
  containergame.style.display = "block";
  window.scrollBy(0, 650);
  containergame.scrollIntoView({ behavior: "smooth", block: "start", inline:"start"});
  

  var circle = document.getElementById("circle");
  tagimg2 = document.createElement("img");
  tagimg2.id= ("petplayer");
  switch(dataImage){
    case "1":
      tagimg2.src = "/images/rubah/main.png";
      break;
    case "2":
      tagimg2.src = "/images/babi/main.png";
      break;
    case "3":
      tagimg2.src = "/images/kambing/main.png";
      break;
    case "4":
      tagimg2.src = "/images/panda/main.png";
      break;
    default :
    tagimg2.src = "/images/avatar4.png";
    break;

  }
  circle.appendChild(tagimg2);

  petmain = document.getElementById("petplayer").style.width = "200px";
  petmain = document.getElementById("petplayer").style.marginLeft = "-50px";
  petmain = document.getElementById("petplayer").style.marginTop = "-50px";



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
  var timeLeft = 8;

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
          width1+= point * 7;

          if(parseInt(sisa1.style.width) + (point*3) >= 200 ){
            width1 = 200;
            sisa1.style.width = width1 + 'px';
          }
          else{
            sisa1.style.width = width1 + "px";
          }
          width2 -= 2;
          width3 -= 5;
          width4 -= 10;

          sisa2.style.width = width2 + 'px';
          sisa3.style.width = width3 + 'px';
          sisa4.style.width = width4 + 'px';

          while(circle.hasChildNodes()){  
            circle.removeChild(circle.firstElementChild);
          }

          return;
      }

  }, 1000); // 1000 milliseconds = 1 second

function circleMovements(e){
  switch(e.key){
    case 'a':
      if (cl - 1 >= 0){
        circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
        cl = parseInt(cl) - 1;
      }
      break;
    case 'A':
      if (cl - 1 >= 0){
        circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
        cl = parseInt(cl) - 1;
      }
      break;

    case 'd':
      if (cl + 1 <= 11){
        circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
        cl = parseInt(cl) + 1;
      }
      break;
    case 'D':
      if (cl + 1 <= 11){
        circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
        cl = parseInt(cl) + 1;
      }
      break;

    case 'w':
      if (ct - 1 >= 0){
        circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
        ct = parseInt(ct) - 1;
      }
      break;
    case 'W':
      if (ct - 1 >= 0){
        circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
        ct = parseInt(ct) - 1;
      }
      break;

    case 's':
      if (ct + 1 <= 5){
        circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
        ct = parseInt(ct) + 1;
      }
      break; 
    case 'S':
      if (ct + 1 <= 5){
      circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
      ct = parseInt(ct) + 1;
      }
      break; 
  }

  console.log(ct);
  console.log(cl);

  if(cl == sl && ct == st){
      starNewPos();
      point = parseInt(point) + 1;
  }
  updateCoor(); 
  }
  window.addEventListener('keyup', circleMovements);

  function updateCoor(){
      // document.getElementById("posCircle").innerHTML = "CIRCLE = X AXIS:" + parseInt(cl) + " Y AXIS:" + parseInt(ct);
      // document.getElementById("posStar").innerHTML = "STAR = X AXIS:" + parseInt(sl) + " Y AXIS:" + parseInt(st);
      document.getElementById("point").innerHTML = "Point = " + parseInt(point);
  }
}


function gantidefault(){

  avatar = document.getElementById("avatar");
  var dataImage = localStorage.getItem("pet");
  tagimg = document.createElement("img");
  tagimg.id= ("petimage");
  avatar.removeChild(avatar.firstElementChild);
  switch(dataImage){
    case "1":
      tagimg.src = "/images/rubah/default.png";
      break;
    case "2":
      tagimg.src = "/images/babi/default.png";
      break;
    case "3":
      tagimg.src = "/images/kambing/default.png";
      break;
    case "4":
      tagimg.src = "/images/panda/default.png";
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