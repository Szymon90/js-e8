const template = `
    <div id="arkanoid" class="game" role="application" tabindex="-1">
        <div class="panel">
            <div class="lifes">
                Lifes:
                <span ref="lifes">3</span>
            </div>
            <div class="score">
                Score:
                <span ref="score">0</span>
            </div>
        </div>
        <div class="arena" ref="arena">
            <div class="bricks" ref="bricks"></div>
            <div class="paddle" ref="paddle"></div>
            <div class="ball" ref="ball"></div>
        </div>
    </div>
`;
