import './style.css'
import bee from './bee.png'
import bear from './bear.jpeg'

const contact = () => {
    const bee1 = new Image()
    bee1.src = bee
    const bee2 = new Image()
    bee2.src = bee
    const MamaBear = new Image()
    MamaBear.src = bear
    const element = document.createElement('div')
    element.classList.add('blocks-container')
    element.innerHTML = `<div class='outer-block'><div class='inner-block bee-nest'><img src='${bee1.src}' class='bee1' alt='bee image'/><h1 class='text-center'>Contact Us</h1><img src='${bee2.src}' class='bee2' alt='bee image'/></div></div><div class='outer-block'><div class='inner-block img-container inner-block-img'><h3>Mama Bear</h3><p>Chef<br/>
    555-555-5554<br/>
    totallyRealEmail@notFake.com<br/></p><img src='${MamaBear.src}' alt='Beary Tea Image' class='product-image-contact'/></div></div>`
    return element
}

export default contact
