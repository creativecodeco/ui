# Architecture Decision Records (ADR)

Este documento registra las decisiones arquitectónicas clave y de diseño técnico del proyecto `@creativecodeco/ui`.

---

## PURPOSE
El objetivo de `@creativecodeco/ui` es proveer el Sistema de Diseño oficial para CreativeCode.com.co, implementando componentes atómicos y controles de formulario altamente configurables, consistentes y optimizados bajo un enfoque CSS-first.

---

## STACK
- **Core**: React 19 (v19.2.8)
- **Estilos**: Tailwind CSS v4 (CSS-first) + DaisyUI v5 (v5.7.0)
- **Documentación**: Storybook 10 & Chromatic v18
- **Tipado**: TypeScript 6 (v6.0.3)
- **Pruebas**: Jest 30 (v30.4.2) & React Testing Library v16 (v16.3.2)

---

## ARCHITECTURE
El proyecto sigue una arquitectura modular en la cual:
- **`src/ui/components/`**: Componentes de presentación sin dependencias de estado global (Avatar, Badge, Button, Accordion).
- **`src/ui/forms/`**: Componentes controladores e interactivos (TextBox, Checkbox, Radio, Dropdown, RadioList).
- **`src/ui/provider/`**: Contiene `CreativeCodeUIProvider` para inyectar el tema visual `creativecode` (usando el atributo HTML `data-theme="creativecode"`).
- **`src/theme/`**: La capa de diseño visual construida sobre Tailwind CSS v4, gestionada mediante tokens CSS-first en `main.css`.

---

## PATTERNS

### 1. React Version Alignment via Overrides
Durante la actualización de dependencias, diferencias en el árbol resolutivo provocaban que `react` y `react-dom` se instalaran en versiones dispares (`19.2.7` y `19.2.8`), disparando fallos críticos de incompatibilidad en testing-library.
- **Decisión**: Se forzó la alineación estricta de React a la versión `19.2.8` utilizando la sección `overrides` en `package.json`.

---

## TRADEOFFS
- **Conservar TypeScript 6.0.3**:
  Se decidió no forzar la actualización a TypeScript 7.0.2 para evitar incompatibilidades críticas con herramientas del ecosistema de testing (como `ts-jest`), las cuales requieren APIs de compilación programática ausentes en la versión Go del compilador nativo de TS 7.0. Esto evita configuraciones complejas de aliasing o el uso de flags de instalación inseguros (`--legacy-peer-deps`).
- **Babel y ESLint Conservadores**: Se retuvo Babel en la rama 7.x y ESLint en la 9.x debido a incompatibilidades de peer dependencies de los plugins core del ecosistema (`eslint-plugin-react` y `ts-jest`), priorizando la consistencia y la instalación limpia en `npm install`.

---

## PHILOSOPHY
- **CSS-First**: Declarar y extender colores y estilos a través de variables y directivas `@theme` nativas en hojas de estilo, minimizando el CSS dinámico inyectado por JS.
- **Resolución Limpia de Dependencias**: No usar `--legacy-peer-deps` en la instalación del proyecto. Cualquier conflicto de árbol resolutivo debe arreglarse mediante alineación de versiones o anclaje a versiones estables.
