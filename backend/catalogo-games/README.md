## Apagar los Contenedores

Para detener todos los contenedores definidos en tu archivo docker-compose.yml.

```bash
docker-compose down
```

Esto detendrá y eliminará los contenedores, pero mantendrá los volúmenes (como la base de datos MongoDB) intactos.

## Prender los contenedores

Para iniciar los contenedores nuevamente.

```bash
docker-compose up
```

Si quieres ejecutarlos en segundo plano (modo detached), agrega la opción -d:

```bash
docker-compose up -d
```

## Reconstruir Imagenes

Si has hecho cambios en tu aplicación y necesitas reconstruir las imágenes de Docker.

```bash
docker-compose up --build
```

Esto reconstruirá las imágenes y levantará los contenedores.

## Ver los logs de los contenedores

Puedes ver los logs de tus contenedores para depurar problemas o ver el estado actual.

```bash
docker-compose logs -f
```

Esto mostrará los logs en tiempo real. Puedes especificar un servicio en particular, por ejemplo:

```bash
docker-compose logs -f catalogo-games
```

## Acceder a un contenedor

Si necesitas acceder a un contenedor para ejecutar comandos (por ejemplo, para inspeccionar la base de datos).

```bash
docker exec -it <nombre_del_contenedor> sh
```

Por ejemplo, para acceder al contenedor de MongoDB.

```bash
docker exec -it mongodb bash
```

## Reiniciar un contenedor

```bash
docker-compose restart catalogo-games
```