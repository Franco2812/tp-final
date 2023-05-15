let map;

function initMap() {
  const mapOptions = {
    zoom: 8,
    center: { lat: -34.6273241, lng: -68.4076121 },
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const marker = new google.maps.Marker({

    position: { lat: -34.6273241, lng: -68.4076121 },
    map: map,
  });

  const infowindow = new google.maps.InfoWindow({
    content: "<p>Marker Location:" + marker.getPosition() + "</p>",
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.open(map, marker);
  });
}

window.initMap = initMap;