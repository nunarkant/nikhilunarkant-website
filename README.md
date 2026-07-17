# nikhilunarkant.com — statisk kodepakke

En komplet, selvstændig genskabelse af nikhilunarkant.com som rene HTML/CSS/JS-filer.
Ingen WordPress, ingen build-værktøjer — mappen kan lægges direkte op på et hvilket
som helst webhotel (fx Simply.com, Netlify, GitHub Pages).

## Struktur

```
nikhilunarkant-website/
├── index.html            Forside (Home)
├── publications.html     Publications (bogen AI Leadership + nyhedsbrev)
├── collaboration.html    Collaboration (de tre samarbejdsformer)
├── about.html            About (Who Am I?)
├── contact.html          Contact (kontaktinfo + formular)
├── css/style.css         Al styling (farver, typografi, layout)
├── js/main.js            Mobilmenu, scroll-animationer, formular-fallback
└── assets/img/           Billeder (optimeret til WebP — ca. 0,45 MB mod før 4,7 MB)
```

## Sådan ser du sitet lokalt

Åbn `index.html` i en browser — eller kør en lille lokal server:

```bash
cd nikhilunarkant-website
python3 -m http.server 8000
# åbn http://localhost:8000
```

## Kontaktformularen

Formularen på `contact.html` virker som udgangspunkt ved at åbne den besøgendes
e-mailprogram med beskeden udfyldt (mailto-fallback til den adresse der står i
formens `data-mailto`-attribut).

Vil du have en rigtig serverformular (anbefales): Opret en gratis formular på
fx [Formspree](https://formspree.io), indsæt endpointet i formens
`action`-attribut og fjern `data-mailto`-attributten. Mere skal der ikke til.

## Nyhedsbrevet

Publications-siden indlejrer din eksisterende Beehiiv-tilmeldingsformular
(iframe). Skifter du formular hos Beehiiv, skal iframe-URL'en i
`publications.html` opdateres.

## Eksterne afhængigheder

- Google Fonts: DM Serif Display + Poppins (indlæses fra fonts.googleapis.com)
- Beehiiv-iframe på publications.html

Alt andet (billeder, CSS, JS) ligger i pakken.
