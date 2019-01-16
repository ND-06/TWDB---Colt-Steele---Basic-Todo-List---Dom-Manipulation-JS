//firstLi = document.querySelector('li'); // returns the first LI
var lis = document.querySelectorAll('li');

/*
firstLi.addEventListener('mouseover', function() { // mouseover is an event which fire on when the mouse is over the element
  firstLi.style.color = "green";
});

firstLi.addEventListener('mouseout', function() { // mouseout is an event which fire on when the mouse is not over the element
  firstLi.style.color = "black";
}); */

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("mouseover", function() {
    this.style.color = 'green';
  });
  lis[i].addEventListener("mouseout", function() {
    this.style.color = 'black';
  });
  lis[i].addEventListener("click", function() {
    this.classList.toggle('done');
  });  
}


