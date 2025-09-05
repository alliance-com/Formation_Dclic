# 📄 Fonctionnalité Téléchargement CV

## 🔧 Comment ça marche

### 3 méthodes disponibles :

1. **Téléchargement direct** (si tu as un fichier CV)
2. **Modal avec options** (si pas de fichier)
3. **Génération automatique** d'un CV basique

## 📁 Structure des fichiers recommandée :

```
mon-portfolio/
├── index.html
├── style.css  
├── script.js
├── assets/
│   └── CV_Prenom_Nom.pdf  ← Place ton CV ici
├── hero-illustration.png
└── profile-photo.jpg
```

## 🚀 Configuration

### Étape 1 : Créer le dossier assets
```bash
mkdir assets
```

### Étape 2 : Ajouter ton CV (optionnel)
- Nomme ton fichier : `CV_Prenom_Nom.pdf`
- Place-le dans le dossier `assets/`

### Étape 3 : Personnaliser dans script.js
```javascript
// Ligne 169 - Change le nom du fichier
const cvFileName = 'CV_TonPrenom_TonNom.pdf';

// Ligne 254 - Personnalise tes infos
<h1>TonPrénom TonNOM</h1>
<p>email@exemple.com | +33 X XX XX XX XX</p>

// Ligne 217 - Ajoute ton LinkedIn
const linkedinUrl = 'https://linkedin.com/in/ton-profil';
```

## ✨ Fonctionnalités

### Si le CV existe :
- ✅ Téléchargement direct du PDF
- ✅ Feedback visuel de confirmation

### Si le CV n'existe pas :
- 🔧 Modal avec 3 options :
  - 📧 **Contact** : Scroll vers formulaire
  - 💼 **LinkedIn** : Ouverture du profil
  - 📄 **Génération** : CV basique automatique

### CV généré automatiquement :
- 📋 Format professionnel
- 🎨 Design cohérent avec ton site
- 🖨️ Prêt pour impression/sauvegarde
- 📅 Horodaté automatiquement

## 🎯 Avantages

1. **Flexibilité** : Fonctionne avec ou sans fichier CV
2. **Expérience utilisateur** : Jamais de lien cassé
3. **Professionnel** : Alternatives élégantes
4. **Automatique** : Génération de CV si nécessaire

## 🔄 Migration depuis l'ancien code

L'ancienne alerte a été remplacée par un système complet avec modal et options multiples. Aucune modification manuelle nécessaire !