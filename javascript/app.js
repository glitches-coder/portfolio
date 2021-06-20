






// function getScrollPercent() {
//     var h = document.documentElement,
//         b = document.body,
//         st = 'scrollTop',
//         sh = 'scrollHeight';
//     return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
// }

// let tl = anime.timeline({
//     easing: 'spring',
//     autoplay: false
// });

// tl

//     .add({
//         targets: '.heading--primary',

//         scale: [0, 1],
//         opacity: [0, 1],
//         delay: anime.stagger(270, { direction: 'reverse' })
//     })

//     .add({
//         targets: '.im',
//         scale: [0, 1],
//         opacity: [0, 1],
//         delay: anime.stagger(270, { direction: 'reverse' })
//     })

//     .add({
//         targets: '.inf',
//         offset: '-=1000',
//         translateX: [250, 10],
//         opacity: [0, 1],
//         delay: anime.stagger(270, { direction: 'reverse' })
//     })

//     .add({
//         targets: '.ln',
//         offset: '-=1000',
//         translateX: [0, 20],
//         opacity: [0, 1],
//         delay: anime.stagger(600, { direction: 'normal' })
//     });


let timelin = anime.timeline({
    easing: 'spring',
    opacity: 0
});

timelin


    .add({
        // targets: '.animator-txt',
        // offset: '-=1500',
        // translateX: [-450, 10],
        // opacity: [0, 1],
        // delay: anime.stagger(400, { direction: 'reverse' })

        targets: '.animator-txt',
        easing: 'spring',
        scale: [0, 1],
        opacity: [0, 1],
        delay: 700,
    })

    .add({
        targets: '.animator-txt2',
        translateY: [-150, 0],
        opacity: [0, 1],
        delay: anime.stagger(70, { direction: 'reverse' })
    })

    .add({
        targets: '.animator-txt3',
        translateY: [-100, 0],
        opacity: [0, 1],
        delay: anime.stagger(50, { direction: 'reverse' })
    })

    .add({
        targets: '.mimg',
        easing: 'spring',
        scale: [0, 1],
        opacity: [0, 1],
        delay: 700,

    })

    .add({
        targets: '.mtb',
        translateY: [-150, 0],
        opacity: [0, 1],
        delay: anime.stagger(500, { direction: 'reverse' })

    })







let tl = anime.timeline({
    opacity: 0,
    easing: 'easeOutExpo',

})

tl
    .add({
        targets: '.b',
        opacity: 1,
        offset: '-=1000',
        translateY: [-300, 0],
        delay: anime.stagger(200, { direction: 'normal' })
    })

    .add({
        targets: '.c',
        opacity: 1,
        offset: '-=1000',
        translateX: [-300, 0],
        easing: 'spring'
    })