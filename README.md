# 🎮 E-Commerce Gaming Platform (Steam-like)

## 📝 Descripción
Este proyecto es una plataforma de compra y venta de videojuegos similar a Steam. Los usuarios pueden navegar por un catálogo de juegos, agregarlos al carrito, realizar compras mediante una pasarela de pagos y gestionar sus pedidos y cuentas.

## 🏗️ Microservicios
El sistema está diseñado con una arquitectura de microservicios, cada uno enfocado en una funcionalidad específica:

- **🕹️ Catálogo de Juegos** → Gestión de juegos disponibles para la venta.
- **🛒 Carrito de Compras** → Permite a los usuarios agregar y administrar productos antes de la compra.
- **📦 Gestión de Pedidos** → Maneja la creación y el estado de los pedidos.
- **👤 Gestión de Usuarios** → Registro, autenticación y perfil de usuarios.
- **💳 Gestión de Pagos** → Integración con pasarelas de pago para procesar transacciones.

## 🛠️ Tecnologías Utilizadas
### **Frontend:**
- 🚀 **Next.js** → Para una experiencia de usuario rápida y fluida.
- 🎨 **TailwindCSS** → Para un diseño moderno y responsivo.

### **Backend:**
- 🏗 **Node.js** con **Express** o **NestJS** → API robusta y escalable.
- 🛢 **PostgreSQL / MongoDB** → Base de datos relacional o NoSQL.
- 🐳 **Docker & Docker-Compose** → Contenedorización y orquestación.
- 🔗 **gRPC / REST API** → Comunicación eficiente entre microservicios. 

## 🚀 Cómo Ejecutar el Proyecto
### **1️⃣ Clonar el Repositorio**
```sh
 git clone https://github.com/tu-repo/ecommerce-gaming.git
 cd ecommerce-gaming
```

### **2️⃣ Configurar Variables de Entorno**
Crear un archivo `.env` en cada microservicio con la configuración necesaria.

### **3️⃣ Levantar los Microservicios con Docker**
```sh
docker-compose up --build
```
Esto levantará todos los servicios en contenedores Docker.

### **4️⃣ Acceder a la Aplicación**
- **Frontend:** `http://localhost:3000`
- **API Gateway:** `http://localhost:8080`
- **Microservicios:** Puertos individuales según configuración.

## 📜 Contribuciones
Si deseas contribuir, ¡siéntete libre de hacer un fork y enviar PRs! 🚀

## 📩 Contacto
Si tienes preguntas, puedes escribirnos a [tuemail@ejemplo.com](mailto:tuemail@ejemplo.com) 😊

