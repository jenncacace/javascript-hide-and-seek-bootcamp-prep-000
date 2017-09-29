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
var parent = document.getElementById('grand-node')
function deepestChild(){
var child = parent.querySelector('div')
 while(child !== null){
   child = parent.child.querySelector('div')
 }
return child.innerHTML
}
