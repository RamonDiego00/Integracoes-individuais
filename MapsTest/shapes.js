var map;
function initMap() {
    const MANCHESTER = {lat: 53.453632, lng: -2.256136};
    const LONDRES = {lat: 51.488667, lng: -0.100473};
    const LIVERPOOL = {lat: 53.435380, lng: -2.978513};

    const RECTANGLE_BOUNDS={
        north: 46.680082213381574,
        south: -9.559701515624965,
        east: 55.838712726148,
        west: 9.358755515625035
    }
    var mapOptions = {
            center:LONDRES,
            zoom:6,
    }
    map = new google.maps.Map(document.getElementById('map'),mapOptions) 

    //Polyline
    const poly = new google.maps.Polyline({
        path: [LIVERPOOL, MANCHESTER],
        strokeColor:'#FF0000',
        strokeWeight:2,
        strokeOpacity:1
    })

    poly.setMap(map)

    setTimeout(() => {
        poly.getPath().push(new google.maps.LatLng(LONDRES.lat, LONDRES.lng))
        circle.setEditable(false)
    }, 2000)
    //Circle
    const circle = new google.maps.Circle({
        strokeColor:'#FF0000',
        strokeWeight:2,
        strokeOpacity:1,
        fillColor:'#FF0000',
        fillOpacity:'.1',
        center: LONDRES,
        radius: 10000,
        map:map,
        // editable: true,
        // draggable: true,
    })

    //Rectangle
    const rectangle = new google.maps.Rectangle({
        strokeColor:'#FF0000',
        strokeWeight:2,
        strokeOpacity:1,
        fillColor:'#FF0000',
        fillOpacity:'.1',
        bounds: RECTANGLE_BOUNDS,
        editable: true,
        map:map,
    })

}