const portfolioObj = {
    1: {
        name: 'Uber',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure assumenda natus officiis, suscipit rerum repudiandae optio magni a aliquid eveniet ea commodi sed mollitia accusamus incidunt similique unde expedita.',
        screenshotUrl: './works/work1.jpg',
        tech: ['Ruby on rails', 'HTML', 'JavaScript', 'CSS'],
        linkToLive: 'www.uber.com',
        linkToSource: 'github.com/uber'
    },
    2: {
        name: 'Facebook',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure assumenda natus officiis, suscipit rerum repudiandae optio magni a aliquid eveniet ea commodi sed mollitia accusamus incidunt similique unde expedita.',
        screenshotUrl: './works/work2.jpg',
        tech: ['Ruby on rails', 'HTML', 'JavaScript', 'CSS'],
        linkToLive: 'www.facebook.com',
        linkToSource: 'github.com/facebook'
    },
    3: {
        name: 'New Uber',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure assumenda natus officiis, suscipit rerum repudiandae optio magni a aliquid eveniet ea commodi sed mollitia accusamus incidunt similique unde expedita.',
        screenshotUrl: './works/work1.jpg',
        tech: ['Ruby on rails', 'HTML', 'JavaScript', 'CSS'],
        linkToLive: 'www.uber.com',
        linkToSource: 'github.com/uber'
    },
    4: {
        name: 'New Facebook',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure assumenda natus officiis, suscipit rerum repudiandae optio magni a aliquid eveniet ea commodi sed mollitia accusamus incidunt similique unde expedita.',
        screenshotUrl: './works/work2.jpg',
        tech: ['Ruby on rails', 'HTML', 'JavaScript', 'CSS'],
        linkToLive: 'www.facebook.com',
        linkToSource: 'github.com/facebook'
    },
    5: {
        name: 'Another Uber',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure assumenda natus officiis, suscipit rerum repudiandae optio magni a aliquid eveniet ea commodi sed mollitia accusamus incidunt similique unde expedita.',
        screenshotUrl: './works/work1.jpg',
        tech: ['Ruby on rails', 'HTML', 'JavaScript', 'CSS'],
        linkToLive: 'www.uber.com',
        linkToSource: 'github.com/uber'
    },
    6: {
        name: 'Another Facebook',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iure assumenda natus officiis, suscipit rerum repudiandae optio magni a aliquid eveniet ea commodi sed mollitia accusamus incidunt similique unde expedita.',
        screenshotUrl: './works/work2.jpg',
        tech: ['Ruby on rails', 'HTML', 'JavaScript', 'CSS'],
        linkToLive: 'www.facebook.com',
        linkToSource: 'github.com/facebook'
    },
}

// Navbar
const nav = document.querySelector('nav > ul');
const burger = document.querySelector('#burger-container');
const closeBtn = document.querySelector('#svgClose');

function slideLeft() {
    nav.classList.toggle('slide-left');
}

burger.addEventListener('click', slideLeft);
closeBtn.addEventListener('click', slideLeft);

const navLinks = document.querySelectorAll('nav>ul>li>a');
navLinks.forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('slide-left');
}));

// My works
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
                portfolioObj[i].tech.forEach(newTech => {
                    console.log('add newTech: ', newTech)
                    const listItem = document.createElement('li')
                    listItem.innerText = newTech
                    listItem.className = 'tech-tag'
                    element.appendChild(listItem)
                    console.log(listItem)
                })
                return 0
        }
    })
})