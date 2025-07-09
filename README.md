# HRM front-end website

## Abtract:

## Language:
  + Typescript
## Framework:
  + Tailwindcss
## Libraries:
  + React
  + MUI (Material UI)
  + React Router DOM
  + react-chartjs
## Support tools:
  + UI: purecode.ai
## Installation:
###  Install HRM FE with npm:
  ```bash
    npm install
  ```
### Install Tailwindcss:
+ Step 1: Install:
```bash
  npm install tailwindcss @tailwindcss/vite
```
+ Step 2: Update file 'vite.config.ts' like this:
```bash
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```
+ Step 3: Import tailwindcss to CSS file.
```bash
@import "tailwindcss";
```

### Install libraries:
  + React
  ```bash
  npm install
  ```
  + MUI:
  ```bash
  npm install @mui/material @emotion/react @emotion/styled
  ```
  + React Router Dom:
  ```bash
  npm install react-router-dom
  ```
  + Chart:
  ```bash
  react-chartjs-2
  ```
  ```bash
  chart.js
  ```
### Install Axios:
```bash
  npm install axios
```
## Run:
  ```bash
  npm run dev
  ```

  Copy đường dẫn rồi mở trên trình duyệt.