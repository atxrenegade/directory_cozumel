var mainAdContent1 = {
  content: 'Lorem ipsum blah, blah, blah1',
  url: '/static/html/manifesto-coffee.html'
}

var mainAdContent2 = {
  content: 'Lorem ipsum blah, blah, blah2',
  url: '/static/html/manifesto-coffee.html'
}

var mainAdContent3 = {
  content: 'Lorem ipsum blah, blah, blah3',
  url: '/static/html/manifesto-coffee.html'
}

var mainAdContent4 = {
  content: 'Lorem ipsum blah, blah, blah4',
  url: '/static/html/manifesto-coffee.html'
}

var mainAdContent5 = {
  content: 'Lorem ipsum blah, blah, blah5',
  url: '/static/html/manifesto-coffee.html'
}

var catAd1 = {
  content: 'Best Tour Guide in Mérida',
  cat: 'tour guides'
}

function mainAdCount(){
  var adRatio = 5;

}

function changeMainAdContent(){
  var adNum = mainAdCount();
  var mainAdEl = document.getElementById('main-ad');
  mainAdEl.innerText = mainAdContent1;
}

function changeCatAd(){
  var adNum = catAdCounts();
  var catAdEl = document.getElementById('');
  catAdEl.innerText(catAdContent1);
  catAdEl.style.display = 'block';
}

export { mainAdCount, changeMainAdContent, changeCatAd, catAdCounts};