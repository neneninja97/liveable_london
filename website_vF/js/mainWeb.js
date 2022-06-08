var liveableLondon = document.querySelector("p").offsetTop;
window.onscroll = function() {
  if (window.pageYOffset > 0) {
 var opac = (window.pageYOffset / liveableLondon);
    console.log(opac);
  document.body.style.background = "linear-gradient(rgba(234,229,221, " + opac + "), rgba(234,229,221, " + opac + ")), url(./img/coverimage.jpg) no-repeat";
  }
}

$('#open_housing').click(function() {
    var display = $('#modalContainerHse').css('display');
    console.log("clicked");
    $('#modalContainerHse').show();
});

$('#close_housing').click(function() {
    console.log("clicked");
    $('#modalContainerHse').hide();
});

$('#open_environment').click(function() {
    var display = $('#modalContainerEvt').css('display');
    console.log("clicked");
    $('#modalContainerEvt').show();
});

$('#close_environment').click(function() {
    console.log("clicked");
    $('#modalContainerEvt').hide();
});

$('#open_neighbourhood').click(function() {
    var display = $('#modalContainerNbd').css('display');
    console.log("clicked");
    $('#modalContainerNbd').show();
});

$('#close_neighbourhood').click(function() {
    console.log("clicked");
    $('#modalContainerNbd').hide();
});

$('#open_safety').click(function() {
    var display = $('#modalContainerSfe').css('display');
    console.log("clicked");
    $('#modalContainerSfe').show();
});

$('#close_safety').click(function() {
    console.log("clicked");
    $('#modalContainerSfe').hide();
});

$('#open_education').click(function() {
    var display = $('#modalContainerEdu').css('display');
    console.log("clicked");
    $('#modalContainerEdu').show();
});

$('#close_education').click(function() {
    console.log("clicked");
    $('#modalContainerEdu').hide();
});

$('#open_transport').click(function() {
    var display = $('#modalContainerTpt').css('display');
    console.log("clicked");
    $('#modalContainerTpt').show();
});

$('#close_transport').click(function() {
    console.log("clicked");
    $('#modalContainerTpt').hide();
});

let profSelection;
document.querySelector("#prof_first_time_renters").addEventListener("click", function(){
    profSelection = "First time renters";
    console.log(profSelection);
});
document.querySelector("#prof_young_families").addEventListener("click", function(){
    profSelection = "Young families";
    console.log(profSelection);
});
document.querySelector("#prof_older_families").addEventListener("click", function(){
    profSelection = "Older families";
    console.log(profSelection);
});
document.querySelector("#prof_professional_couples").addEventListener("click", function(){
    profSelection = "Professional couples";
    console.log(profSelection);
});
document.querySelector("#prof_single_income").addEventListener("click", function(){
    profSelection = "Single income owners";
    console.log(profSelection);
});
// Using JQuery for the last bit just for fun:
$("#prof_retirees").click(function(){
  profSelection = "Retirees";
  console.log(profSelection);
});



// Ward Characteristics Map

mapboxgl.accessToken = 'pk.eyJ1IjoiaGlkZGVuaHVza3kiLCJhIjoiY2wydWFwZXRsMDA3ZTNibGpmY3JmMWtzbiJ9.l9fIw7n5Pj3G9ONwdSOV-Q';
    const WCmap = new mapboxgl.Map({
        container: 'WCmap', // container ID
        style: 'mapbox://styles/hiddenhusky/cl31twjq0003614l4x4ozcesq', // style URL
        center: [-0.23, 51.49], // starting position [lng, lat]
        zoom: 9.3 // starting zoom
    });

    // Adding the searchbar
    WCmap.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );

    // Adding fullscreen option
    WCmap.addControl(new mapboxgl.FullscreenControl());

    // Add zoom and rotation controls to the map
    WCmap.addControl(new mapboxgl.NavigationControl());

    // Add interactive hover
    WCmap.on('mousemove', (event) => {
      const wardWC = WCmap.queryRenderedFeatures(event.point, {
        layers: ['london-ward-clusters-8zl430']
      });

      let education = Math.ceil(wardWC[0].properties.gcse_2013_perc);
      let transport = Math.ceil(wardWC[0].properties.ptal_2013_perc);
      let greenaccess = Math.ceil(wardWC[0].properties.nature_access_2013_perc);
      let housing = Math.ceil(wardWC[0].properties.median_house_2014_log_perc);
      let pollution = Math.ceil(wardWC[0].properties.pollution_2008_perc);
      let burglaries = Math.ceil(wardWC[0].properties.burglariesper1000residents_perc);

      document.getElementById('WCpd').innerHTML = wardWC.length
        ? `<h3>${wardWC[0].properties.NAME}</h3>
        <p> <strong> Borough: <em>${wardWC[0].properties.BOROUGH}</strong> </em></p>
        <div id="chartContainer_2" style="height: 300px; width: 100%;"></div>
        `
        : `<p>Hover over a ward for its characteristic!</p>`;

        var chart = new CanvasJS.Chart("chartContainer_2", {
        	animationEnabled: true,

        	title:{
        		text:"Ward characteristics"
        	},
        	axisX:{
        		interval: 1
        	},
        	axisY2:{
        		interlacedColor: "rgba(1,77,101,.2)",
        		gridColor: "rgba(1,77,101,.1)",
        		title: "Percentile of each metric (0: worst, 100: best)"
        	},
        	data: [{
        		type: "bar",
        		name: "ward characteristics",
        		axisYType: "secondary",
        		color: "#014D65",
        		dataPoints: [
            	{ y: burglaries, label: "Safety" },
              { y: pollution, label: "Pollution" },
              { y: housing, label: "Housing" },
        			{ y: greenaccess, label: "Open Space" },
        			{ y: transport, label: "Transport" },
        			{ y: education, label: "Education" }
        		]
        	}]
        });
        chart.render();
    });


// Cluster Maps

mapboxgl.accessToken = 'pk.eyJ1IjoiaGlkZGVuaHVza3kiLCJhIjoiY2wydWFwZXRsMDA3ZTNibGpmY3JmMWtzbiJ9.l9fIw7n5Pj3G9ONwdSOV-Q';
    const C1map = new mapboxgl.Map({
        container: 'C1map', // container ID
        style: 'mapbox://styles/hiddenhusky/cl33hq5dy007r14pfgmi4s7ef', // style URL
        center: [-0.12, 51.49], // starting position [lng, lat]
        zoom: 9.3 // starting zoom
    });

    // Add zoom and rotation controls to the map
    C1map.addControl(new mapboxgl.NavigationControl());

mapboxgl.accessToken = 'pk.eyJ1IjoiaGlkZGVuaHVza3kiLCJhIjoiY2wydWFwZXRsMDA3ZTNibGpmY3JmMWtzbiJ9.l9fIw7n5Pj3G9ONwdSOV-Q';
    const C2map = new mapboxgl.Map({
        container: 'C2map', // container ID
        style: 'mapbox://styles/hiddenhusky/cl33l2lju007u14mm6br2vkhn', // style URL
        center: [-0.11, 51.435], // starting position [lng, lat]
        zoom: 8.6 // starting zoom
    });

    // Add zoom and rotation controls to the map
    C2map.addControl(new mapboxgl.NavigationControl());

mapboxgl.accessToken = 'pk.eyJ1IjoiaGlkZGVuaHVza3kiLCJhIjoiY2wydWFwZXRsMDA3ZTNibGpmY3JmMWtzbiJ9.l9fIw7n5Pj3G9ONwdSOV-Q';
    const C3map = new mapboxgl.Map({
        container: 'C3map', // container ID
        style: 'mapbox://styles/hiddenhusky/cl33l861c001914p6ogzuyfc4', // style URL
        center: [-0.0, 51.49], // starting position [lng, lat]
        zoom: 8.5 // starting zoom
    });

    // Add zoom and rotation controls to the map
    C3map.addControl(new mapboxgl.NavigationControl());

mapboxgl.accessToken = 'pk.eyJ1IjoiaGlkZGVuaHVza3kiLCJhIjoiY2wydWFwZXRsMDA3ZTNibGpmY3JmMWtzbiJ9.l9fIw7n5Pj3G9ONwdSOV-Q';
    const C4map = new mapboxgl.Map({
        container: 'C4map', // container ID
        style: 'mapbox://styles/hiddenhusky/cl33ldrw4000l15nymzlt6xs5', // style URL
        center: [-0, 51.5], // starting position [lng, lat]
        zoom: 8.7 // starting zoom
    });

    // Add zoom and rotation controls to the map
    C4map.addControl(new mapboxgl.NavigationControl());

mapboxgl.accessToken = 'pk.eyJ1IjoiaGlkZGVuaHVza3kiLCJhIjoiY2wydWFwZXRsMDA3ZTNibGpmY3JmMWtzbiJ9.l9fIw7n5Pj3G9ONwdSOV-Q';
    const C5map = new mapboxgl.Map({
        container: 'C5map', // container ID
        style: 'mapbox://styles/hiddenhusky/cl33lmaxp004y15qffdxvveds', // style URL
        center: [-0.13, 51.5], // starting position [lng, lat]
        zoom: 10.5 // starting zoom
    });

    // Add zoom and rotation controls to the map
    C5map.addControl(new mapboxgl.NavigationControl());

mapboxgl.accessToken = 'pk.eyJ1IjoiaGlkZGVuaHVza3kiLCJhIjoiY2wydWFwZXRsMDA3ZTNibGpmY3JmMWtzbiJ9.l9fIw7n5Pj3G9ONwdSOV-Q';
    const C6map = new mapboxgl.Map({
        container: 'C6map', // container ID
        style: 'mapbox://styles/hiddenhusky/cl33lq894001t14t7z492a4g8', // style URL
        center: [-0.05, 51.49], // starting position [lng, lat]
        zoom: 8.5 // starting zoom
    });

    // Add zoom and rotation controls to the map
    C6map.addControl(new mapboxgl.NavigationControl());

// Mapbox code

mapboxgl.accessToken = 'pk.eyJ1IjoiaGlkZGVuaHVza3kiLCJhIjoiY2wydWFwZXRsMDA3ZTNibGpmY3JmMWtzbiJ9.l9fIw7n5Pj3G9ONwdSOV-Q';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/hiddenhusky/cl333g5ft000x14msyakkdsaf', // style URL
        center: [-0.23, 51.49], // starting position [lng, lat]
        zoom: 9.5 // starting zoom
    });
//----------------------


// Adding the searchbar
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

// Adding fullscreen option
map.addControl(new mapboxgl.FullscreenControl());

// Add zoom and rotation controls to the map
map.addControl(new mapboxgl.NavigationControl());

// Add interactive hover
map.on('mousemove', (event) => {
  const ward = map.queryRenderedFeatures(event.point, {
    layers: ['london-ward-clusters-8zl430']
  });

  let education = Math.ceil(ward[0].properties.gcse_2013_perc);
  let transport = Math.ceil(ward[0].properties.ptal_2013_perc);
  let greenaccess = Math.ceil(ward[0].properties.nature_access_2013_perc);
  let housing = Math.ceil(ward[0].properties.median_house_2014_log_perc);
  let pollution = Math.ceil(ward[0].properties.pollution_2008_perc);
  let burglaries = Math.ceil(ward[0].properties.burglariesper1000residents_perc);

  document.getElementById('pd').innerHTML = ward.length
    ? `<h4> Ward: ${ward[0].properties.NAME}</h4>
    <p> <strong> Borough: ${ward[0].properties.BOROUGH}</strong> </p>
    <p> <strong> Cluster: ${ward[0].properties.labels}</strong> </p>
    <div id="chartContainer" style="height: 300px; width: 100%;"></div>
    `
    : `<p>Hover over a London ward!</p>`;

    var chart_2 = new CanvasJS.Chart("chartContainer", {
    	animationEnabled: true,

//    	title:{
//    		text:"Ward characteristics"
//    	},
    	axisX:{
    		interval: 1
    	},
    	axisY2:{
    		interlacedColor: "rgba(1,77,101,.2)",
    		gridColor: "rgba(1,77,101,.1)",
    		title: "Percentile of each metric (0: worst, 100: best)",
        maximum: 100
    	},
    	data: [{
    		type: "bar",
    		name: "ward characteristics",
    		axisYType: "secondary",
    		color: "#014D65",
    		dataPoints: [
        	{ y: burglaries, label: "Safety" },
          { y: pollution, label: "Pollution" },
          { y: housing, label: "Housing" },
    			{ y: greenaccess, label: "Open Space" },
    			{ y: transport, label: "Transport" },
    			{ y: education, label: "Education" }
    		]
    	}]
    });
    chart_2.render();
});
