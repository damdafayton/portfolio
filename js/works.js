// Portfolio data
const portfolioObj = {
  1: {
    name: 'Dating',
    description: 'Dummy dating website\n email: dummy@dummy.com\n password: damdafayton',
    screenshotUrl: './works/screenshot-dating.jpg',
    tech: ['HTML', 'JS', 'CSS', 'MongoDB', 'Node.js'],
    linkToLive: 'http://dating-clone.herokuapp.com/',
    // linkToSource: 'http://www.github.com/uber',
  },
  2: {
    name: 'Yelp-Camp',
    description: 'Dummy camping website\n username: dummy\n password: damdafayton',
    screenshotUrl: './works/ss-camping.jpg',
    tech: ['HTML', 'JS', 'CSS', 'MongoDB', 'Node.js'],
    linkToLive: 'http://fake-camping.herokuapp.com/',
    linkToSource: 'https://github.com/damdafayton/dummy-camping',
  },
  3: {
    name: 'New Uber',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure assumenda natus officiis, suscipit rerum repudiandae optio magni a aliquid eveniet ea commodi sed mollitia accusamus incidunt similique unde expedita.',
    screenshotUrl: './works/work1.jpg',
    tech: ['Ruby on rails', 'HTML', 'JavaScript', 'CSS'],
    linkToLive: 'http://www.uber.com',
    linkToSource: 'http://www.github.com/uber',
  },
  4: {
    name: 'New Facebook',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure assumenda natus officiis, suscipit rerum repudiandae optio magni a aliquid eveniet ea commodi sed mollitia accusamus incidunt similique unde expedita.',
    screenshotUrl: './works/work2.jpg',
    tech: ['Ruby on rails', 'HTML', 'JavaScript', 'CSS'],
    linkToLive: 'http://www.facebook.com',
    linkToSource: 'http://www.github.com/facebook',
  },
  5: {
    name: 'Another Uber',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure assumenda natus officiis, suscipit rerum repudiandae optio magni a aliquid eveniet ea commodi sed mollitia accusamus incidunt similique unde expedita.',
    screenshotUrl: './works/work1.jpg',
    tech: ['Ruby on rails', 'HTML', 'JavaScript', 'CSS'],
    linkToLive: 'http://www.uber.com',
    linkToSource: 'http://www.github.com/uber',
  },
  6: {
    name: 'Another Facebook',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure assumenda natus officiis, suscipit rerum repudiandae optio magni a aliquid eveniet ea commodi sed mollitia accusamus incidunt similique unde expedita.',
    screenshotUrl: './works/work2.jpg',
    tech: ['Ruby on rails', 'HTML', 'JavaScript', 'CSS'],
    linkToLive: 'http://www.facebook.com',
    linkToSource: 'http://www.github.com/facebook',
  },
};

// CREATE PORTFOLIO CARDS
const cardContainer = document.querySelector('#my-works > .card-container');
// Create cards based on the amount of projects
Object.keys(portfolioObj).forEach(() => {
  cardContainer.innerHTML += (`
    <div class= "card">
    <img alt="screenhost of my work" src="#">
      <h2></h2>
      <ul class="tech"></ul>
      <a class="btn-green" href="#">See Project</a>
    </div>
  `);
});

// FILL PORTFOLIO CARDS
function techListElementCreator(tech) {
  const listItem = document.createElement('li');
  listItem.innerText = tech;
  listItem.className = 'tech-tag';
  return listItem;
}

function ulFiller(ul, portfolioOrder) {
  portfolioObj[portfolioOrder].tech.forEach((newTech) => {
    // console.log('add newTech: ', newTech)
    const listElement = techListElementCreator(newTech);
    ul.appendChild(listElement);
  });
}

const myWorks = document.querySelectorAll('#my-works>.card-container>.card');
const popUp = document.querySelector('#popUp');

function portfolioPopUp(e) {
  e.preventDefault();
  let n = 0;
  // Find the order of clicked item among all the works
  myWorks.forEach((work, i) => {
    if (e.target.parentElement === work) { n = i; }
  });
  n += 1; // to adjust for object order

  // Create link elements
  imgLive = document.createElement('img')
  imgLive.src="./icons/see-live.svg"
  imgSource = document.createElement('img')
  imgSource.src="icons/source.svg"

  aLive = document.createElement('a')
  aLive.classList.add('btn-green', 'me-1')
  aLive.target="_blank"
  aLive.href = portfolioObj[n].linkToLive
  aLive.innerText='See Live'
  aLive.appendChild(imgLive)

  aSource = document.createElement('a')
  aSource.classList.add('btn-green', 'ms-1')
  aSource.target="_blank"
  aSource.href = portfolioObj[n].linkToSource
  aSource.innerText='See Source'
  aSource.appendChild(imgSource)

  const popUpElements = popUp.querySelectorAll('*');
  popUpElements.forEach((element) => {
    switch (element.id || element.tagName) {
      case 'popUpImage':
        element.src = portfolioObj[n].screenshotUrl;
        break;
      case 'popUpDescription':
        element.innerText = portfolioObj[n].description;
        break;
      case 'popUpTech':
        ulFiller(element, n);
        break;
      case 'SPAN':
        element.innerHTML='' // reset whatever element was put in during previous fill
        if (portfolioObj[n].linkToLive){
          element.appendChild(aLive.cloneNode(true))
        }
        if (portfolioObj[n].linkToSource){
          element.appendChild(aSource.cloneNode(true))
        }
        break;
      default:
        break;
    }
  });

  popUp.classList.add('show');
  // body.classList.add('body-blur')
}

myWorks.forEach((work, i) => {
  i += 1;
  const subElements = work.querySelectorAll('*');
  subElements.forEach((element) => {
    switch (element.tagName) {
      case 'IMG':
        element.src = portfolioObj[i].screenshotUrl;
        return 0;
      case 'H2':
        element.innerText = portfolioObj[i].name;
        return 0;
      case 'UL':
        ulFiller(element, i);
        return 0;
      case 'A':
        // Click button for portfolio popup
        element.addEventListener('click', portfolioPopUp);
        return 0;
      default:
        return 0;
    }
  });
});

// PORTFOLIO DETAILS POPUP CLOSE LOGIC
const popUpClose = document.querySelector('#popUp .svgClose');
const body = document.querySelector('body');
const uList = popUpClose.parentElement.querySelector('UL');

function closePopup() {
  popUp.classList.remove('show');
  body.classList.remove('body-blur');
  // Clean the list
  uList.innerHTML = '';
}

popUpClose.addEventListener('click', closePopup);
window.addEventListener('click', (e) => {
  // console.log('hello', e.target)
  if (e.target == popUpClose.parentElement.parentElement) {
    closePopup()
  }
});