function getFirstSelector(selector){
  return document.querySelector(selector)

}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
function increaseRankBy(n){
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML,10) + n).toString()
  }
}

function deepestChild(){
  var parent = document.getElementById('grand-node')
  var previousElement = parent
  var currentElement = parent.querySelector('div')
  while(currentElement !== null){
    previousElement = currentElement
    currentElement = currentElement.querySelector('div')
  }
  return previousElement
}
