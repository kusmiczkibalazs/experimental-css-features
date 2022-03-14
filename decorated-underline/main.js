CSS.registerProperty({
    name: '--square-color',
    syntax: '<color>',
    initialValue: 'red',
    inherits: false
});

CSS.registerProperty({
    name: '--square-spacing',
    syntax: '<length>',
    initialValue: '10px',
    inherits: false
});

CSS.paintWorklet.addModule('underline.js');