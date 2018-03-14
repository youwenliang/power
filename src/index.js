import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

$(window).scroll( function(){
	$('.hideme').each( function(i){
	  var bottom_of_object = $(this).offset().top + $(this).outerHeight()/2;
	  var bottom_of_window = $(window).scrollTop() + $(window).height();
	  if( bottom_of_window > bottom_of_object ){
	  	var $this = $(this);
	  	setTimeout(function(){
	  		$this.removeClass('hideme');
	  	}, i*50)
	  }	  
	});
});