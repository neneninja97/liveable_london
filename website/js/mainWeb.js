var checkpoint= document.querySelector("p").offsetTop;
console.log("checkpoint is: " + checkpoint);
window.addEventListener("scroll", function() {
  const currentScroll = window.pageYOffset;
  var opac;
  if (currentScroll < checkpoint) {
   opac = 1 - currentScroll / checkpoint;
      console.log(opac);
  } else {
    opac = 0;
  }
    document.querySelector("#coverPage").style.opacity = opac;
  });

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
// Using JQuery for the last bit just for fun:
$("#prof_retirees").click(function(){
  profSelection = "Retirees";
});
