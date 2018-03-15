import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

$(window).scroll( function(){

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
	$('.hideme-more').each( function(i){
	  var bottom_of_object = $(this).offset().top;
	  var bottom_of_window = $(window).scrollTop() + $(window).height();
	  if( bottom_of_window > bottom_of_object ){
	  	var $this = $(this);
	  	$this.removeClass('hideme-more');
	  }	  
	});
	$('.hideme').each( function(i){
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
	$('section').each( function(i){
	  var bottom_of_object = $(this).offset().top + $(this).outerHeight() + 3*$(window).height()/4;
	  var bottom_of_window = $(window).scrollTop() + $(window).height();
	  var h = $(this).css('height');
	  if( bottom_of_window > bottom_of_object ){
	  	var $this = $(this);
	  	$this.css('opacity', '.6');
	  }	  
	  else {
	  	var $this = $(this);
	  	$this.css('opacity', '1');
	  }
	});
});