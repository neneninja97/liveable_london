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
/*
const open = document.getElementById('open');
const modalContainer = document.getElementById('modalContainer');
const close = document.getElementById('close')

open.addEventListener('click', () => {
  modalContainer.classList.add('show');
});

close.addEventListener('click' () => {
  modalContainer.classList.remove('show');
});
*/


/*
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
*/

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


$(".profile_selector_button").click(function(){
  replace_content($(this).index())
});


const profiles = [
  {
    name: 'FIRST TIME RENTERS/STUDENTS',
    image_url: './img/ProfilePics/FirstTimeRenters.png',
    map: '',
    cluster_diagram: '',
    cluster1_livability1: '',
    cluster1_livability1_no: '',
    cluster1_livability2: '',
    cluster1_livability2_no: '',
    cluster1_livability3: '',
    cluster1_livability3_no: '',
    cluster2_livability1: '',
    cluster2_livability1_no: '',
    cluster2_livability2: '',
    cluster2_livability2_no: '',
    cluster2_livability3: '',
    cluster2_livability3_no: '',
    cluster3_livability1: '',
    cluster3_livability1_no: '',
    cluster3_livability2: '',
    cluster3_livability2_no: '',
    cluster3_livability3: '',
    cluster3_livability3_no: '',
  },
  {
    name: 'YOUNG FAMILIES',
    image_url: './img/ProfilePics/YoungFamilies.png',
    map: '',
    cluster_diagram: '',
    cluster1_livability1: '',
    cluster1_livability1_no: '',
    cluster1_livability2: '',
    cluster1_livability2_no: '',
    cluster1_livability3: '',
    cluster1_livability3_no: '',
    cluster2_livability1: '',
    cluster2_livability1_no: '',
    cluster2_livability2: '',
    cluster2_livability2_no: '',
    cluster2_livability3: '',
    cluster2_livability3_no: '',
    cluster3_livability1: '',
    cluster3_livability1_no: '',
    cluster3_livability2: '',
    cluster3_livability2_no: '',
    cluster3_livability3: '',
    cluster3_livability3_no: '',
  },
  {
    name: 'OLDER FAMILIES',
    image_url: './img/ProfilePics/OldFamilies.png',
    map: '',
    cluster_diagram: '',
    cluster1_livability1: '',
    cluster1_livability1_no: '',
    cluster1_livability2: '',
    cluster1_livability2_no: '',
    cluster1_livability3: '',
    cluster1_livability3_no: '',
    cluster2_livability1: '',
    cluster2_livability1_no: '',
    cluster2_livability2: '',
    cluster2_livability2_no: '',
    cluster2_livability3: '',
    cluster2_livability3_no: '',
    cluster3_livability1: '',
    cluster3_livability1_no: '',
    cluster3_livability2: '',
    cluster3_livability2_no: '',
    cluster3_livability3: '',
    cluster3_livability3_no: '',
  },
  {
    name: 'PROFESSIONAL COUPLES',
    image_url: './img/ProfilePics/ProfessionalCouples.png',
    map: '',
    cluster_diagram: '',
    cluster1_livability1: '',
    cluster1_livability1_no: '',
    cluster1_livability2: '',
    cluster1_livability2_no: '',
    cluster1_livability3: '',
    cluster1_livability3_no: '',
    cluster2_livability1: '',
    cluster2_livability1_no: '',
    cluster2_livability2: '',
    cluster2_livability2_no: '',
    cluster2_livability3: '',
    cluster2_livability3_no: '',
    cluster3_livability1: '',
    cluster3_livability1_no: '',
    cluster3_livability2: '',
    cluster3_livability2_no: '',
    cluster3_livability3: '',
    cluster3_livability3_no: '',
  },
  {
    name: 'SINGLE INCOME OWNERS',
    image_url: './img/ProfilePics/SingleIncomeOwners.png',
    map: '',
    cluster_diagram: '',
    cluster1_livability1: '',
    cluster1_livability1_no: '',
    cluster1_livability2: '',
    cluster1_livability2_no: '',
    cluster1_livability3: '',
    cluster1_livability3_no: '',
    cluster2_livability1: '',
    cluster2_livability1_no: '',
    cluster2_livability2: '',
    cluster2_livability2_no: '',
    cluster2_livability3: '',
    cluster2_livability3_no: '',
    cluster3_livability1: '',
    cluster3_livability1_no: '',
    cluster3_livability2: '',
    cluster3_livability2_no: '',
    cluster3_livability3: '',
    cluster3_livability3_no: '',
  },
  {
    name: 'EMPTY NESTERS AND RETIREES',
    image_url: './img/ProfilePics/Retirees.png',
    map: '',
    cluster_diagram: '',
    cluster1_livability1: '',
    cluster1_livability1_no: '',
    cluster1_livability2: '',
    cluster1_livability2_no: '',
    cluster1_livability3: '',
    cluster1_livability3_no: '',
    cluster2_livability1: '',
    cluster2_livability1_no: '',
    cluster2_livability2: '',
    cluster2_livability2_no: '',
    cluster2_livability3: '',
    cluster2_livability3_no: '',
    cluster3_livability1: '',
    cluster3_livability1_no: '',
    cluster3_livability2: '',
    cluster3_livability2_no: '',
    cluster3_livability3: '',
    cluster3_livability3_no: '',
  },

]

function replace_content (index){
  const profile = profiles[index]
  console.log(profile)
  $("#profileno").html(profile.name)
  $("#profilepic").attr('src',profile.image_url)
  $("#map_image").attr(profile.map)
  $("#clusterdiagram").attr(profile.cluster_diagram)
  $("#cluster1livability1").attr(profile.cluster1_livability1)
  $("#cluster1livability1no").attr(profile.cluster1_livability1_no)
  $("#cluster1livability2").attr(profile.cluster1_livability2)
  $("#cluster1livability2no").attr(profile.cluster1_livability2_no)
  $("#cluster1livability3").attr(profile.cluster1_livability3)
  $("#cluster1livability3no").attr(profile.cluster1_livability3_no)
  $("#cluster2livability1").attr(profile.cluster2_livability1)
  $("#cluster2livability1no").attr(profile.cluster2_livability1_no)
  $("#cluster2livability2").attr(profile.cluster2_livability2)
  $("#cluster2livability2no").attr(profile.cluster2_livability2_no)
  $("#cluster2livability3").attr(profile.cluster2_livability3)
  $("#cluster2livability3no").attr(profile.cluster2_livability3_no)
  $("#cluster3livability1").attr(profile.cluster3_livability1)
  $("#cluster3livability1no").attr(profile.cluster3_livability1_no)
  $("#cluster3livability2").attr(profile.cluster3_livability2)
  $("#cluster3livability2no").attr(profile.cluster3_livability2_no)
  $("#cluster3livability3").attr(profile.cluster3_livability3)
  $("#cluster3livability3no").attr(profile.cluster3_livability3_no)
}
