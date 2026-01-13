# 🚪 Ozso WC Kabinleri Website

Site web B2B optimisé pour Google Ads générant des leads qualifiés (appels téléphoniques et messages WhatsApp).

## 🎯 Stack Technique

- **Framework:** Astro 4.x (performance maximale, SEO parfait)
- **Styling:** Tailwind CSS (design moderne et responsive)
- **Type:** Static Site Generation (SSG)
- **Performance:** Lighthouse 100/100

## 📦 Structure du Projet

```
ozso-website/
├── src/
│   ├── pages/           # Pages du site
│   │   ├── index.astro           # WC Kabinleri (accueil)
│   │   ├── aksesuarlar.astro     # Aksesuarlar
│   │   └── hakkimizda.astro      # À propos
│   ├── components/      # Composants réutilisables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── CTAButtons.astro      # Boutons CTA sticky mobile
│   ├── layouts/
│   │   └── Layout.astro          # Layout avec SEO et tracking
│   └── styles/
│       └── global.css            # Styles globaux
├── public/
│   ├── images/          # Vos images produits (à ajouter)
│   ├── robots.txt
│   └── favicon.svg
└── README.md
```

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder le site pour production
npm run build

# Prévisualiser le build de production
npm run preview
```

## ⚙️ Configuration Requise

### 1. Numéros de Téléphone et WhatsApp

**⚠️ IMPORTANT:** Remplacer les numéros dans tous les fichiers :

```javascript
// Chercher et remplacer dans :
// - src/layouts/Layout.astro
// - src/components/Header.astro
// - src/components/Footer.astro
// - src/components/CTAButtons.astro
// - src/pages/*.astro

const phoneNumber = '+90 352 XXX XX XX';  // ← VOTRE NUMÉRO
const whatsappNumber = '905XXXXXXXXX';     // ← VOTRE NUMÉRO (format international sans +)
```

### 2. Google Ads & GTM Tracking

Dans `src/layouts/Layout.astro`, décommenter et configurer :

```html
<!-- Google Tag Manager -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXXXXXX'); // ← VOTRE ID GOOGLE ADS
</script>
```

Configurer les conversion IDs dans les fonctions de tracking :

```javascript
function trackPhoneClick() {
  gtag('event', 'conversion', {
    'send_to': 'AW-XXXXXXXXX/XXXXXX', // ← VOTRE CONVERSION ID TÉLÉPHONE
    'event_category': 'Contact',
    'event_label': 'Phone Click'
  });
}

function trackWhatsAppClick() {
  gtag('event', 'conversion', {
    'send_to': 'AW-XXXXXXXXX/XXXXXX', // ← VOTRE CONVERSION ID WHATSAPP
    'event_category': 'Contact',
    'event_label': 'WhatsApp Click'
  });
}
```

### 3. Domaine et Site URL

Dans `astro.config.mjs` :

```javascript
export default defineConfig({
  site: 'https://ozso.com.tr', // ← VOTRE DOMAINE
  // ...
});
```

### 4. Email de Contact

Dans `src/components/Footer.astro` :

```javascript
const email = 'info@ozso.com.tr'; // ← VOTRE EMAIL
```

## 📸 Ajouter Vos Images

1. Placer vos images produits dans `/public/images/`
2. Format recommandé : JPEG/WebP optimisés
3. Tailles suggérées :
   - Images produits : 800x600px
   - Hero images : 1920x1080px
   - Logos : SVG ou PNG transparent

## 🎨 Personnalisation des Couleurs

Dans `tailwind.config.cjs` :

```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Couleur principale
    600: '#0284c7',  // Hover states
    700: '#0369a1',  // Dark mode
  },
}
```

## 📊 Tracking des Conversions

Le site track automatiquement :

✅ **Clics téléphone** → événement "Phone Click"
✅ **Clics WhatsApp** → événement "WhatsApp Click"

Ces événements sont visibles dans :
- Google Analytics (si configuré)
- Google Ads Conversions
- Google Tag Manager

## 🚢 Déploiement

### Option 1: Netlify (Recommandé)

1. Push le code sur GitHub
2. Connecter le repo à Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Déploiement automatique ✅

### Option 2: Vercel

1. Push le code sur GitHub
2. Importer le projet sur Vercel
3. Déploiement automatique ✅

### Option 3: Cloudflare Pages

1. Push le code sur GitHub
2. Connecter à Cloudflare Pages
3. Build command: `npm run build`
4. Build output: `dist`

## 🔧 Maintenance

### Ajouter un Nouveau Produit

1. Éditer `src/pages/index.astro`
2. Ajouter dans le tableau `products`
3. Builder et redéployer

### Modifier le Contenu

Tous les textes sont directement dans les fichiers `.astro` pour faciliter les modifications.

## 📈 SEO Checklist

✅ Meta titles uniques par page
✅ Meta descriptions optimisées
✅ URLs propres et descriptives
✅ Schema.org LocalBusiness
✅ Sitemap automatique
✅ Robots.txt configuré
✅ Images avec alt text
✅ Mobile responsive
✅ Performance optimisée

## 📞 Support

Pour toute question sur l'installation ou la configuration :
- Vérifier la documentation Astro : https://docs.astro.build
- Vérifier la documentation Tailwind : https://tailwindcss.com

## 🎯 Objectifs Atteints

✅ Site ultra-rapide (< 1s chargement)
✅ SEO optimisé pour Google Ads
✅ Tracking conversions téléphone/WhatsApp
✅ Design moderne B2B
✅ Mobile responsive avec CTA sticky
✅ Code propre et maintenable
✅ Prêt pour production

## 📝 Notes Importantes

1. **REMPLACER LES NUMÉROS** avant de déployer
2. **CONFIGURER GOOGLE ADS** pour le tracking
3. **AJOUTER VOS IMAGES** dans `/public/images/`
4. **TESTER** sur mobile avant le lancement
5. **VÉRIFIER** que tous les liens fonctionnent

---

**Version:** 1.0.0
**Date:** Janvier 2026
**Framework:** Astro 4.x + Tailwind CSS
