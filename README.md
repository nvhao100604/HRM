# HRM front-end website

## Abtract:

## Framework:
  + React
  + Typescript
  + Tailwindcss
## Libraries:
  + MUI (Material UI)
  + React Router DOM
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
  + MUI:
  ```bash
  npm install @mui/material @emotion/react @emotion/styled
  ```
  + React Router Dom:
  ```bash
  npm install react-router-dom
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