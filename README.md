# 💜 Diario de Amor Web 💜

Una hermosa página web que muestra mensajes de amor y ánimo cada hora, diseñada especialmente para sorprender a tu pareja con colores azules y morados pasteles.

## ✨ Características

- **Mensajes automáticos cada hora**: La página muestra mensajes diferentes según el momento del día (mañana, tarde, noche)
- **Diseño romántico**: Colores azules y morados pasteles con efectos visuales encantadores
- **Animaciones suaves**: Corazones flotantes, estrellas parpadeantes y efectos de partículas
- **Contador de amor**: Muestra los días juntos, horas de amor y mensajes enviados
- **Responsive**: Funciona perfectamente en móviles, tablets y escritorio
- **Efectos interactivos**: Animaciones al hacer click y hover

## 🎨 Diseño

- **Colores principales**: Azules y morados pasteles (#9d8df1, #7fb3d3, #e8e2ff, #d6ebf5)
- **Fuentes**: Dancing Script (títulos) y Poppins (texto)
- **Efectos**: Gradientes suaves, sombras elegantes, animaciones CSS

## 📱 Cómo usar

1. Abre `index.html` en tu navegador web
2. La página mostrará automáticamente mensajes de amor cada hora
3. Personaliza la fecha de inicio en `script.js` (línea con `startDate`)
4. ¡Disfruta de los mensajes románticos!

## 🔧 Personalización

### Cambiar la fecha de inicio
Edita el archivo `script.js` y busca esta línea:
```javascript
startDate: new Date('2024-01-01'), // Cambia esta fecha por cuando empezaron a salir
```

### Agregar nuevos mensajes
Los mensajes están organizados por categorías en el archivo `script.js`:
- `morning`: Mensajes de buenos días
- `afternoon`: Mensajes de tarde
- `evening`: Mensajes de noche  
- `night`: Mensajes nocturnos
- `motivation`: Mensajes motivacionales
- `special`: Mensajes especiales

### Cambiar colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-purple: #9d8df1;
    --primary-blue: #7fb3d3;
    --light-purple: #e8e2ff;
    --light-blue: #d6ebf5;
    /* ... más colores */
}
```

## 🌟 Funcionalidades técnicas

- **Detección de hora**: Los mensajes cambian automáticamente cada hora
- **Almacenamiento local**: Guarda el contador de mensajes
- **Efectos de partículas**: Animaciones interactivas al hacer click
- **Responsive design**: Se adapta a cualquier tamaño de pantalla
- **Optimización móvil**: Experiencia perfecta en dispositivos móviles

## 📁 Estructura de archivos

```
melicita/
├── index.html          # Página principal
├── styles.css          # Estilos y animaciones
├── script.js           # Lógica y mensajes
├── README.md           # Este archivo
└── .github/
    └── copilot-instructions.md
```

## 💝 Consejos de uso

- Abre la página en un navegador moderno para mejor experiencia
- Permite que la página permanezca abierta para recibir mensajes cada hora
- Comparte la URL con tu pareja para que también pueda ver los mensajes
- Personaliza los mensajes para que sean más específicos a su relación

## 🚀 Despliegue

Para compartir tu página web:

1. **GitHub Pages**: Sube los archivos a un repositorio de GitHub y activa Pages
2. **Netlify**: Arrastra la carpeta del proyecto a netlify.com
3. **Vercel**: Conecta tu repositorio de GitHub con Vercel
4. **Servidor local**: Abre `index.html` directamente en el navegador

## 💖 Créditos

Creado con mucho amor para sorprender a tu pareja especial. ¡Que disfruten de sus mensajes románticos!

---

*"El amor no se mira con los ojos, sino con el alma."* ✨
