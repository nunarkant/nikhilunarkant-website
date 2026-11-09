# nikhilunarkant.com — statisk hjemmeside

Hjemmesiden er rene HTML/CSS/JS-filer uden build-trin. Hver push til `main` udgives automatisk via GitHub Pages på nikhilunarkant.com.

## Struktur

```
nikhilunarkant-website/
├── index.html          Forside
├── ydelser.html        Seminarer og rådgivningsforløb (tidligere seminarer.html)
├── seminarer.html      Redirect til ydelser.html (bevarer gamle links)
├── publications.html   Udgivelser (AI Leadership)
├── about.html          Om mig
├── contact.html        Kontakt (formular via FormSubmit)
├── thanks.html         Tak-side efter afsendt formular (noindex)
├── robots.txt          Crawling-regler + sitemap-reference
├── sitemap.xml         Sitemap for de indekserbare sider
├── css/style.css       Al styling
├── js/main.js          Mobilmenu, scroll-animationer, sprogskifter (DA/EN)
└── assets/img/         Billeder (WebP)
```

## SEO

- Hver side har `canonical`, `og:url`, `og:image` og Twitter-kort.
- JSON-LD: `Person` og `WebSite` på forsiden, `Course` for de fire seminarer, `Service` for de fire rådgivningsforløb og `Book` på udgivelsessiden.
- Sproget skiftes med DA/EN-knappen. Dansk er standard.

Når du ændrer priser, varigheder eller tekster for seminarer og forløb, så opdatér også JSON-LD i `ydelser.html`, så søgemaskinerne får de rigtige tal.

## Kontaktformularen

Formularen sender via FormSubmit til modtageradressen i `action`-attributten i `contact.html`. Første besked kræver en engangs-bekræftelse fra e-mailen.

## Lokal visning

```bash
cd nikhilunarkant-website
python3 -m http.server 8000
# åbn http://localhost:8000
```

## Eksterne afhængigheder

- Google Fonts: DM Serif Display og Poppins
- Beehiiv-iframe er fjernet fra udgivelsessiden
