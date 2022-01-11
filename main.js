var childElement = document.querySelector('div.isgrP');
function scrolldown() { //div.pbNvD.fPMEg.HYpXt
    setTimeout(
      function()
      {
        childElement.scrollTo(0,document.body.scrollHeight);
        scrolldown();
      }, 10000
    )
    var inputs = document.getElementsByClassName('sqdOP L3NKy y3zKF');
    for ( var i = 0; i<inputs.length; i++){
    inputs[i].click();
    }
}  
scrolldown()