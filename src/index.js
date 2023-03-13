import './style.css'
import dripping from './dripping.png'
import home from './home'
import contact from './contact'
import menu from './menu'

const body = document.querySelector('body')
const content = document.createElement('div')
content.setAttribute('id', 'content')
body.appendChild(content)

const navbar = document.createElement('nav')
navbar.innerHTML = '<ul><li>Home</li><li>Menu</li><li>Contact</li></ul>'
content.appendChild(navbar)

const div = document.createElement('div')
div.classList.add('flex-div')
div.appendChild(home())
content.appendChild(div)

const li = document.querySelectorAll('li')
li.forEach((item) => {
    const image = new Image()
    image.src = dripping
    item.appendChild(image)
    item.addEventListener('click', () => {
        li.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove('active')
            }
            if (item.innerText === 'Home') {
                div.removeChild(div.lastChild)
                div.appendChild(home())
            }
            if (item.innerText === 'Contact') {
                div.removeChild(div.lastChild)
                div.appendChild(contact())
            }
            if (item.innerText === 'Menu') {
                div.removeChild(div.lastChild)
                div.appendChild(menu())
            }
        })
        item.classList.toggle('active')
    })
})
