(function arkanoid() {
    let score = 0;
    let lifes = 3;

    let paddleLeft;

    let ballLeft;
    let ballTop;

    const gameElement = document.createElement('div');
    gameElement.id = 'arkanoid';
    gameElement.setAttribute('role', 'application');
    // gameElement.setAttribute('class', 'game');
    gameElement.classList.add('game');

    const panelElement = document.createElement('div');
    panelElement.classList.add('panel');

    const arenaElement = document.createElement('div');
    arenaElement.classList.add('arena');

    const lifesElement = pannelElement({text: 'Lifes: ', value: lifes});

    const scoreElement = pannelElement({text: 'Score: ', value: score});

    const paddleElement = document.createElement('div');
    paddleElement.classList.add('paddle');
    const ballElement = document.createElement('div');
    ballElement.classList.add('ball');
    const bricksElement = document.createElement('div');
    bricksElement.classList.add('bricks');

    bricksElement.innerHTML = '<div class="brick"></div>'.repeat(30);

    let deltaX = 1;
    let deltaY = -1;

    function ballStart() {
        setInterval(function () {
            const {
                offsetWidth: arenaWidth,
                offsetHeight: arenaHeight
            } = arenaElement;
    /*         const arenaWidth = arenaElement.offsetWidth;
            const arenaHeight = arenaElement.offsetHeight; */

            if (ballElement.offsetLeft >= arenaWidth - ballElement.offsetWidth) {
                deltaX = -1;
            }

            if (ballElement.offsetLeft === 0) {
                deltaX = 1;
            }

            if (ballElement.offsetTop >= arenaHeight - ballElement.offsetWidth) {
                deltaY = -1;
            }

            if (ballElement.offsetTop >= paddleElement.offsetTop - ballElement.offsetWidth) {
                if (ballLeft > paddleLeft && ballLeft < paddleLeft + paddleElement.offsetWidth) {
                    deltaY = -1;
                }
            }

            if (ballElement.offsetTop === 0) {
                deltaY = 1;
            }

            ballTop = ballElement.offsetTop + deltaY;
            ballLeft = ballElement.offsetLeft + deltaX;

            ballElement.style.top = `${ballTop}px`;
            ballElement.style.left = `${ballLeft}px`;
        }, 10);
    }

    function setBallStartPosition() {
        const {
            offsetLeft: paddleLeft,
            offsetWidth: paddleWidth,
            offsetTop: paddleTop
        } = paddleElement;
        const {offsetWidth: ballWidth} = ballElement;

        ballElement.style.left = `${paddleLeft + (paddleWidth / 2) - (ballWidth / 2)}px`;
        ballElement.style.top = `${paddleTop - ballWidth}px`;
    }

    const onMouseMove = function (e) {
        const {left: arenaLeft, right: arenaRight} = arenaElement.getBoundingClientRect();

        if (e.pageX > arenaLeft && e.pageX < arenaRight - paddleElement.offsetWidth) {
            paddleLeft = e.pageX - arenaLeft;
        }

        paddleElement.style.left = `${paddleLeft}px`;
    };

    paddleElement.addEventListener(
        'mousedown',
        function (e) {
            e.stopPropagation();
            e.preventDefault();

            ballStart();

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

    arenaElement.appendChild(bricksElement);
    arenaElement.appendChild(paddleElement);
    arenaElement.appendChild(ballElement);
    gameElement.appendChild(panelElement);
    gameElement.appendChild(arenaElement);
    document.body.appendChild(gameElement);

    setBallStartPosition();

    function pannelElement({text, value}) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = text;
        const span = document.createElement('span');
        wrapper.appendChild(span);
        panelElement.appendChild(wrapper);
        span.innerHTML = value;
        return span;
    }
}());

