$(document).ready(function () {
  'use strict';
  // Hide collapsable content after clkik
  $(function() {
      $('.nav a').on('click', function(){
          if($('.navbar-toggle').css('display') !='none'){
              $(".navbar-toggle").trigger( "click" );
          }
      });
  });

  // Fluen scrooling to anchor


  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700);
      return false;
        }
      }
    });
  });

  //My work section

  //AJAX

  $('#logodesign').click(function () {
    $('#loader').show();
    $.ajax({
      url: 'logodesign.html',
      context: document.body,
      success: function (response) {
        $('#myworkdata').html(response);
        $('#loader').hide();
      }
    });
  });

   $('#id-guide').click(function () {
    $('#loader').show();
    $.ajax({
      url: 'id-guide.html',
      context: document.body,
      success: function (response) {
        $('#myworkdata').html(response);
        $('#loader').hide();
      }
    });
  });

   $('#infographics').click(function () {
    $('#loader').show();
    $.ajax({
      url: 'infographics.html',
      context: document.body,
      success: function (response) {
        $('#myworkdata').html(response);
        $('#loader').hide();
      }
    });
  });

   $('#webdesign').click(function () {
    $('#loader').show();
    $.ajax({
      url: 'webdesign.html',
      context: document.body,
      success: function (response) {
        $('#myworkdata').html(response);
        $('#loader').hide();
      }
    });
  });

   $('#b-cards').click(function () {
    $('#loader').show();
    $.ajax({
      url: 'b-cards.html',
      context: document.body,
      success: function (response) {
        $('#myworkdata').html(response);
        $('#loader').hide();
      }
    });
  });

  $('#flyers').click(function () {
   $('#loader').show();
   $.ajax({
     url: 'flyers.html',
     context: document.body,
     success: function (response) {
       $('#myworkdata').html(response);
       $('#loader').hide();
     }
   });
 });

 $('#screen').click(function () {
  $('#loader').show();
  $.ajax({
    url: 'screen.html',
    context: document.body,
    success: function (response) {
      $('#myworkdata').html(response);
      $('#loader').hide();
    }
  });
});
  $('#webdesign').click();


  // NAVBAR BEHAVIOR

    var menu = $('.navbar');
    var navbarpos = $('#mainnavbar').offset().top;
    var arrow = $('#arrow')
        $(window).scroll(function () {
          var scroll = $(this).scrollTop();
          if (scroll >= navbarpos) {
            menu.removeClass('up');
            menu.addClass('navbar-fixed-top');
            arrow.addClass('rotate');
          }
          else {
            menu.removeClass('navbar-fixed-top');
            menu.addClass('up');
            arrow.removeClass('rotate');
          }
        });

  // BOOTSTRAP MODAL BEHAVIOR

  //
  $(".modal-fullscreen").on('shown.bs.modal', function () {
    setTimeout( function() {
      $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
      }, 0);
    });
  $(".modal-fullscreen").on('hidden.bs.modal', function () {
      $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  });

  // Back button kills modal
  //
  //  $("#modal_1").on("shown.bs.modal", function()  { // any time a modal is shown
  //   var urlReplace = "#" + $(this).attr('id'); // make the hash the id of the modal shown
  //   history.pushState(null, null, urlReplace); // push state that hash into the url
  // });
  //
  // // If a pushstate has previously happened and the back button is clicked, hide any modals.
  // $(window).on('popstate', function() {
  //   $(".modal").modal('hide');
  // });

  // GOOGLE MAPS IN MODAL

  $("#mapModal").on("shown.bs.modal", function () {
    google.maps.event.trigger(map, "resize");

  });

  //Email- PHP contact form


  	$("#contact-submit").on('click',function() {

  		var $contact_form = $('#contact-form');

  		var fields = $contact_form.serialize();

  		$.ajax({
  			type: "POST",
  			url: "php/contact.php",
  			data: fields,
  			dataType: 'json',
  			success: function(response) {

  				if(response.status){
  					$('#contact-form input').val('');
  					$('#contact-form textarea').val('');
  				}

  				$('#response').empty().html(response.html);
  			}
  		});
  		return false;
  	});


//WOW js

new WOW().init();
// $('#fullpage').fullpage();

});
