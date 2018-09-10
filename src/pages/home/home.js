var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;
  var oldDirections = [];
  var currentDirections = null;

  function api_route(pStart,pEnd) {
    var myOptions = {
      zoom: 13,      
	  center: new google.maps.LatLng(22.28552,114.15769),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    directionsDisplay = new google.maps.DirectionsRenderer({
        'map': map,
        'preserveViewport': true,
        'draggable': true
    });	
	
    directionsDisplay.setPanel(document.getElementById("directions_panel"));

    google.maps.event.addListener(directionsDisplay, 'directions_changed',
      function() {
        if (currentDirections) {
          oldDirections.push(currentDirections);          
        }
        currentDirections = directionsDisplay.getDirections();
      });
    
	
    calcRoute(pStart,pEnd);
	
  }
  
  function calcRoute(pStart,pEnd) {
    
	var start = pStart;
	var end = pEnd;
    var request = {
        origin:start,		
        destination:end,	
        travelMode: google.maps.DirectionsTravelMode.TRANSIT
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        console.log(response);
        directionsDisplay.setDirections(response);
		//alert(directionsDisplay.getDirections().routes[0].legs[0].start_address);//起點地點：新界沙田中文大學
		//alert(directionsDisplay.getDirections().routes[0].legs[0].end_address);	//觀塘觀塘道418號	
        //alert(directionsDisplay.getDirections().routes[0].legs[0].distance.text);
		//alert(directionsDisplay.getDirections().routes[0].legs[0].duration.text);
		//alert(directionsDisplay.getDirections().routes[0].legs[0].steps[0].instructions);
		//alert(directionsDisplay.getDirections().routes[0].legs[0].steps[0].distance.text);
		
      }
    });
		
  }