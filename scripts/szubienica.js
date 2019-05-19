(function () {
    const words = ['javascript', 'ryba', 'pies', 'komputer'];

    const index = Math.floor(Math.random() * words.length);

    const word = words[index];

    let state = word.length;

    const hiddenWord = '_'.repeat(word.length).split('');

    while (state) {
        const char = prompt(`Podaj litere do slowa: ${hiddenWord.join(' ')}`);

        if (!char) {
            state = 0;
            return;
        }
        word.replace(new RegExp(char, 'g'), function ($0, $1) {
            hiddenWord[$1] = $0;
            state -= 1;
            return $0;
        });
    }
}());