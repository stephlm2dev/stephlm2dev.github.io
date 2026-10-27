---
name: KOVELEO
description: Site koveleo.fr, entièrement construit sur le design system Koveleo (tokens et composants communs aux decks, carrousels et documents A4)
---

# Design system: koveleo.fr

Ce site n'a plus de système de design propre. Il charge le design system Koveleo tel quel, et ne contient aucun CSS ni JS écrits à la main.

Source de vérité: `COWORK/projets/koveleo-design-system/`

- `DESIGN.md`: règles (palette et usages, échelle typographique par support, formes, icônes, statuts, états interactifs, page web en flux, signature)
- `COMPONENTS.md`: registre des composants et leur adaptation par support (web, deck, carrousel, A4)
- `tokens.css`, `components.css`, `scripts/behaviours.js`: ce que le site charge

## Ce que le site utilise

`style.css` contient deux `@import` (`brand/tokens.css`, `brand/components.css`) et rien d'autre. `style.min.css` les inline pour la production. Le comportement web (menu mobile, en-tête collant, lien actif, liste de questions, cartes retournables, défilement de citations) vient de `brand/behaviours.js`.

La page est une suite de sections en bandes (`.section`), chacune sur un fond de la palette, son contenu dans un `.container`. Les blocs sont des composants du design system: `.hero`, `.logos`, `.case`, `.bridge`, `.cols` + `.more`, `.steps`, `.card.flip`, `table.matrix`, `.commitments`, `.callout`, `.facts`, `.ticker`, `.faq` (variantes `.numbered`, `.rich` et `.flat`), `.layers`, `.cta` (variante `.side`), `.footer-mast`.

## Règles pour modifier le site

- Un besoin qui n'existe pas dans le design system s'ajoute au design system, jamais dans une feuille de style du site
- Pas de couleur, de taille ni d'espacement écrits en dur: tokens uniquement
- `brand/` est une copie locale, non versionnée (sauf `behaviours.js`, servi par GitHub Pages), on ne l'édite pas ici. Mise à jour: `just site` dans `COWORK/projets/koveleo-design-system/`, puis `npm run minify`
- Le contenu (textes, identifiants de section, JSON-LD) se modifie dans les fichiers HTML

## Écarts avec le site d'avant la migration

Le rendu suit l'ancien site; ces écarts viennent du design system et sont voulus:

- Bordure basse de l'en-tête en `--border-subtle` (blanc à 10 %), fond d'en-tête `--bg-primary-deep`
- Libellés de navigation à 12,8 px, bouton de menu de 44 px
- Chiffres avant → après en coral accessible, citation du cas client en `.quote-block`
- Drapeau d'offre en coral accessible, bouton (i) carré et non rond
- Eyebrow de la section méthode en `--text-muted` (le coral est réservé à la couverture)
- Espacements des composants: sections 1 à 15 % plus courtes selon la largeur

## Évolutions avec le design system 0.9.0

- Liste du cas client en `.faq.rich.flat`: filets seuls, la ligne ouverte est encadrée de deux filets pleins, sans fond blanc
- Méthode: `.layers` à côté de la phrase de pont, trois couches Vision, Outils et solutions, Terrain (couche du milieu mise en avant)
- Appel final en `.cta.side` sur fond sable (la suite devient blanc, sable, vert): titre à gauche, texte, bouton et note à droite, une colonne sous 768 px
- Pied de page à mât (`.footer-mast`, `clamp(2.5rem, 9vw, 7rem)`), séparateurs vidés: de simples filets
- Design system suivi: version 0.9.0. La mise à jour du sidecar `.impeccable/design.json` se fait avec `/impeccable document`
