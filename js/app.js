/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
///(Query the all sections and store the list in variable.)
const all_section = document.querySelectorAll('section');
console.log(all_section);
const ullist= document.querySelector('ul');
console.log(ullist);
const fragment = document.createDocumentFragment();
console.log();
// build the nav
////Use forEach on the list variable.
all_section.forEach((all_section, index) => {
///Created  <li> for each section in the list to to bulid a navbar list.
var newli = document.createElement('li');
///Created  <a>  for each section in the list to link it with the sections.
var newlink = document.createElement('a');
///Extract the data-nav value from the section and store it in variable.
newlink.textContent = all_section.getAttribute('data-nav');
///Create 1 textNode for each section in the list.
var newtext = document.createTextNode('');
//useing appendChild inside the forEachloop to reflect the navbar into the page.
      fragment.appendChild(newli);
      newli.appendChild(newlink);

});
///After the loop ended append that Fragment to the <ul>.
ullist.appendChild(fragment);
// setAttribute link to li a list
 const links = document.querySelectorAll('li a');
 for (let i = 0; i< links.length; i++) {
   links[i].setAttribute('href',("#"+all_section[i].getAttribute('id')));
 }
// Scroll to anchor ID using scrollTO event
window.onscroll = function(){
  console.log("scroll")
  for (let i=0; i < all_section.length; i++){
    // here i'm tring add class 'active' to section when near top of viewport
    if (all_section[i].getBoundingClientRect().top <=50 && all_section[i].getBoundingClientRect().top >=-500)
    {
      all_section[i].classList.add("active");
      document.querySelectorAll("a")[i].classList.add("active");

    }
    else {
      all_section[i].classList.remove("active");
      document.querySelectorAll("a")[i].classList.remove("active");

    }
  }
}





/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu


// Set sections as active
