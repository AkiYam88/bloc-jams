//var animatePoints = function() {
  // var points = document.getElementsByClassName('point');

/*
var pointsArray = document.getElementsByClassName('point');
var animatePoints = function(points) {
var revealPoint = function(point) {
       point.style.opacity = 1;
       point.style.transform = "scaleX(1) translateY(0)";
       point.style.msTransform = "scaleX(1) translateY(0)";
       point.style.WebkitTransform = "scaleX(1) translateY(0)";
       }
};
*/

var animatePoints = function() {
     var revealPoint = function() {
         // #7
         $(this).css({
             opacity: 1,
             transform: 'scaleX(1) translateY(0)'
         });
     };   
     // #6
     $.each($('.point'), revealPoint);
};
 
var animatePoints = function(points) {
    forEach(points, revealPoint);  

};

 //window.onload = function() {
$(window).load(function() {
     // #1
     if ($(window).height() > 950) {
         animatePoints();
     } 
     // #2
     var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200; 
     // #3
     $(window).scroll(function(event) {
        // #4
     if ($(window).scrollTop() >= scrollDistance) {
             animatePoints();
     }
     });
     
 });
     
    // Automatically animate the points on a tall screen where scrolling can't trigger the animation
    /* if (window.innerHeight > 950) {
         animatePoints(pointsArray); */


    
     
    // alert("The window has loaded!");
    /*var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200; */
    
   

  //  window.addEventListener('scroll', function(event) {
    //console.log(event);
    //console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels");
    
             
    /*if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);   */
    
