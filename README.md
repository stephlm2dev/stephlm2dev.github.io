# KOVELEO — Site vitrine

Site one-page pour **koveleo.fr** — partenaire technique pour dirigeants.

Stack : HTML · CSS · Vanilla JS · GitHub Pages

---

## Structure

```
index.html        — page unique
style.css         — source CSS (éditable)
style.min.css     — CSS minifié (servi en production)
script.js         — source JS (éditable)
script.min.js     — JS minifié (servi en production)
assets/           — images, logos, favicons
DESIGN.md         — système de design (tokens, typographie, palette)
```

> `index.html` charge `style.min.css` et `script.min.js`.
> Modifier `style.css` / `script.js`, puis relancer `npm run minify`.

---

## Dev local

```bash
docker run --rm -p 8080:80 -v "$(pwd):/usr/share/nginx/html:ro" nginx:alpine
```

Ouvrir http://localhost:8080

---

## Commandes

```bash
# Minifier le CSS (style.css → style.min.css)
npm run minify:css

# Minifier le JS (script.js → script.min.js)
npm run minify:js

# Tout minifier d'un coup
npm run minify
```

Prérequis : Node.js — les outils (`terser`, `clean-css-cli`) s'exécutent via `npx`, aucune installation préalable.

---

## Images

### Convertir les logos en WebP

```bash
for f in assets/logo.png assets/logos/libon.png assets/logos/bernardins.png assets/logos/japan-experience.png assets/logos/anticafe.jpeg; do
  cwebp -q 80 "$f" -o "${f%.*}.webp"
done
```

Prérequis : `brew install webp`

---

## Déploiement

Le site est déployé automatiquement via GitHub Pages sur la branche `master`.
Domaine custom : `koveleo.fr` (configuré dans `CNAME`).

Workflow :
1. Éditer `style.css` et/ou `script.js`
2. `npm run minify`
3. Commiter les fichiers sources **et** minifiés
4. Push sur `master` → déploiement automatique
