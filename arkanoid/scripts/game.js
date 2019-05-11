(function arkanoid() {
    let score = 0;
    let lifes = 3;

    const gameElement = document.createElement('div');
    gameElement.id = 'arkanoid';
    gameElement.setAttribute('role', 'application');
    // gameElement.setAttribute('class', 'game');
    gameElement.classList.add('game');

    const panelElement = document.createElement('div');
    panelElement.classList.add('panel');

    const arenaElement = document.createElement('div');
    arenaElement.classList.add('arena');

    const lifesElement = (function () {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = 'Lifes: ';
        const span = document.createElement('span');
        wrapper.appendChild(span);
        panelElement.appendChild(wrapper);
        span.innerHTML = lifes;
        return span;
    }());

    const scoreElement = (function () {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = 'Score: ';
        const span = document.createElement('span');
        wrapper.appendChild(span);
        panelElement.appendChild(wrapper);
        span.innerHTML = score;
        return span;
    }());

    const paddleElement = document.createElement('div');
    paddleElement.classList.add('paddle');
    const ballElement = document.createElement('div');
    ballElement.classList.add('ball');

    let deltaX = 1;
    let deltaY = 1;
    setInterval(function () {

        const arenaWidth = arenaElement.offsetWidth;
        const arenaHeight = arenaElement.offsetHeight;

        if (ballElement.offsetLeft >= arenaWidth - ballElement.offsetWidth) {
            deltaX = -1;
        }

        if (ballElement.offsetLeft === 0) {
            deltaX = 1;
        }

        if (ballElement.offsetTop >= arenaHeight - ballElement.offsetWidth) {
            deltaY = -1;
        }

        if (ballElement.offsetTop === 0) {
            deltaY = 1;
        }

        ballElement.style.top = `${ballElement.offsetTop + deltaY}px`;
        ballElement.style.left = `${ballElement.offsetLeft + deltaX}px`;
    }, 10);

    const onMouseMove = function () {

    };

    paddleElement.addEventListener(
        'mousedown',
        function (e) {
            console.log(e);
            document.addEventListener(
                'mousemove',
                onMouseMove,
                false
            );
        },
        false
    );

    paddleElement.addEventListener(
        'mouseup',
        function () {
            document.removeEventListener(
                'mousemove',
                onMouseMove,
                false
            );
        },
        false
    );

    arenaElement.appendChild(paddleElement);
    arenaElement.appendChild(ballElement);
    gameElement.appendChild(panelElement);
    gameElement.appendChild(arenaElement);
    document.body.appendChild(gameElement);
}())
