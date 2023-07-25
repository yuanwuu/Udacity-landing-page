// 1. Select an empty element:
const navList = document.querySelector('ul');

// 2. Create a list of text nodes from the navItem array:
const navItem = ['menu','about us','contact us','location'];
const sections = ['section-2','section-3','section-4','section-5']

navItem.forEach((el,index)=> {
  const anchorItem = document.createElement('a');
  const topNavLi = document.createElement('li');
  
    anchorItem.textContent = el;
    anchorItem.setAttribute('href', `#${sections[index]}`);

    navList.appendChild(anchorItem); 
    anchorItem.appendChild(topNavLi); 
  })



//------------------------ .active() & .getBoundingClientRect()  ------------------------
function addActiveListener(sectionId) {
  const section = document.querySelector(`#${sectionId}`);
  const sectionLink = document.querySelector(`a[href="#${sectionId}"]`);

  window.addEventListener('scroll', function() {
    const sectionTop = section.getBoundingClientRect().top;
    const windowInnerHeight = window.innerHeight;

    if (sectionTop >= 0 && sectionTop <= windowInnerHeight) {
      sectionLink.classList.add('active'); // Add the "active" class to the link
    } else {
      sectionLink.classList.remove('active'); // Remove the "active" class if not in view
    }
  });
}

sections.forEach((sectionId) => {
  addActiveListener(sectionId);
});



// ------------------------- scroll -------------------------
const topOfPage = document.documentElement
const scrollDiv = document.querySelector('footer')
const scroll = document.createElement('div')
const topWriting = document.createElement('p')
topWriting.textContent = 'TOP'
scroll.setAttribute('class','scroll-to-top')
scrollDiv.appendChild(scroll)
scroll.appendChild(topWriting)

scroll.addEventListener('click', (evt) =>{
  topOfPage.scrollIntoView({behavior:'smooth'})
})


//------------------------ Hover ------------------------ 

const button = document.querySelector('button');

button.addEventListener('mouseover', function() {
  button.style.backgroundColor = 'white';
  button.style.color = '#955f31';
});

button.addEventListener('mouseout', function() {
  button.style.backgroundColor = '';
  button.style.color = '';
});






//------------------------ capitalized ------------------------ 
const capListItem = document.querySelectorAll('li');

capListItem.forEach(item => {
  item.textContent = item.textContent.toUpperCase();
});





//------------------------ .perventDefault() ------------------------ 
const subscribe = document.querySelector('form')
subscribe.addEventListener('submit', (evt) => {
  evt.preventDefault()
  subscribe.style.display = 'none'

  setTimeout(() => {
    const subMsg = document.createElement('p')
    subMsg.textContent = 'Thank You for subscribing! :)'
    subMsg.style.color = 'white'
    const subContainer = document.querySelector('.contact')
    subContainer.appendChild(subMsg)
  }, 1000);

})






//------------------------ footer ------------------------ 
const ftNav = document.querySelector('.services')
const corpNav = document.querySelector('.company-info')
const ftNavLi = ['about us','contact us','request a sample','terms of service']
const corpNavLi = ['pricing','tracking','request a sample','terms & conditons']
const ftNavMasterLi = [ftNavLi,corpNavLi]

ftNavMasterLi.forEach((listItems) => {
  listItems.forEach((el) => {
    const anchorItem = document.createElement('a');
    anchorItem.textContent = el;
    anchorItem.setAttribute('href', '#');

    const listItem = document.createElement('li');
    listItem.style.fontSize = '12px'

    listItem.appendChild(anchorItem);

    if (listItems === ftNavLi) {
      ftNav.appendChild(listItem); // Append to .services
    } else if (listItems === corpNavLi) {
      corpNav.appendChild(listItem); // Append to .company-info
    }
  });
});


