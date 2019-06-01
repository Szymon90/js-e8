import React from 'react';
import TITLE from './constants';
import Pomidor from './Pomidor';
import Numbers from './Numbers';
import Text from './Text';

function App() {
  return (
    <div className="App">
      <h2>{TITLE.toUpperCase()}</h2>
      <Pomidor color="red" rodzaj="malinowy" />
      <Pomidor color="green" rodzaj="malinowy" />
      <Numbers />
      <Text>
        Komponet ma miec tekst
        ten tekst obcienty do okreslonej ilosci znakow
        jezeli tekst jest dluzszy niz ta okreslona liczba znakow ma sie pojawic przycisk Rozwin
        po kliknieciu rozwin ma sie pojawic caly tekst
        i przycisk zwin
      </Text>

      <Text>
        hdskjhf sfjkds jkfjksd fkjsdfj sjf sdjfdjs fjsdf jsdfj sgdjkfg sjkdfg jsdgf jsdgf jsgdfjgsdjf gsdjfgsdfg dhsgf dsgfgsdfjgsdfgdhjsfghjsdgfh sgdf dgsf gdsf gdshj fghjs
      </Text>
    </div>
  );
}

export default App;
