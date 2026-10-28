# Kleine koks

Openbare Nederlandstalige receptensite voor jonge koks, zonder accounts, login of externe afhankelijkheden. Het eerste recept is de aangeleverde makkelijke lasagne voor een 12-jarige.

Open `index.html` in een browser of gebruik `python3 -m http.server 8000`.

- `recipes.js`: oorspronkelijke ingrediënten en zes stappen; geen hoeveelheden of porties toegevoegd.
- `app.js`: receptnavigatie, afvinklijst met optionele browseropslag, kookstand en afdrukken.
- `styles.css`: responsive vormgeving en afdrukweergave.
- `assets/lasagne.svg`: lokale illustratie.

GitHub Pages publiceert de hoofdmap van `main`. Het gewenste domein is `koken.juliaan.eu`. Hiervoor is een DNS CNAME nodig van `koken` naar `juuul.github.io`, zonder Cloudflare Access. Activeer na DNS-validatie HTTPS in GitHub Pages.

Controle: `node --check app.js` en `node --check recipes.js`. Controleer ook receptnavigatie, ingrediëntenopslag, alle zes kookstappen, Escape en smalle schermen.
