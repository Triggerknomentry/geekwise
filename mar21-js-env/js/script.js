(function(){
  getReq();
}());
function getReq(url, callback){
    var req = new XMLHttpRequest();
    req.open('GET', '/env.json');
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
          init(JSON.parse(req.responseText));
        }else{
          console.log('error', req.statusText);
        }
    };
    req.send(null);
}

function init(data){
  // var env = JSON.parse(data);
  const ROOT_URL = 'https://api.github.com/'
  const CLIENT_ID = data.github.CLIENT_ID;
  const CLIENT_SECRET = data.github.CLIENT_SECRET;

  var req = new XMLHttpRequest();
  req.open('GET', ROOT_URL+'users/Triggerknomentry?client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET);
  req.onload = function(){
    if(req.readyState === 4 && req.status === 200){
      githubObj( JSON.parse(req.responseText) );
    }else{
      console.log('error', req.statusText);
    }
};
req.send(null);
}

function githubObj(data){
  var main = document.querySelector('main'),
      img = document.createElement('img'),
      h1 = document.createElement('h1');

  img.src = data.avatar_url;
  h1.textContent = data.name;
  main.append(h1, img);
}
