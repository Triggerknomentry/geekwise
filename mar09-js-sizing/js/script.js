(function(){

var distance = document.querySelector('#meter li:nth-child(1) span'),
    winW = document.querySelector('#meter li:nth-child(2) span'),
    winH = document.querySelector('#meter li:nth-child(3) span'),
    hero = document.querySelector('header'),
    heroH = document.querySelector('#meter li:nth-child(4) span'),
    sec1 = document.querySelector('section:nth-child(1)');
    sec2 = document.querySelector('section:nth-child(2)')
    sec3 = document.querySelector('section:nth-child(3)')

var dist = 0,
    winWidth = window.innerWidth,
    winHeight = window.innerHeight,
    heroHeight = hero.clientHeight,
    sec1Height = 0;


distance.textContent = dist;
winW.textContent = winWidth;
winH.textContent = winHeight;
heroH.textContent = heroHeight;

if(window.innerHeight > sec1.offsetTop){
  sec1.classList.add('visible')
  //sec1.style.backgroundColor - 'blue';
}

window.addEventListener('resize', function(){
  winW.textContent = window.innerWidth;
  winH.textContent = window.innerHeight;
  heroH.textContent = hero.clientHeight;

  winW.textContent = window.innerWidth;
  winH.textContent = window.innerHeight;
  heroH.textContent = hero.clientHeight;

  if(window.innerHeight > sec1.offsetTop){
      sec1.classList.add('visible');
  }else{
    sec1.classList.remove('visible')
  }
});

console.log(sec2);

window.addEventListener('scroll', function(){
  dist = window.scrollY;
  distance.textContent = dist;

  console.log( (sec1.offsetTop - dist) - winHeight );

  if( (sec1.offsetTop - dist) - winHeight <= 0 ){
      sec1.classList.add('colorIn1')
  }else{
    sec1.classList.remove('colorIn1');
  }
  if( (sec2.offsetTop - dist) - winHeight <= 0 ){
    sec2.classList.add('colorIn2');
  }else{
    sec2.classList.remove('colorIn2')
  }
  if( (sec3.offsetTop - dist) - winHeight <= 0 ){
    sec3.classList.add('colorIn3');
  }else{
    sec3.classList.remove('colorIn3')
  }
});
}();
