import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


$(window).scroll( function(){
	  $('.hidechild').each( function(i){
		  var bottom_of_object = $(this).offset().top + $(this).outerHeight()/2;
		  var bottom_of_window = $(window).scrollTop() + $(window).height();
		  if( bottom_of_window > bottom_of_object ){
		  	$(this).find('.hideme').each(function(){
		  		$(this).removeClass('hideme');
		  	});
		  }
	  });
	  $('.removeActive').each( function(i){
		  var bottom_of_object2 = $(this).offset().top + 200;
		  var bottom_of_window = $(window).scrollTop() + $(window).height();
		  console.log(bottom_of_object2+"-"+bottom_of_window);
		  if( bottom_of_window > bottom_of_object2 ){
		  	$(this).find('.moveActive').each(function(){
		  		$(this).removeClass('moveActive');
		  	});
		  }	 	  
	  });
	$('.showme-expand-y').each( function(i){
	  var bottom_of_object = $(this).offset().top + $(this).outerHeight();
	  var bottom_of_window = $(window).scrollTop() + $(window).height();
	  if( bottom_of_window > bottom_of_object ){
	  	var $this = $(this);
	  	setTimeout(function(){
	  		$this.removeClass('showme-expand-y');
	  	}, i*180)
	  }	  
	});
	$('.hideme.hidediv').each( function(i){
	  var bottom_of_object = $(this).offset().top + $(this).outerHeight()/4;
	  var bottom_of_window = $(window).scrollTop() + $(window).height();
	  if( bottom_of_window > bottom_of_object ){
	  	var $this = $(this);
	  	setTimeout(function(){
	  		$this.removeClass('hideme');
	  	}, i*50)
	  }	  
	});

	$('.hideme-expand').each( function(i){
	  var bottom_of_object = $(this).offset().top + $(this).outerHeight();
	  var bottom_of_window = $(window).scrollTop() + $(window).height();
	  if( bottom_of_window > bottom_of_object ){
	  	var $this = $(this);
	  	$this.removeClass('hideme-expand');
	  }	  
	});
	$('.hideme-more').each( function(i){
	  var bottom_of_object = $(this).offset().top;
	  var bottom_of_window = $(window).scrollTop() + $(window).height();
	  if( bottom_of_window > bottom_of_object ){
	  	var $this = $(this);
	  	$this.removeClass('hideme-more');
	  }	  
	});
	// $('section').each( function(i){
	//   var bottom_of_object = $(this).offset().top + $(this).outerHeight() + 3*$(window).height()/4;
	//   var bottom_of_window = $(window).scrollTop() + $(window).height();
	//   var $this = $(this);
	//   if( bottom_of_window > bottom_of_object ){
	//   	$this.css('opacity', '.6');
	//   }	  
	//   else {
	//   	$this.css('opacity', '1');
	//   }
	// });
});