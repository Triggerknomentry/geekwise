(function(){
  getReq('https://www.udacity.com/public-api/v0/courses', init);
}());


function getReq(url, cb){
  var req = new XMLHttpRequest();
  req.open('GET', url);
  req.onload = function(){
    if(req.readyState === 4 && req.status === 200){
      cb( JSON.parse(req.responseText) );
    }else{
      console.log('err', req.statusText);
    }
  }
  req.send(null);
}

function init(data){
  console.log(data);
  var main = document.querySelector('main'),
      ul = document.createElement('ul'), expected_learning,
      homepage, image, required_knowledge;

  main.appendChild(ul);

  data.degrees.forEach(function(e, i){
    li = document.createElement('li'),
    expected_learning = document.createElement('p'),
    homepage = document.createElement('a'),
    image = document.createElement('img'),
    required_knowledge = document.createElement('p');

    expected_learning.textContent = e.expected_learning;
    homepage.href = e.homepage;
    homepage.textContent = 'Learn More...';
    homepage.target = '_blank';
    if(e, image){
      image.src = e.image;
    }else{
      image.src = 'http:placehold.it/1000x600';
    }
    required_knowledge.innerhtml = e.required_knowledge;

    li.append(image, required_knowledge, expected_learning, homepage);
    ul.appendChild(li);
  });
}
