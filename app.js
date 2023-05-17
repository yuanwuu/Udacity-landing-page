// 1. Create an empty element:
const navList = document.querySelector('ul');


// 2. Create a list of text nodes from the navItem array:
const navItem = ['home', 'coffee menu', 'about us', 'contact us'];


// 3. Set the innerHTML of the ul element with the navItem array:
navList.innerHTML = navItem.map(text => `<li><a href='/'>${text}</a></li>`).join('');

// 4. Append the ul element to the parent container:
const navContainer = document.getElementById('nav-container');
navContainer.appendChild(navList);


// ------------------------- scorll ------------------------- 
const aboutEl = document.querySelector(".about");
aboutEl.scrollIntoView({behavior:'smooth'});

const contactEl = document.querySelector(".contact");
contactEl.scrollIntoView({behavior:'smooth'});

// 1. Create the element to add at the bottom of the page
const bottomElement = document.createElement('div');
bottomElement.innerHTML = '<span>&#8682</span>';

// 2. Append the element to the document body
document.body.appendChild(bottomElement);

// 3. Scroll back to the top of the page
window.scrollTo({ top: 0, behavior: 'smooth' });



//------------------------ OnClick ------------------------ 








//------------------------ capitalized ------------------------ 
const capListItem = document.querySelectorAll('li');

capListItem.forEach(item => {
  item.textContent = item.textContent.toUpperCase();
});