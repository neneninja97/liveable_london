
Window.onscroll = function() {
  if (window.pageYOffset > 0) {
 var opac = (window.pageYOffset / nystories);
    console.log(opac);
  document.body.style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/times-square-perspective.jpg) no-repeat";
  }
}

let profSelection = undefined;
document.querySelector("#prof_first_time_renters").addEventListener("click", function(){
    profSelection = "First time renters";
});
document.querySelector("#prof_young_families").addEventListener("click", function(){
    profSelection = "Young families";
});
document.querySelector("#prof_older_families").addEventListener("click", function(){
    profSelection = "Older families";
});
document.querySelector("#prof_professional_couples").addEventListener("click", function(){
    profSelection = "Professional couples";
});
document.querySelector("#prof_single_income").addEventListener("click", function(){
    profSelection = "Single income owners";
});
document.querySelector("#prof_retirees").addEventListener("click", function(){
    profSelection = "Retirees";
});
