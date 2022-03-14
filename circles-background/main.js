CSS.registerProperty({
    name: '--circle-color',
    syntax: '<color>',
    initialValue: 'red',
    inherits: false
});

CSS.registerProperty({
    name: '--circle-size',
    syntax: '<length-percentage>',
    initialValue: '100px',
    inherits: false
});

CSS.paintWorklet.addModule('custom-bg.js');