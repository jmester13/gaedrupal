console.log('js working');

function generate() {
    window.jsPDF = window.jspdf.jsPDF;
    window.html2canvas = html2canvas;
    var pdf = new jsPDF('l', 'mm');
    
    // Manually Generate
    pdf.text("Hello world!", 10, 10);    
    pdf.save( "jsPDF.pdf");

    // Get Element by id NOT WORKING
    // var elem = document.getElementById('content');
    // pdf.html(elem);
    // pdf.save( "jsPDF.pdf");

    location.reload();
  }
  
  function getAllPDFs() {
    generate();
  }
  
  jQuery('.jsPDF').click(function (e) {
    e.preventDefault();
    getAllPDFs();
  });