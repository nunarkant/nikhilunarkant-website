# nikhilunarkant.com — statisk hjemmeside

Hjemmesiden er rene HTML/CSS/JS-filer uden build-trin. Hver push til `main` udgives automatisk via GitHub Pages på nikhilunarkant.com.

## Struktur

```
nikhilunarkant-website/
├── index.html, ydelser.html, publications.html, about.html, contact.html, thanks.html
│                         Danske hovedsider (standardsproget)
├── en/                   Engelske versioner af de samme seks sider
├── viden.html            Oversigt over svarsiderne
├── hvad-er-ai-ledelse.html, pris-paa-seminar-om-ai-ledelse.html,
│   fra-ai-pilot-til-vaerdi.html, hvad-er-en-ai-audit.html,
│   vaelg-ai-ledelsesraadgiver.html
│                         Svarsider (kun dansk): ét spørgsmål pr. side, svaret øverst
├── seminarer.html        Redirect til ydelser.html (bevarer gamle links)
├── robots.txt, sitemap.xml, llms.txt
├── css/style.css, js/main.js
└── assets/img/           Billeder (WebP på siderne, JPEG til deling og AI)
```

## Sprog

Hver side findes som ren dansk side i roden og som ren engelsk side under `/en/`. De er forbundet med `hreflang`, og DA/EN-knappen er almindelige links. Når du ændrer tekst, skal den danske og den engelske side opdateres hver for sig.

## Datoer

Hver side viser "Opdateret [dato]" i footeren, og datoen står også i JSON-LD (`dateModified`) og `sitemap.xml` (`lastmod`). Ret datoen, når indholdet reelt ændres, og kun da.

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
