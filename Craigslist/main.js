function initMap() {
    var uluru = {lat: 20.5937, lng: 78.9629};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
    var marker = new google.maps.Marker({
    position: uluru,
    map: map
    });
}
   
    