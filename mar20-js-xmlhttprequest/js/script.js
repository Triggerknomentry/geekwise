var req = new XMLHttpRequest();

var car = {
    make: 'jeep',
    model: 'wrangler',
    color: 'black',
    year: 2014,
    doors: 2
};

for(key in car){
  // console.log(opts);
  // console.log( car[key] );
  console.log( key + ' : ' + car[key] );
}

// console.log('OPENED', req.readyState);
//
// req.onprogress = function(){
//   console.log('LOADING', req.readyState);
// };
//
// var main = document.querySelector('main'),
//   img, h1;
//
// var req = new XMLHttpRequest();
//
// req.open('GET', ROOT_URL+ 'users/Triggerknomentry?client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET);
// req.onload = function(){
//   // img = document.createElement('img');
//   // h1 = document.createElement('h1');
//   var githubObj = JSON.parse(req.responseText);
//   console.log(githubObj);
//   // img.src = githubObj.avatar_url;
//   // main.appendChild(img, h1);
// }
// req.send(null);
