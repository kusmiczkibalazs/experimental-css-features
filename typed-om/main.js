const container = document.querySelector('.container');

// CSSOM
/* let fontSize = getComputedStyle(container).fontSize.slice(0,-2);
console.log(fontSize, typeof fontSize); // string
fontSize = parseInt(fontSize) + 10;
container.style.fontSize = fontSize + 'px'; */


// Typed OM
let fontSize = container.computedStyleMap().get('font-size');
console.log(fontSize, typeof fontSize); // object
fontSize.value += 10;
container.attributeStyleMap.set('font-size', fontSize);
