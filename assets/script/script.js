/* for (let i = 0; i < 10; i++) {
    var elementParent = document.getElementById('allArticles');
    var elementClone = document.getElementById('boxOriginal').cloneNode(true);
    let clone = elementParent.appendChild(elementClone);
    clone.className = "box"; 
    clone.removeAttribute('id');
} */

function Random() {
    let rand = Math.random() * (100 - 1) + 1;
    return rand;
}

(function RandPos() {
    const circleRand = document.getElementsByClassName('circleRandom');

    for (let index = 0; index < circleRand.length; index++) {
        circleRand[index].style.setProperty('--top', `${Random()}` + "%");
        circleRand[index].style.setProperty('--left', `${Random()}` + "%");
        circleRand[index].style.setProperty('--right', `${Random()}` + "%");
        circleRand[index].style.setProperty('--bottom', `${Random()}` + "%");
        circleRand[index].style.setProperty('--height', `${Random()}` + "px");
        circleRand[index].style.setProperty('--length', `${Random()}` + "px");
    }
    const squareRand = document.getElementsByClassName('square');

    for (let index = 0; index < squareRand.length; index++) {
        squareRand[index].style.setProperty('--top', `${Random()}` + "%");
        squareRand[index].style.setProperty('--left', `${Random()}` + "%");
        squareRand[index].style.setProperty('--right', `${Random()}` + "%");
        squareRand[index].style.setProperty('--bottom', `${Random()}` + "%");
    }

    const LsquareRand = document.getElementsByClassName('Lsquare');

    for (let index = 0; index < LsquareRand.length; index++) {
        LsquareRand[index].style.setProperty('--top', `${Random()}` + "%");
        LsquareRand[index].style.setProperty('--left', `${Random()}` + "%");
        LsquareRand[index].style.setProperty('--right', `${Random()}` + "%");
        LsquareRand[index].style.setProperty('--bottom', `${Random()}` + "%");
    }

    const line = document.getElementsByClassName('line');

    for (let index = 0; index < line.length; index++) {
        line[index].style.setProperty('--top', `${Random()}` + "%");
        line[index].style.setProperty('--left', `${Random()}` + "%");
        line[index].style.setProperty('--right', `${Random()}` + "%");
        line[index].style.setProperty('--bottom', `${Random()}` + "%");
    }
    var pause = document.getElementById('pause');
    var play = document.getElementById('play');

    pause.addEventListener('click', function () {
        for (let index = 0; index < line.length; index++) {
            line[index].style.animationPlayState = 'paused';
        }
        for (let index = 0; index < LsquareRand.length; index++) {
            LsquareRand[index].style.animationPlayState = 'paused';
        }
        for (let index = 0; index < squareRand.length; index++) {
            squareRand[index].style.animationPlayState = 'paused';
        }
        for (let index = 0; index < circleRand.length; index++) {
            circleRand[index].style.animationPlayState = 'paused';
        }
        pause.id = "play";
    });

    play.addEventListener('click', function () {
        for (let index = 0; index < line.length; index++) {
            line[index].style.animationPlayState = 'running';
        }
        for (let index = 0; index < LsquareRand.length; index++) {
            LsquareRand[index].style.animationPlayState = 'running';
        }
        for (let index = 0; index < squareRand.length; index++) {
            squareRand[index].style.animationPlayState = 'running';
        }
        for (let index = 0; index < circleRand.length; index++) {
            circleRand[index].style.animationPlayState = 'running';
        }
        pause.id = "pause";
    });
    

    setTimeout(RandPos, 5000)
})();