var btn = document.getElementById('btn');
var movieArr = [];

btn.addEventListener('click', getMovie;

function getMovie(){
  movieArr.push( prompt('whats your favorite movie') );
  if(movieArr.length >= 3){
    console.log(movieArr);
  }
  if(movieArr.length >= 5){
    // for(var i = 0; i < movieArr.length; ){
      // console.log(movieArr[i]);
      movieArr.forEach(function(el, idx){
        console.log(idx);
      });
  }


}

Array []
