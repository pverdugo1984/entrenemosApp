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

## Requisitos

-   Java 17 o superior
-   Node.js 18 o superior
-   MySQL 8 o superior
-   Maven 3.6 o superior
-   npm o yarn

## Instalación y Configuración

### Base de Datos

1. Crear la base de datos MySQL:

```sql
CREATE DATABASE entrenemos_pablo2026;
```

### Backend

1. Importar el proyecto en IntelliJ IDEA o cualquier IDE compatible
2. Navegar a la carpeta del backend:

```bash
cd backend_entrenemos
```

3. Verificar que Maven descargue las dependencias automáticamente o ejecutar:

```bash
./mvnw clean install
```

4. Configurar la base de datos en `src/main/resources/application.properties` si es necesario

5. Ejecutar la aplicación desde IntelliJ IDEA ejecutando la clase `EntrenemosApplication` o desde terminal:

```bash
./mvnw spring-boot:run
```

El backend estará disponible en `http://localhost:8080`

### Frontend

1. Navegar a la carpeta del frontend:

```bash
cd frontend_entrenemos
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
ng s -o
```

El frontend estará disponible en `http://localhost:4200`

## Usuarios por Defecto

Al iniciar la aplicación, se crea automáticamente un usuario administrador. Para la entrega adjuntamos la BBDD con algunos usuarios, planes de entrenamiento y ejercicios configurados por nosotros, para que puedas ver las relaciones entre ellos:

-   **Administrador:**

    -   Email: `admin@gmail.com`
    -   Contraseña: `1234`
    -   Rol: ADMIN

-   **Entrenador:**

    -   Email: `hola@entrenador.com`
    -   Contraseña: `1234`
    -   Rol: ENTRENADOR

-   **Atletas:**
    -   **Mariano:**
        -   Email: `hola@mariano.com`
        -   Contraseña: `1234`
        -   Rol: ATLETA
    -   **Pablo:**
        -   Email: `hola@pablo.com`
        -   Contraseña: `1234`
        -   Rol: ATLETA

## Actores y Roles del Sistema

La aplicación cuenta con tres tipos de usuarios, cada uno con su propio panel de acceso:

### 👤 Administrador

Gestiona el sistema de forma global. Acceso completo al sistema que permite:

-   Gestionar usuarios (crear, editar, eliminar)
-   Crear y gestionar programas de entrenamiento
-   Asignar entrenadores a atletas
-   Ver el progreso de todos los usuarios
-   Gestionar ejercicios y sus relaciones con programas

### 🏋️ Entrenador (Coach)

Gestiona atletas asignados y realiza seguimiento. Permite:

-   Ver y gestionar sus atletas asignados
-   Crear programas de entrenamiento personalizados
-   Ver el progreso de sus atletas
-   Asignar programas a atletas
-   Comunicarse con usuarios a través del chat

### 👥 Usuario / Atleta

Consume entrenamientos y registra su progreso. Interfaz para usuarios finales que incluye:

-   Visualización de planes de entrenamiento asignados
-   Registro de progreso personal (peso, repeticiones, tiempo)
-   Consulta de historial de entrenamientos
-   Acceso a comunidad y chat
-   Gestión del perfil personal

## Seguridad del Sistema

-   Autenticación basada en JWT
-   Filtro de seguridad (JwtFilter)
-   Autorización por roles
-   Protección de rutas en frontend y backend
-   Control de acceso a recursos

## Notas Adicionales

-   La aplicación utiliza JWT para la autenticación. Los tokens se almacenan en localStorage.
-   El frontend cuenta con almacenamiento local mediante IndexedDB para funcionalidad offline.
-   Las imágenes se almacenan en la carpeta `uploads/` del backend.
-   El sistema crea automáticamente los roles necesarios al iniciar por primera vez.
