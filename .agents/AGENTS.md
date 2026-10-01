# Rules

- **Actualización de Documentación por Versión**: Siempre que se modifique o actualice la versión del proyecto en `package.json`, debes actualizar correspondientemente los archivos de documentación del repositorio (tales como `Changelog.md`, `README.md` y `CONTEXT.md`) para reflejar la versión actual y listar los cambios asociados a dicha versión.

- **Mejores Prácticas en TypeScript y React**:
  - **Manejo Seguro de Prop `key`**: Al iterar elementos en React, la prop `key` debe ser estrictamente de tipo `React.Key` (`string | number | bigint`). Nunca asignes directamente variables de tipo `React.ReactNode` o expresiones con uniones a booleano/nodos sin filtrar adecuadamente su tipo o usar un identificador/índice de respaldo.
  - **Interfaces Explícitas y Opcionales**: Define y exporta los tipos de props en archivos dedicados dentro de `src/types/`. Marca correctamente como opcionales (`?`) las propiedades que no sean obligatorias para evitar incompatibilidades en tests o Storybook.
  - **Cero `any` o Tipado Implícito**: Garantiza que todo parámetro, retorno y estado esté correctamente tipado.
  - **Verificación Completa de Integridad**: Tras crear o modificar componentes, tipos o lógica en el proyecto, ejecuta SIEMPRE el flujo de validación completo (`npm run lint`, `npm run format:check`, `npx tsc --noEmit`, `npm run test` y `npm run build`) para garantizar que el código cumpla con los estándares de linter, formato Prettier, tipos de TypeScript, pruebas unitarias y compilación del paquete.
