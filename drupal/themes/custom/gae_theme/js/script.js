console.log('js working');

function generate() {
    window.jsPDF = window.jspdf.jsPDF;
    window.html2canvas = html2canvas;
    var doc = new jsPDF('l', 'mm');
    doc.text("Hello world!", 10, 10);    
    doc.save( "jsPDF.pdf");
    location.reload();
  }
  
  function getAllPDFs() {
    generate();
  }
  
  jQuery('.jsPDF').click(function (e) {
    e.preventDefault();
    getAllPDFs();
  });