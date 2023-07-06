# Aplicación de Venta de Recargas

Esta es una aplicación web desarrollada en Angular que permite vender recargas en línea. La aplicación soporta varios operadores de telefonía, incluyendo Comcel, Movistar, Tigo y Uff.

## Características

- **Vender recargas**: Los usuarios pueden ingresar los detalles de una recarga, incluyendo el valor de la recarga y la persona que realiza la venta.
- **Ver recargas vendidas**: Los usuarios pueden ver una lista de todas las recargas que han vendido.

## Estructura del Proyecto

El proyecto está estructurado en varios módulos y componentes:

- `app.module.ts`: Este es el módulo principal de la aplicación. Importa todos los otros módulos.
- `app.component.ts`: Este es el componente principal de la aplicación.
- `app-routing.module.ts`: Este módulo configura las rutas de la aplicación.
- `comcel`, `movistar`, `tigo`, `uff`: Estos son los módulos para cada operador de telefonía. Cada módulo tiene su propio componente para mostrar la información del operador y vender recargas.
- `venta-recarga-service.service.ts`: Este es el servicio que maneja la venta de recargas.

## Diagramas

El proyecto incluye varios diagramas que muestran cómo se estructuran y se relacionan sus diferentes partes:

- **Diagrama relacional**: Muestra cómo se relacionan las entidades `Recarga` y `Operador` en la base de datos.
- **Diagrama de casos de uso**: Muestra cómo interactúa la `Persona` que realiza la venta con el sistema.
- **Diagrama de secuencia**: Muestra cómo fluyen los datos entre la `Persona`, el `Sistema` y la `Base de datos` para el caso de uso `Vender recarga`.
- **Diagrama de clases**: Muestra las clases `Recarga`, `Operador` y `VentaRecargaService` y cómo se relacionan entre sí.
