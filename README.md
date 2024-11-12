[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/pEIDJzz_)
# Rock, paper, scissors

Kodprov BFU VT24

Du ska skriva färdigt webbsidan, så att man kan spela "Sten, sax, påse" med datorn. För godkänt ska alla nedan beskrivna krav vara uppfyllda.


# OBS!

För att din inlämning ska kunna testas automatiskt, måste du behålla strukturen på projektet. Dvs ändra inga filnamn och ändra bara i JS-filer. 

Du måste ha filen `script.js`, men du får skapa flera JS-filer om du behöver. Tyvärr kan man inte använda `import` syntaxen. För att importera en JS-fil skriver du:

```js
// Gamla syntaxen, ANVÄND denna i det här projektet
const exempel = require('./exempel.js')

// Nya syntaxen, UNDVIK, fungerar inte i det här projektet
import { exempel } from './exempel.js'
```


Skriv din kod i JS-filen.
Du får **inte** ändra i HTML- och CSS-filerna. Ditt kodprov kommer att autotestas för bedömning och testet är beroende av att koden i HTML och CSS inte är ändrad.

# Krav

## Spellogik
När webbsidan laddas ska både användaren och datorn ha 0 poäng. Den gröna och den blå sidan ska vara tomma. Endast knappen "Throw it" ska visas.

När användaren klickar på knappen `throw` ska följande saker hända:

- slumpa ett kast från _användaren_ (rock/paper/scissors)
- slumpa ett kast från _computer_
- båda kasten ska visas
- utvärdera vilken som får poäng efter följande logik:
  - sten trumfar sax
  - sax trumfar påse
  - påse trumfar sten
  - vid lika utdelas inget poäng
- för varje vinst ska `user` eller `computer` få 1 poäng
- först till 5 poäng vinner

När någon når 5 poäng ska dialogrutan med texten "Game over" visas. Den ska tala om vem som vann: användaren eller datorn.

När användaren klickar på "Start over" knappen ska poängen nollställas, antal kast nollställas, dialogrutan göras osynlig och de senast kastade händerna döljas.

## Tekniska detaljer

Ändra inte språk eller stavning utan följ det som etablerats i HTML-filen. Om du till exempel ändrar från "points" till "poäng" kommer testen inte känna igen texten och inlämningen blir inte godkänd.

Vid framslumpat kast skall endast aktuell tagg visas. Dölja kasten som inte ska visas genom att lägga på CSS-klassen `.hide` på element som ska döljas.

Exempel: slumpas `rock` fram skall `scissors`och `paper` döljas.

Användarens och datorns poäng ska visas som "X points", där X är antalet. Totala antalet kast ska visas på samma sätt. (Du kan välja om det ska stå point/points eller throw/throws när antalet är 1.)
