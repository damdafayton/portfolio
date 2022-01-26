// Portfolio data
const portfolioObj = {
    1: {
        name: 'Uber',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure assumenda natus officiis, suscipit rerum repudiandae optio magni a aliquid eveniet ea commodi sed mollitia accusamus incidunt similique unde expedita.',
        screenshotUrl: './works/work1.jpg',
        tech: ['Ruby on rails', 'HTML', 'JavaScript', 'CSS'],
        linkToLive: 'http://www.uber.com',
        linkToSource: 'http://www.github.com/uber'
    },
    2: {
        name: 'Facebook',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure assumenda natus officiis, suscipit rerum repudiandae optio magni a aliquid eveniet ea commodi sed mollitia accusamus incidunt similique unde expedita.',
        screenshotUrl: './works/work2.jpg',
        tech: ['Ruby on rails', 'HTML', 'JavaScript', 'CSS'],
        linkToLive: 'http://www.facebook.com',
        linkToSource: 'http://www.github.com/facebook'
    },
    3: {
        name: 'New Uber',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure assumenda natus officiis, suscipit rerum repudiandae optio magni a aliquid eveniet ea commodi sed mollitia accusamus incidunt similique unde expedita.',
        screenshotUrl: './works/work1.jpg',
        tech: ['Ruby on rails', 'HTML', 'JavaScript', 'CSS'],
        linkToLive: 'http://www.uber.com',
        linkToSource: 'http://www.github.com/uber'
    },
    4: {
        name: 'New Facebook',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure assumenda natus officiis, suscipit rerum repudiandae optio magni a aliquid eveniet ea commodi sed mollitia accusamus incidunt similique unde expedita.',
        screenshotUrl: './works/work2.jpg',
        tech: ['Ruby on rails', 'HTML', 'JavaScript', 'CSS'],
        linkToLive: 'http://www.facebook.com',
        linkToSource: 'http://www.github.com/facebook'
    },
    5: {
        name: 'Another Uber',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure assumenda natus officiis, suscipit rerum repudiandae optio magni a aliquid eveniet ea commodi sed mollitia accusamus incidunt similique unde expedita.',
        screenshotUrl: './works/work1.jpg',
        tech: ['Ruby on rails', 'HTML', 'JavaScript', 'CSS'],
        linkToLive: 'http://www.uber.com',
        linkToSource: 'http://www.github.com/uber'
    },
    6: {
        name: 'Another Facebook',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure assumenda natus officiis, suscipit rerum repudiandae optio magni a aliquid eveniet ea commodi sed mollitia accusamus incidunt similique unde expedita.',
        screenshotUrl: './works/work2.jpg',
        tech: ['Ruby on rails', 'HTML', 'JavaScript', 'CSS'],
        linkToLive: 'http://www.facebook.com',
        linkToSource: 'http://www.github.com/facebook'
    },
}

// NAVBAR SECTION
const nav = document.querySelector('nav > ul');
const burger = document.querySelector('#burger-container');
const closeBtn = document.querySelector('.svgClose');

function toggleMenu() {
    nav.classList.toggle('slide-left');
    closeBtn.classList.toggle('opacity-0')
}

burger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll('nav>ul>li>a');
navLinks.forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('slide-left');
    closeBtn.classList.add('opacity-0')
}));

// WORKS SECTION
const myWorks = document.querySelectorAll('#my-works>.card-container>.card')
myWorks.forEach((work, i) => {
    i = i + 1
    const subElements = work.querySelectorAll('*')
    subElements.forEach((element, ii) => {
        switch (element.tagName) {
            case 'IMG':
                element.src = portfolioObj[i].screenshotUrl
                return 0
            case 'H2':
                element.innerText = portfolioObj[i].name
                return 0
            case 'UL':
                ulFiller(element, i)
                return 0
            case 'A':
                // Click button for portfolio popup
                element.addEventListener('click', portfolioPopUp)
        }
    })
})


// POPUP SECTION
const popUp = document.querySelector('#popUp')
const popUpClose = document.querySelector('#popUp .svgClose')
const body = document.querySelector('body')

// Pop-up close button
popUpClose.addEventListener('click', (e) => {
    popUp.classList.remove('show')
    body.classList.remove('body-blur')
    // Clean the list
    const uList = e.target.parentElement.querySelector('UL')
    uList.innerHTML = ''
})

// Portfolio pop-up handler
function portfolioPopUp(e) {
    e.preventDefault()
    let n = 0;
    // Find the order of clicked item among all the works
    myWorks.forEach((work, i) => {
        e.target.parentElement == work ? n = i : null
    })
    n++ // to adjust for object order

    const popUpElements = popUp.querySelectorAll('*')
    popUpElements.forEach(element => {
        switch (element.id) {
            case 'popUpImage':
                element.src = portfolioObj[n].screenshotUrl
                break;
            case 'popUpDescription':
                element.innerText = portfolioObj[n].description
                break;
            case 'popUpTech':
                ulFiller(element, n)
                break;
            case 'popUpTitle':
                element.firstElementChild.innerText = portfolioObj[n].name
                element.lastElementChild.firstElementChild.href = portfolioObj[n].linkToLive
                element.lastElementChild.lastElementChild.href = portfolioObj[n].linkToSource
        }
    })

    popUp.classList.add('show')
    // body.classList.add('body-blur')
}

function techListElementCreator(tech) {
    const listItem = document.createElement('li')
    listItem.innerText = tech
    listItem.className = 'tech-tag'
    return listItem
}

function ulFiller(ul, portfolioOrder) {
    portfolioObj[portfolioOrder].tech.forEach(newTech => {
        // console.log('add newTech: ', newTech)
        const listElement = techListElementCreator(newTech)
        ul.appendChild(listElement)
    })
}