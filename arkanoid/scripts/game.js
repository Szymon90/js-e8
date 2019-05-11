(function arkanoid() {
    let score = 0;
    let lifes = 3;

    const gameElement = document.createElement('div');

    gameElement.id = 'arkanoid';
    gameElement.setAttribute('role', 'application');



    document.body.appendChild(gameElement);
}())
