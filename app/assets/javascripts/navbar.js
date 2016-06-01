/*global $*/
$(document).ready(setup_navbar);
$(document).on('page:load', setup_navbar);

function setup_navbar() {
  $('#nav-toggle').click(function() {
    $('.link-container ul').slideToggle();
    this.classList.toggle('active');
  });
}