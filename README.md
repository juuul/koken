# Kleine koks

Openbare Nederlandstalige receptensite voor jonge koks, zonder accounts, login of externe afhankelijkheden. Het eerste recept is de aangeleverde makkelijke lasagne voor een 12-jarige.

Open `index.html` in een browser of gebruik `python3 -m http.server 8000`.

- `recipes.js`: oorspronkelijke ingrediënten, voorbereidingen en zes kookstappen; geen hoeveelheden of porties toegevoegd.
- `app.js`: receptnavigatie, afvinklijst met optionele browseropslag, kookstand en afdrukken.
- `styles.css`: responsive vormgeving en afdrukweergave.
- `assets/lasagne.svg`: lokale illustratie.

## Receptopbouw

Voorbereidingen staan altijd bovenaan het recept en komen als eerste in de kookstand. Bij de lasagne betekent dit: eerst de oven voorverwarmen op 180 °C hetelucht of 200 °C boven- en onderwarmte en ingrediënten en keukenspullen klaarzetten. Daarna volgen de kookstappen. Behoud de hulp van een volwassene bij de hete oven en ovenschaal.

## Publicatie

De site staat openbaar op **https://juliaan.eu/koken/**, zonder bezoekerslogin of Cloudflare Access. Broncode: https://github.com/juuul/koken.

GitHub Pages publiceert de hoofdmap van `main` automatisch na een push. Er is geen database, Node.js-server of buildstap nodig. Alle assetpaden zijn relatief zodat de site onder `/koken/` werkt.

Er zijn geen wijzigingen nodig bij Vimexx, Cloudflare of DNS. Gebruik geen `CNAME`-bestand voor deze repository: het bestaande domein van de accountsite zorgt voor het adres `juliaan.eu/koken/`.

Controle: `node --check app.js` en `node --check recipes.js`. Controleer ook receptnavigatie, ingrediëntenopslag, de voorbereiding en alle zes kookstappen, Escape en smalle schermen.
