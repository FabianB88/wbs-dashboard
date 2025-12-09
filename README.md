# Wereldburgerschap Speldashboard - HAN

Een interactieve webapplicatie voor docenten om wereldburgerschaps-scenarios te spelen in de klas.

## Functies

- **Startscherm**: Kies snel het aantal deelnemende teams (3-6)
- **Projectiemodus**: Voor op beamer/digibord met timer en WGI-visualisatie
- **Docentmodus**: Invoer per team van scenario's en antwoordkeuzes
- **Automatische score-berekening**: Op 3 waarden (Slim, Schoon, Sociaal)
- **Balans-indicator**: Teams winnen door balans te bewaren tussen de waarden
- **HAN-huisstijl**: Professionele uitstraling met magenta en donkerblauw

## Installatie en gebruik

### Lokaal ontwikkelen

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev

# Open browser op http://localhost:5173
```

### Productie build

```bash
# Build voor productie
npm run build

# Preview productie build
npm run preview
```

## Deployment naar GitHub Pages

De app is geconfigureerd voor GitHub Pages deployment:

1. **Build de app**:
   ```bash
   npm run build
   ```

2. **Push naar GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Activeer GitHub Pages**:
   - Ga naar: https://github.com/FabianB88/wbs-dashboard/settings/pages
   - Source: "GitHub Actions"
   - Of handmatig: Deploy de `dist` folder

## Gebruik in de klas

### Flow

1. **Start**: Open de app en kies het aantal teams
2. **Projectie**: Timer en WGI verschijnen automatisch op het scherm
3. **Docent**: Klik op "Naar docentscherm" om per team scenarios in te voeren
4. **Wissel**: Schakel makkelijk tussen projectie en docent-invoer

### Belangrijke functionaliteiten

- Meerdere teams mogen **hetzelfde scenario** kiezen in een ronde
- Scores worden **automatisch** berekend bij elke keuze
- Timer met waarschuwing bij laatste 30 seconden
- **Balans-score** per team: hoe lager, hoe beter de balans

## Technische details

- **Framework**: React 18 + TypeScript
- **Build tool**: Vite
- **Styling**: Custom CSS met HAN-kleuren
- **State management**: React hooks (useState)
- **Browser support**: Moderne browsers (Chrome, Firefox, Safari, Edge)

## Structuur

```
wbs-dashboard/
├── src/
│   ├── components/        # React componenten
│   ├── data/              # Scenario's en configuratie
│   ├── styles/            # CSS per component
│   ├── types.ts           # TypeScript type definities
│   ├── utils.ts           # Utility functies
│   ├── App.tsx            # Hoofd component
│   └── main.tsx           # Entry point
├── index.html
├── vite.config.ts         # Vite configuratie (GitHub Pages)
└── package.json
```

## Aanpassingen

### Scenarios toevoegen

Edit `src/data/scenarios.ts`:

```typescript
{
  id: "nieuw-scenario",
  name: "Scenario X – Titel",
  description: "Beschrijving...",
  continent: "Europa",
  scores: {
    A: { value1: 2, value2: -1, value3: 1 },
    B: { value1: 1, value2: 2, value3: 0 },
    C: { value1: 0, value2: 1, value3: 3 },
  },
}
```

### Aantal rondes aanpassen

In `src/App.tsx`, wijzig:
```typescript
const INITIAL_ROUNDS = 3; // naar gewenst aantal
```

### Timer tijd aanpassen

In `src/components/DisplayView.tsx`, wijzig:
```typescript
<Timer initialSeconds={180} /> // 180 = 3 minuten
```

## Support

Voor vragen of problemen, neem contact op met de ontwikkelaar of open een issue op GitHub.

## Licentie

Dit project is ontwikkeld voor HAN University of Applied Sciences.
