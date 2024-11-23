
function setStylesForARText() {
    const ARtexts = document.getElementsByClassName('AR-text');

    console.log(ARtexts);

    for (let i = 0; i < ARtexts.length; i++) {
        console.log(ARtexts[i]);

        ARtexts[i].style.setProperty(
            '--width',
            ARtexts[i].offsetWidth + 'px'
        );
        ARtexts[i].style.setProperty(
            '--height',
            ARtexts[i].offsetHeight + 'px'
        );
    }
}

setStylesForARText();