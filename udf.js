(function($) {
  'use strict'; 

  console.log('INIZIO STA');

//const doc = new jsPDF();
window.jsPDF = window.jspdf.jsPDF;
var doc = new jsPDF();
//const doc = new jspdf.jsPDF();

        doc.text("Hello world!", 10, 10);
        doc.save("a4.pdf");
		
  console.log('FINE STA');
}(jQuery));
