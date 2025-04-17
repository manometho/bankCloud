# Welcome to bankCloud project

## Project info

bankCloud es una aplicación web desarrollada con **Vite**, **React**, **TypeScript**, **Tailwind CSS** y **shadcn-ui**. Este proyecto simula las operaciones básicas de un banco, permitiendo explorar productos financieros como cuentas, préstamos, tarjetas y más.

---

## 🚀 Tecnologías utilizadas

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

---

## 📦 Instalación y ejecución en local

Sigue estos pasos para correr el proyecto en tu máquina:

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/bankCloud.git
cd bankCloud

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

Esto abrirá el proyecto en `http://localhost:5173` por defecto.

---

## 🌍 Despliegue en GitHub Pages

Para desplegar bankCloud en GitHub Pages:

### 1. Instala `gh-pages` (solo una vez)

```bash
npm install --save-dev gh-pages
```

### 2. Configura la base en `vite.config.ts`

Asegúrate de que el archivo `vite.config.ts` tenga esta línea:

```ts
base: '/bankCloud/', // Nombre exacto del repositorio en GitHub
```

### 3. Agrega el script en `package.json`

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```

### 4. Ejecuta el despliegue

```bash
npm run build
npm run deploy
```

### 5. Configura GitHub Pages

En tu repositorio en GitHub:

- Ve a **Settings > Pages**
- Selecciona la rama `gh-pages` y carpeta `/ (root)`
- Guarda los cambios

### ✅ Tu sitio estará disponible en:

```
https://tu-usuario.github.io/bankCloud/
```

---

## 📁 Estructura del proyecto

```
bankCloud/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── main.tsx
├── vite.config.ts
└── package.json
```

---

## ✨ Créditos

Este proyecto fue creado como parte de un ejercicio práctico para simular operaciones bancarias y presentar productos financieros de manera clara e interactiva.

---