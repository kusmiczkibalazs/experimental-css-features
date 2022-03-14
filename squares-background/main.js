CSS.registerProperty({
    name: '--square-color',
    syntax: '<color>',
    initialValue: 'red',
    inherits: false
});

CSS.registerProperty({
    name: '--square-spacing',
    syntax: '<length-percentage>',
    initialValue: '100px',
    inherits: false
});

CSS.registerProperty({
    name: '--square-size',
    syntax: '<length-percentage>',
    initialValue: '100px',
    inherits: false
});

CSS.paintWorklet.addModule('custom-bg.js');
