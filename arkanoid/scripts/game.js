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
        return span;
    }());

    const scoreElement = (function () {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = 'Score: ';
        const span = document.createElement('span');
        wrapper.appendChild(span);
        panelElement.appendChild(wrapper);
        return span;
    }());

    const paddleElement = document.createElement('div');
    paddleElement.classList.add('paddle');
    const ballElement = document.createElement('div');
    ballElement.classList.add('ball');

    arenaElement.appendChild(paddleElement);
    arenaElement.appendChild(ballElement);
    gameElement.appendChild(panelElement);
    gameElement.appendChild(arenaElement);
    document.body.appendChild(gameElement);
}())
