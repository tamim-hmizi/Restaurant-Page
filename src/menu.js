import './style.css'
import bee from './bee.png'
import honeycomb from './honeycomb.png'
import BearyTea from './BearyTea.jpeg'
import ToastandJam from './ToastandJam.jpg'
import BagelandLox from './BagelandLox.jpeg'

const menu = () => {
    const bee1 = new Image()
    bee1.src = bee
    const bee2 = new Image()
    bee2.src = bee
    const comb = new Image()
    comb.src = honeycomb
    const beary = new Image()
    beary.src = BearyTea
    const toast = new Image()
    toast.src=ToastandJam
    const bagel = new Image()
    bagel.src=BagelandLox
    const element = document.createElement('div')
    element.classList.add('blocks-container')
    element.innerHTML = `<div class='outer-block'><div class='inner-block bee-nest'><img src='${bee1.src}' class='bee1' alt='bee image'/><h1 class='text-center'>Menu</h1><img src='${bee2.src}' class='bee2' alt='bee image'/></div></div><div class='outer-block comb-nest'><img src='${comb.src}' class='comb' alt='honeycomb image'/><div class='inner-block text-center'><h2>Beverages</h2></div></div><div class='outer-block'><div class='inner-block img-container inner-block-img'><h3>Beary Tea</h3><p class='text-center'>A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.</p><h4>$3</h4><img src='${beary.src}' alt='Beary Tea Image' class='product-image'/></div></div><div class='outer-block comb-nest'><img src='${comb.src}' class='comb' alt='honeycomb image'/><div class='inner-block text-center'><h2>Sides</h2></div></div><div class='outer-block'><div class='inner-block img-container inner-block-img'><h3>Toast and Jam</h3><p class='text-center'>A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.</p><h4>$1</h4><img src='${toast.src}' alt='Beary Tea Image' class='product-image'/></div></div><div class='outer-block comb-nest'><img src='${comb.src}' class='comb' alt='honeycomb image'/><div class='inner-block text-center'><h2>Main Dishes</h2></div></div><div class='outer-block'><div class='inner-block img-container inner-block-img'><h3>Bagel and Lox</h3><p class='text-center'>Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.</p><h4>$8</h4><img src='${bagel.src}' alt='Beary Tea Image' class='product-image'/></div></div>`
    return element
}

export default menu
