# Angular Panel Layout Template

Este proyecto es un template para construir aplicaciones web con un diseño de panel utilizando Angular v16, Tailwind CSS y Flowbite.

## Estructura del Proyecto

El proyecto está organizado en un módulo principal llamado `panel-layout`, que contiene los siguientes componentes:

- `sidebar`: Componente que representa la barra lateral de la aplicación.
- `navbar`: Componente que representa la barra de navegación en la parte superior.
- `panel-content`: Módulo de contenido que se renderiza mediante el uso de `router-outlet`.

## Tecnologías Utilizadas

- **Angular v16**: El framework de desarrollo para construir la aplicación web.
- **Tailwind CSS**: Un framework de utilidades de CSS de bajo nivel para construir interfaces de usuario modernas y receptivas.
- **Flowbite**: Un conjunto de bloques de construcción HTML/CSS reutilizables construidos con Tailwind CSS.

## Instalación

1. Clona este repositorio: `git clone https://github.com/carlos-pv/template-panel.git`
2. Navega al directorio del proyecto: `cd template-panel`
3. Instala las dependencias: `npm install`
4. Inicia la aplicación: `npm start`
5. Abre tu navegador y visita `http://localhost:4200/`

## Personalización

Puedes personalizar fácilmente este template para adaptarlo a tus necesidades específicas. Aquí hay algunas áreas clave que puedes ajustar:

- **Contenido del Sidebar**: Modifica el contenido del archivo `sidebar.component.html` para ajustar los elementos de la barra lateral según tus requerimientos.

- **Estilos y Diseño**: Tailwind CSS facilita la personalización del diseño. Puedes ajustar los estilos en el archivo `styles.css` y en otros archivos de estilos según sea necesario.

- **Componentes Adicionales**: Si necesitas agregar más componentes o módulos, simplemente crea nuevos archivos y registra los componentes en el módulo principal.

## Contribuciones

Si encuentras algún problema o tienes sugerencias para mejorar este template, no dudes en abrir un issue o enviar un pull request. ¡Las contribuciones son bienvenidas!

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE). Puedes usar, modificar y distribuir este proyecto según tus necesidades. ¡Diviértete construyendo tu aplicación con Angular, Tailwind CSS y Flowbite!
