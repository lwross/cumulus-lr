function display_productcontent(zone, id) {
  if (id === "igdrec_1") {
  zone.innerHTML = "";
}

}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

function callREC() {
  var pageZone = document.getElementById('igdrec_1');
  if ( undefined != pageZone) {
    display_productcontent(pageZone, 'igdrec_1');
  }
}

callREC();
