# Architecture Decision Records (ADR)

Este documento registra las decisiones arquitectónicas clave y de diseño técnico del proyecto `@creativecodeco/ui`.

---

## PURPOSE

El objetivo de `@creativecodeco/ui` es proveer el Sistema de Diseño oficial para CreativeCode.com.co, implementando componentes atómicos y controles de formulario altamente configurables, consistentes y optimizados bajo un enfoque CSS-first.

---

## STACK

- **Core**: React 19 (v19.3.1)
- **Estilos**: Tailwind CSS v4 (v4.3.3, CSS-first) + DaisyUI v5 (v5.7.50)
- **Documentación**: Storybook 10 (v10.6.4) & Chromatic v18 (v18.13.3)
- **Compilación, Linting y Tipado**: Babel 8 (v8.0.9), ESLint 10 (v10.13.0) & TypeScript 6 (v6.0.3)
- **Pruebas**: Jest 30 (v30.5.2) & React Testing Library v16 (v16.3.3)

---

## ARCHITECTURE

El proyecto sigue una arquitectura modular organizada por dominios:

- **`src/ui/components/display/`**: Componentes de presentación y visualización de datos (`Accordion`, `Aura`, `Avatar`, `AvatarGroup`, `Badge`, `Button`, `Card`, `Carousel`, `ChatBubble`, `Hover3D`, `HoverGallery`, `Indicator`, `Kbd`, `List`, `Mask`, `Rating`, `Stat`, `Status`, `Swap`, `Table`, `TextRotate`, `Timeline`).
- **`src/ui/components/feedback/`**: Componentes de retroalimentación y estados (`Alert`, `Countdown`, `Diff`, `Modal`, `Progress`, `RadialProgress`, `Skeleton`, `Spinner`, `Toast`, `Tooltip`).
- **`src/ui/components/layout/`**: Componentes estructurales y contenedores (`Collapse`, `Divider`, `Footer`, `Hero`, `Join`, `Mockup`, `Stack`).
- **`src/ui/components/navigation/`**: Componentes de navegación y acciones (`ActionDropdown`, `Breadcrumb`, `Dock`, `Drawer`, `Fab`, `Link`, `MegaMenu`, `Menu`, `Navbar`, `Pagination`, `Steps`, `Tabs`).
- **`src/ui/forms/`**: Controles de formulario e interactivos (`Calendar`, `Checkbox`, `Dropdown`, `Fieldset`, `FileInput`, `Filter`, `Label`, `Otp`, `Radio`, `RadioList`, `Range`, `Select`, `TextArea`, `TextBox`, `Toggle`, `Validator`).
- **`src/ui/provider/`**: Contiene `CreativeCodeUIProvider` para inyectar el tema visual `creativecode` (usando el atributo HTML `data-theme="creativecode"`).
- **`src/theme/`**: La capa de diseño visual construida sobre Tailwind CSS v4, gestionada mediante tokens CSS-first en `main.css`.

---

## PATTERNS

### 1. Security & Dependency Resolution via Overrides

Para mantener `0 vulnerabilities` en `npm audit` y `0` paquetes deprecados en el árbol de dependencias sin introducir cambios disruptivos en herramientas de compilación y pruebas:

- **`webpack-dev-middleware` (`^7.4.5`)**: Mitiga GHSA-g84c-rxfj-3j2c en el servidor de desarrollo de Storybook.
- **`js-yaml` (`^4.1.1`)**: Reemplaza `js-yaml@3.x` en `@istanbuljs/load-nyc-config` (usado por `jest`/`ts-jest`), eliminando la dependencia transitiva vulnerable `sprintf-js@1.0.3` (GHSA-hp3w-g68c-fv3c).
- **`tsc-alias > chokidar` (`^4.0.3`) y `braces` (`npm:brace-expansion@^2.1.7`)**: Elimina el uso de `braces@3.0.3` (GHSA-vfj7-8cjw-p6xm) reemplazándolo por `brace-expansion@^2.1.7` con límite de profundidad recursiva (`EXPANSION_MAX_DEPTH`).
- **`flat-cache` (`^4.0.1`), `glob` (`^13.0.6`), `jsdom` (`^29.1.1`) y `eslint-plugin-react > eslint` (`$eslint`)**: Eliminan las dependencias transitivas obsoletas (`rimraf@3.0.2`, `glob@7.2.3`, `glob@10.5.0`, `inflight@1.0.6` y `whatwg-encoding@3.1.1`) y alinean el soporte de peer dependency de `eslint-plugin-react` con ESLint 10.

---

## TRADEOFFS

- **Conservar TypeScript 6.0.3**:
  Se decidió no forzar la actualización a TypeScript 7.0.2 para evitar incompatibilidades de `peerDependencies` con `typescript-eslint` (`>=4.8.4 <6.1.0`) y `ts-jest` (`>=4.3 <7`). Esto evita configuraciones complejas de aliasing o el uso de flags de instalación inseguros (`--legacy-peer-deps`).

---

## PHILOSOPHY

- **CSS-First**: Declarar y extender colores y estilos a través de variables y directivas `@theme` nativas en hojas de estilo, minimizando el CSS dinámico inyectado por JS.
- **Resolución Limpia de Dependencias**: No usar `--legacy-peer-deps` en la instalación del proyecto. Cualquier conflicto de árbol resolutivo debe arreglarse mediante alineación de versiones o anclaje a versiones estables.
