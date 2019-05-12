(function arkanoid() {
    const brickScore = [1, 3, 5, 100, 0];

    let score = 0;
    let lifes = 3;

    let paddleLeft;

    let ballLeft;
    let ballTop;

    let ballAnimUid = null;

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
    lifesElement.classList.add('textdata');

    const scoreElement = pannelElement({text: 'Score: ', value: score});
    scoreElement.classList.add('textdata');

    const paddleElement = document.createElement('div');
    paddleElement.classList.add('paddle');
    const ballElement = document.createElement('div');
    ballElement.classList.add('ball');
    const bricksElement = document.createElement('div');
    bricksElement.classList.add('bricks');

    function getIndex(length) {
        return Math.floor(Math.random() * length);
    }

    bricksElement.innerHTML = Array.from(
        new Array(30),
        () => {
            const score = brickScore[getIndex(brickScore.length)];
            return `<div class="brick${score === 0 ? ' metal-brick' : ''}"${score ? ` data-score="${score}"` : ''}></div>`
        }
    ).join('');

    let deltaX = 1;
    let deltaY = -1;

    function ballStart() {
        return setInterval(function () {
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

            /* if (ballElement.offsetTop >= arenaHeight - ballElement.offsetWidth) {
                deltaY = -1;
            } */

            if (ballElement.offsetTop >= paddleElement.offsetTop - ballElement.offsetWidth) {
                if (ballLeft > paddleLeft && ballLeft < paddleLeft + paddleElement.offsetWidth) {
                    deltaY = -1;
                }
            }

            if (ballElement.offsetTop === 0) {
                deltaY = 1;
            }

            if (ballElement.offsetTop > arenaHeight - ballElement.offsetWidth) {
                lifes -= 1;
                reset();

                if (lifes === 0) {
                    setTimeout(function () {
                        alert('GAME OVER');
                    }, 100);
                }
            }

            ballTop = ballElement.offsetTop + deltaY;
            ballLeft = ballElement.offsetLeft + deltaX;

            const {
                left: arenaLeft,
                top: arenaTop
            } = arenaElement.getBoundingClientRect();

            const brick = document.elementFromPoint(
                ballLeft + arenaLeft,
                ballTop + arenaTop
            );// fn(ballLeft, ballTop);

            if (brick && brick.classList.contains('brick')) {
                deltaY *= -1;

                if (!brick.classList.contains('metal-brick')) {
                    score += Number(brick.dataset.score);
                    scoreElement.dataset.value = score;
                    brick.classList.add('hide');
                }
            }

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

            if (!ballAnimUid) {
                ballAnimUid = ballStart();
            }

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

    function reset() {
        lifesElement.dataset.value  = lifes;
        setBallStartPosition();
        clearInterval(ballAnimUid);
        ballAnimUid = null;
    }

    function pannelElement({text, value}) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = text;
        const span = document.createElement('span');
        wrapper.appendChild(span);
        panelElement.appendChild(wrapper);
        span.dataset.value = value;
        return span;
    }

    function fn(ballLeft, ballTop) {
        let output = null;
        Array.from(bricksElement.children).some(
            brickElement => {
                const {
                    offsetHeight,
                    offsetLeft,
                    offsetTop,
                    offsetWidth
                } = brickElement;
                const right = offsetLeft + offsetWidth;
                const bottom = offsetTop + offsetHeight;

                if (ballLeft >= offsetLeft && ballLeft <= right) {
                    if (ballTop >= offsetTop && ballTop <= bottom) {
                        output = brickElement;
                        return true;
                    }
                }
                return false;
            }
        );

        return output;
    }
}());

