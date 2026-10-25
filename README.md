# KOVELEO — Site vitrine

Site one-page pour **koveleo.fr** — partenaire technique pour dirigeants.

Stack : HTML · CSS · GitHub Pages. Le CSS et le JS viennent du design system Koveleo (`brand/`).

---

## Structure

```
index.html        — page unique
style.css         — deux @import: brand/tokens.css puis brand/components.css (aucun CSS propre au site)
style.min.css     — CSS minifié, @import inlinés (servi en production)
brand/            — copie du design system (ne pas éditer ici, voir ci-dessous)
assets/           — images, logos, favicons
DESIGN.md         — renvoi vers le design system
```

> `index.html` charge `style.min.css` et `brand/behaviours.js` (menu, liste de questions, cartes retournables, défilement).
> Source de vérité: `COWORK/projets/koveleo-design-system/`. Pour mettre à jour le site: `just site` dans ce dossier (copie vers `brand/`), puis `npm run minify` ici.

---

## Dev local

```bash
docker run --rm -p 8080:80 -v "$(pwd):/usr/share/nginx/html:ro" nginx:alpine
```

Ouvrir http://localhost:8080

---

## Commandes

```bash
# Minifier le CSS (style.css + brand/ → style.min.css)
npm run minify
```

Prérequis : Node.js — `clean-css-cli` s'exécute via `npx`, aucune installation préalable.

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
1. Modifier le design system (`just site`) ou le HTML
2. `npm run minify`
3. Commiter les fichiers sources **et** minifiés
4. Push sur `master` → déploiement automatique
