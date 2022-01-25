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

// Navbar
const nav = document.querySelector('nav > ul');
const burger = document.querySelector('#burger-container');
const closeBtn = document.querySelector('.svgClose');

function toggleMenu() {
    nav.classList.toggle('slide-left');
    closeBtn.classList.toggle('d-none')
}

burger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll('nav>ul>li>a');
navLinks.forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('slide-left');
    closeBtn.classList.add('d-none')
}));

// Fill my works
const myWorks = document.querySelectorAll('#my-works>.card-container>.card')
myWorks.forEach((work, i) => {
    i = i + 1
    console.log('NEW CARD LOOP = ', i)
    const subElements = work.querySelectorAll('*')
    subElements.forEach((element, ii) => {
        console.log('card loop for elements >> ', i, element.tagName)
        console.log(element)
        switch (element.tagName) {
            case 'IMG':
                element.src = portfolioObj[i].screenshotUrl
                return 0
            case 'H1':
                console.log('h1 caught')
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

const popUp = document.querySelector('#popUp')
const popUpClose = document.querySelector('#popUp .svgClose')

// Pop-up close button
popUpClose.addEventListener('click', (e) => {
    popUp.classList.remove('show')
    // Clean the list
    const uList = e.target.parentElement.querySelector('UL')
    uList.innerHTML = ''
})

// Portfolio pop-up handler
function portfolioPopUp(e) {
    e.preventDefault()
    let n = 0;
    // Find the order of clicked item among all the works
    myWorks.forEach((work, i) => e.target.parentElement == work ? n = i : null)
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