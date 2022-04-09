window.onscroll = function() {
  if (window.pageYOffset > 0) {
 var opac = (window.pageYOffset / nystories);
    console.log(opac);
  document.body.style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/times-square-perspective.jpg) no-repeat";
  }
}

let profSelection = undefined;

document.querySelector("#prof_first_time_renters").addEventListener("click", function(){
    console.log("clicked");
    profSelection = "First time renters";
    console.log(profSelection);
});
