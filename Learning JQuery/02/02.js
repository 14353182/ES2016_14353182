// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function(){
	$('#selected-plays > li > ul > li').addClass('special');
	$('td:nth-child(3)').addClass('year');
	$('tr:contains(Tragedy):first').addClass('special');
	$('li a').parent().nextAll().addBack().addClass('afterlink');
	$('a[href$=".pdf"]').parent().parent().addClass('tragedy');
});