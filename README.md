# 𝐁𝐨𝐥𝐝𝐈𝐧 - Unicode Text Formatter

Un editor de texto que permite formatear texto usando caracteres Unicode matemáticos para crear efectos de **𝐛𝐨𝐥𝐝**, *𝑖𝑡𝑎𝑙𝑖𝑐* y `𝚖𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎` que funcionan en cualquier plataforma.

## ✨ Características

- **Editor de texto intuitivo** con selección y aplicación de estilos
- **Estilos Unicode**: Bold, Italic y Monospace usando caracteres matemáticos
- **Copia al portapapeles** con fallback para navegadores antiguos
- **Interfaz accesible** siguiendo estándares WCAG
- **Responsive design** optimizado para todos los dispositivos
- **TypeScript** para type safety completo
- **Testing completo** con Vitest y Testing Library

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <repo-url>
cd boldin

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev                  # Ejecutar servidor de desarrollo
npm run build               # Compilar para producción
npm run preview             # Previsualizar build de producción

# Calidad de código
npm run lint                # Ejecutar ESLint
npm run lint:fix            # Corregir errores de ESLint automáticamente
npm run format              # Formatear código con Prettier
npm run format:check        # Verificar formato de código
npm run type-check          # Verificar tipos de TypeScript

# Testing
npm run test                # Ejecutar tests
npm run test:ui             # Ejecutar tests con UI
npm run test:coverage       # Ejecutar tests con coverage
```

## 📁 Estructura del Proyecto

```
src/
├── components/             # Componentes reutilizables
│   ├── Button.tsx         # Componente de botón con variantes
│   ├── Header.tsx         # Header de la aplicación
│   └── Footer.tsx         # Footer de la aplicación
├── features/              # Features organizadas por dominio
│   └── editor/           # Feature del editor de texto
│       ├── EditorToolbar.tsx
│       ├── EditorTextArea.tsx
│       └── TextEditor.tsx
├── hooks/                 # Custom hooks
│   └── useEditor.ts      # Hook para lógica del editor
├── utils/                 # Utilidades
│   ├── unicode.ts        # Conversiones Unicode
│   ├── clipboard.ts      # Utilidades de portapapeles
│   └── cn.ts             # Utility para clases CSS
├── types/                 # Definiciones de tipos TypeScript
│   └── index.ts          # Tipos globales
├── pages/                 # Páginas de la aplicación
│   └── HomePage.tsx      # Página principal
└── tests/                # Configuración de tests
    └── setup.ts          # Setup de Vitest
```

## 🎯 Principios Aplicados

### SOLID Principles

- **SRP**: Cada componente tiene una responsabilidad única
- **OCP**: Componentes extensibles sin modificación
- **LSP**: Interfaces consistentes y sustituibles
- **ISP**: Interfaces específicas y no monolíticas
- **DIP**: Dependencias basadas en abstracciones

### Clean Code

- Nombres descriptivos y consistentes
- Funciones pequeñas y enfocadas
- Comentarios que explican el "por qué"
- Código auto-documentado
- Manejo explícito de errores

### Security

- Validación de entrada de usuario
- Sanitización de texto
- Manejo seguro del portapapeles
- Headers de seguridad configurados
- No exposición de información sensible

## 🧪 Testing

El proyecto incluye tests comprehensivos:

```bash
# Ejecutar todos los tests
npm run test

# Tests con coverage
npm run test:coverage

# Tests en modo watch
npm run test -- --watch
```

### Estructura de Tests

- **Unit Tests**: Funciones de utilidad (Unicode, clipboard)
- **Component Tests**: Componentes React individuales
- **Integration Tests**: Features completas
- **Accessibility Tests**: Verificación de estándares a11y

## 🎨 Tecnologías

- **React 19** - Framework frontend
- **TypeScript** - Type safety
- **Vite** - Build tool y dev server
- **TailwindCSS** - Styling utilitario
- **Vitest** - Framework de testing
- **Testing Library** - Testing de componentes React
- **ESLint + Prettier** - Linting y formateo

## 📱 Uso

1. **Escribir texto**: Escribe o pega tu texto en el editor
2. **Seleccionar**: Selecciona el texto que quieres formatear
3. **Aplicar estilo**: Haz click en **𝐁** (bold), *𝐼* (italic) o `𝙼` (monospace)
4. **Copiar**: Usa el botón "Copy" para copiar el texto formateado

El texto formateado funciona en:
- Redes sociales (Twitter, Facebook, Instagram)
- Mensajería (WhatsApp, Telegram, Discord)
- Emails y documentos
- Cualquier aplicación que soporte Unicode

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una branch (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la branch (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

### Estándares de Código

- Seguir las reglas de ESLint configuradas
- Escribir tests para nueva funcionalidad
- Mantener coverage de tests > 80%
- Documentar funciones públicas
- Usar TypeScript estricto

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- Unicode Consortium por los caracteres matemáticos
- Comunidad de React y TypeScript
- Desarrolladores de las librerías utilizadas

---

**Hecho con ❤️ y Unicode**