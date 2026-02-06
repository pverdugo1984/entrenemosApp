# Entrenemos - Plataforma de Gestión de Entrenamientos

Entrenemos es una aplicación web desarrollada para la gestión de entrenamientos deportivos, permitiendo la interacción entre administradores, entrenadores y atletas. El sistema permite:

-   Gestionar usuarios y roles
-   Crear y asignar entrenamientos
-   Registrar y consultar progresos
-   Comunicación mediante chat en tiempo real
-   Control de acceso mediante autenticación y autorización

## Tecnologías

### Backend

-   **Framework:** Spring Boot 3.2.3
-   **Lenguaje:** Java 17
-   **Base de datos:** MySQL 8
-   **Seguridad:** Spring Security con JWT
-   **ORM:** Spring Data JPA (Hibernate)
-   **Comunicación:** REST API, WebSocket
-   **IDE:** IntelliJ IDEA

### Frontend

-   **Framework:** Angular 20
-   **Lenguaje:** TypeScript 5.8.2

## Arquitectura del Sistema

**Frontend:** Angular

-   Organización por módulos (admin, coach, user, auth, shared)

**Backend:** Spring Boot

-   Arquitectura por capas:
    -   Controladores REST
    -   Servicios
    -   Repositorios
    -   Seguridad JWT

**Base de datos:** MySQL

**Seguridad:** JWT + filtros + guards por rol

**Comunicación en tiempo real:** WebSockets


