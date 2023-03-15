import './style.css'
import bee from './bee.png'
import honeycomb from './honeycomb.png'

const home = () => {
    const bee1 = new Image()
    bee1.src = bee
    const bee2 = new Image()
    bee2.src = bee
    const comb = new Image()
    comb.src = honeycomb
    const element = document.createElement('div')
    element.classList.add('blocks-container')
    element.innerHTML = `<div class='outer-block'><div class='inner-block bee-nest'><img src='${bee1.src}' class='bee1' alt='bee image'/><h1 class='text-center'>Beary's Breakfast Bar</h1><img src='${bee2.src}' class='bee2' alt='bee image'/></div></div><div class='outer-block comb-nest'><img src='${comb.src}' class='comb' alt='honeycomb image'/><div class='inner-block'><p class='text-center' style='padding-top:20px'>Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.</p><h3>Goldilocks</h3></div></div><div class='outer-block'><div class='inner-block'><h2>Hours</h2><p class='text-center'>Sunday: 8am - 8pm<br/>Monday: 6am - 6pm<br/>Tuesday: 6am - 6pm<br/>Wednesday: 6am - 6pm<br/>Thursday: 6am - 10pm<br/>Friday: 6am - 10pm<br/>Saturday: 8am - 10pm</p></div></div><div class='outer-block'><div class='inner-block'><h2>Location</h2><p class='text-center'>123 Forest Drive, Forestville, Maine</p></div></div>`

    return element
}

export default home
