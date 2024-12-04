# Full-Stack E-Commerce Application

![E-commerce Banner](./public/banner-image.png)

## 🚀 Descripción

Una aplicación de comercio electrónico moderna y robusta construida con Next.js 15, TypeScript, Tailwind CSS, y Sanity CMS. Esta aplicación ofrece una experiencia de compra fluida con características como autenticación de usuarios, gestión de carrito, y un CMS headless para la gestión de productos.

## ✨ Características

- 🛍️ Catálogo de productos dinámico
- 🔐 Autenticación de usuarios con Clerk
- 🛒 Gestión de carrito de compras con Zustand
- 📱 Diseño responsive y moderno
- 🎨 UI personalizada con Tailwind CSS y Radix UI
- 🖼️ Gestión de contenido con Sanity CMS
- ⚡ Rendimiento optimizado con Next.js 15
- 🔄 Estado global con Zustand
- 🎭 Animaciones fluidas con Framer Motion

## 🛠️ Stack Tecnológico

### Frontend
- Next.js 15.0.3
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI Components
- Clerk Authentication

### Backend & CMS
- Sanity v3
- Next.js API Routes
- Clerk Authentication

### Estado & Gestión
- Zustand para estado global
- Sanity Client para gestión de contenido

## 🚀 Inicio Rápido

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd Full-Stack-E-Commerce
   ```

2. **Instalar dependencias**
   ```bash
   bun install
   ```

3. **Configurar variables de entorno**
   Crea un archivo `.env.local` basado en `.env.example`:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=tu-id-de-proyecto
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=tu-clerk-key
   CLERK_SECRET_KEY=tu-clerk-secret
   SANITY_API_READ_TOKEN=tu-token-de-sanity
   ```

4. **Iniciar el servidor de desarrollo**
   ```bash
   # Desarrollo con Turbopack
   bun run dev
   
   # Desarrollo con Sanity Studio
   bun run dev:sanity
   ```

## 📁 Estructura del Proyecto

```
├── app/                 # Rutas y páginas de Next.js
├── components/         # Componentes reutilizables
│   ├── ui/            # Componentes de UI base
│   └── ...            # Otros componentes
├── lib/               # Utilidades y configuraciones
├── public/            # Archivos estáticos
├── sanity/            # Configuración y esquemas de Sanity
├── store/             # Estado global con Zustand
└── types/             # Definiciones de tipos TypeScript
```

## 🧩 Componentes Principales

- `Header.tsx`: Navegación principal y carrito
- `ProductGrid.tsx`: Visualización de productos en cuadrícula
- `AddToBasketButton.tsx`: Gestión de carrito
- `BlackFridayBanner.tsx`: Banner promocional
- `ProductThumb.tsx`: Vista previa de producto

## 🔧 Hooks y Utilidades

- Store de Zustand para gestión del carrito
- Hooks personalizados para productos y categorías
- Utilidades de Sanity para gestión de imágenes y contenido

## 📚 Documentación de API

La aplicación utiliza las siguientes APIs:
- Clerk para autenticación
- Sanity para gestión de contenido
- API Routes de Next.js para endpoints personalizados

## 🎨 Diseño y UI

- Sistema de diseño personalizado con Tailwind CSS
- Componentes de Radix UI para accesibilidad
- Animaciones con Framer Motion
- Diseño responsive para todas las pantallas

## 🔐 Variables de Entorno Requeridas

```env
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_BASE_URL
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
SANITY_API_READ_TOKEN
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Fork el repositorio
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 👥 Autor

[Tu Nombre]

---

¿Necesitas ayuda? [Abre un issue](https://github.com/tu-usuario/Full-Stack-E-Commerce/issues)
