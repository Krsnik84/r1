(function() {
    'use strict';

    window.addEventListener('load', function() {
        console.log("Seite vollständig geladen");

        // Selektieren des div-Elements mit der Klasse "left buildButton"
        var buildButtonDivs = document.querySelectorAll('div.left.buildButton');
        console.log("Anzahl buildButtonDivs gefunden:", buildButtonDivs.length);

        // Selektieren des Bestätigungsbuttons
        var confirmButton = document.querySelector('input[type="submit"][name="submit"][value="Add to Queue"]');
        console.log("Bestätigungsbutton gefunden:", confirmButton);

        if (buildButtonDivs.length > 0 && confirmButton) {
            // Innerhalb jedes div-Elements das Eingabefeld finden und Button hinzufügen
            buildButtonDivs.forEach(function(buildButtonDiv, index) {
                var inputField = buildButtonDiv.querySelector('input[type="number"][name^="unitMap"]');
                console.log("Eingabefeld in buildButtonDiv #" + index + " gefunden:", inputField);

                if (inputField) {
                    // Neuen Button erstellen
                    var newButton = document.createElement('button');
                    newButton.innerHTML = 'x';
                    newButton.style.position = 'fixed'; // Positionierung anpassen
                    newButton.style.top = (10 + index * 40) + 'px'; // Beispielwert, anpassen nach Bedarf
                    newButton.style.left = '10px'; // Beispielwert, anpassen nach Bedarf
                    newButton.style.zIndex = '1000'; // Sicherstellen, dass der Button oben angezeigt wird
                    newButton.style.backgroundColor = 'red'; // Hintergrundfarbe setzen
                    newButton.style.color = 'white'; // Textfarbe setzen
                    newButton.style.padding = '10px'; // Padding setzen
                    newButton.style.border = 'none'; // Rahmen entfernen
                    newButton.style.cursor = 'pointer'; // Zeiger ändern

                    // Klick-Event für den neuen Button
                    newButton.addEventListener('click', function() {
                        console.log("Neuer Button in buildButtonDiv #" + index + " geklickt");
                        // Setzt den Wert des Eingabefelds auf 99999999
                        inputField.value = '99999999';
                        console.log("Wert in Eingabefeld gesetzt");

                        // Klickt den Bestätigungsbutton
                        confirmButton.click();
                        console.log("Bestätigungsbutton geklickt");
                    });

                    // Fügen Sie den neuen Button zum Dokument hinzu
                    document.body.appendChild(newButton);
                    console.log("Neuer Button zum Dokument hinzugefügt in buildButtonDiv #" + index);
                } else {
                    console.log('Eingabefeld in buildButtonDiv #' + index + ' nicht gefunden');
                }
            });
        } else {
            console.log('buildButtonDivs oder Bestätigungsbutton nicht gefunden');
        }
    }, false);

})();
