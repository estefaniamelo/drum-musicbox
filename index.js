window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
    "#60D394",
    "#D36060",
    "#C060D3",
    "#D3D160",
    "#606BD3",
    "#60C2D3"
    ];

    // lets get going with the sound here 
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
        });
    });
});

