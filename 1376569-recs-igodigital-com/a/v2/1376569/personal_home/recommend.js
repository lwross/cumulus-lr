function display_personal_home(zone, id) {
  if (id === "Banner_Area_1") {
  zone.innerHTML = "  <div class='igo_boxbody'><div class='igo_banner last_rec'><a href='http://nova.collect.igodigital.com/redirect/v3QkFoSklnSGZleUp1SWpvaVRHOWpZWFJwYjI1VGFYcGxJaXdpZFNJNklqRitNU0lzSW5JaU9qRXlNREF4TENKd2NDSTZNQ3dpY25BaU9qRXNJbWtpT2lJd00yWmtPREZrTW1Nd01qVTNaV0kwWkdZeVlXVmlOVFl3T1dRMVptRmhOQ0lzSW5jaU9pSlFaWEp6YjI1aGJFaHZiV1VpTENKc0lqb2lhSFIwY0RvdkwzZDNkeTVqZFcxMWJIVnpabWx1YzJWeWRpNWpiMjB2YjNCbGJpMWhiaTFoWTJOdmRXNTBQM052ZFhKalpUMXBaMjlrYVdkcGRHRnNJaXdpZENJNklrSmhibTVsY2w5QmNtVmhYekVpTENKd2JpSTZJbkJsY25OdmJtRnNYMmh2YldVaWZRWTZCa1ZVLS00OWY3OTUwZjUxYmEzMDVkZWRhMDA2MWEyZDhlMjk3MTE5YTk3MTVkMDJhMDRlNzljMThmNzUwODg5NjAwZWJk'><img class='igo_banner_image' src='http://cumulusfinserv.com/images/banners/hero-personal-default.jpg' alt='' /></a><span class='igo_banner_abstract'></span><div class='igo_banner_banner_id'><span class='igo_banner_banner_id_value'>1</span></div></div>  </div>";
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
  var pageZone = document.getElementById('Banner_Area_1');
  if ( undefined != pageZone) {
    display_personal_home(pageZone, 'Banner_Area_1');
  }
}

callREC();
