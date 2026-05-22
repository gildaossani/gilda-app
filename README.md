# Gilda PWA — Setup & Deploy

*Da donna che funziona a donna che vive.*

---

## Stack

- HTML + CSS + JavaScript vanilla
- Supabase Auth + Database
- GitHub Pages (hosting statico)
- Gumroad (vendita codici)

---

## Setup Supabase

### 1. Crea il progetto

1. Vai su [app.supabase.com](https://app.supabase.com)
2. Crea un nuovo progetto
3. Copia **Project URL** e **anon public key** da Settings → API

### 2. Inserisci le credenziali in app.js

```js
const SUPABASE_URL = 'https://XXXX.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

### 3. Crea le tabelle SQL

Vai su Supabase → SQL Editor e incolla questo:

```sql
-- Risposte degli utenti
CREATE TABLE answers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  answer_key TEXT NOT NULL,
  answer_text TEXT DEFAULT '',
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, answer_key)
);

-- Prodotti sbloccati per utente
CREATE TABLE user_products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL,
  unlocked_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

-- Codici di sblocco
CREATE TABLE unlock_codes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  product_id TEXT NOT NULL,
  used_by UUID REFERENCES auth.users(id),
  used_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS (Row Level Security)
ALTER TABLE answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE unlock_codes ENABLE ROW LEVEL SECURITY;

-- Policies answers
CREATE POLICY "Users own their answers"
  ON answers FOR ALL
  USING (auth.uid() = user_id);

-- Policies user_products
CREATE POLICY "Users see their products"
  ON user_products FOR ALL
  USING (auth.uid() = user_id);

-- Policies unlock_codes (read for all auth users, write only via app logic)
CREATE POLICY "Auth users can read codes"
  ON unlock_codes FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Auth users can update codes"
  ON unlock_codes FOR UPDATE
  USING (auth.role() = 'authenticated');
```

### 4. Genera i codici di sblocco

```sql
-- Esempio: 10 codici per il prodotto 'autosabotaggio'
INSERT INTO unlock_codes (code, product_id)
VALUES
  ('GILDA-A001', 'autosabotaggio'),
  ('GILDA-A002', 'autosabotaggio'),
  ('GILDA-A003', 'autosabotaggio'),
  ('GILDA-A004', 'autosabotaggio'),
  ('GILDA-A005', 'autosabotaggio'),
  ('GILDA-A006', 'autosabotaggio'),
  ('GILDA-A007', 'autosabotaggio'),
  ('GILDA-A008', 'autosabotaggio'),
  ('GILDA-A009', 'autosabotaggio'),
  ('GILDA-A010', 'autosabotaggio');
```

---

## Deploy su GitHub Pages

### 1. Crea repository

```bash
git init
git add .
git commit -m "Gilda PWA v2.0"
git remote add origin https://github.com/TUO_USERNAME/gilda-app.git
git push -u origin main
```

### 2. Attiva GitHub Pages

- Repository → Settings → Pages
- Source: **Deploy from a branch**
- Branch: **main** / root
- Salva

L'app sarà disponibile su: `https://TUO_USERNAME.github.io/gilda-app/`

### 3. Dominio custom (opzionale)

- Compra il dominio (es. `app.gildaossani.it`)
- In GitHub Pages → Custom domain: inserisci il dominio
- Nel DNS del dominio: aggiungi CNAME che punta a `TUO_USERNAME.github.io`

---

## Integrazione Gumroad

1. Crea un prodotto su Gumroad (tipo: "Digital product")
2. Nel messaggio di conferma acquisto, includi il codice univoco
3. Genera i codici in Supabase prima di vendere
4. Ogni codice funziona una volta sola per utente

**Flusso acquisto:**
Cliente compra su Gumroad → riceve email con codice → apre app → inserisce codice → prodotto sbloccato permanentemente

---

## Icone PWA

Le icone devono essere PNG:
- `icons/icon-192.png` — 192×192px
- `icons/icon-512.png` — 512×512px

Usa Canva per creare: **G** in Cormorant Garamond terracotta `#B5603A` su sfondo antracite `#2D2D2D`, con padding.

---

## Aggiungere un nuovo prodotto

Tutto si gestisce nel catalogo in `app.js`. Aggiungere un nuovo oggetto all'array `PRODUCTS_CATALOG`:

```js
{
  id: 'nome-prodotto',        // ID univoco
  slug: 'nome-prodotto',      // Per il nome del file export
  tag: 'Percorso',
  title: 'Titolo del prodotto',
  description: 'Descrizione breve.',
  price: '€9',
  sections: [
    {
      id: 'sezione-1',
      name: 'Nome della sezione',
      questions: [
        'Prima domanda?',
        'Seconda domanda?',
      ],
    },
    // ... altre sezioni
  ],
}
```

Il resto dell'app — libreria, progress, export, salvataggio — funziona automaticamente.

---

## Struttura file

```
/
├── index.html          — Shell HTML
├── styles.css          — Stili completi (palette Gilda)
├── app.js              — Logica applicazione
├── manifest.json       — Configurazione PWA
├── service-worker.js   — Offline support
├── README.md           — Questo file
└── icons/
    ├── icon-192.png    — Icona app
    └── icon-512.png    — Icona app grande
```

---

*Aggiornato: maggio 2026*
