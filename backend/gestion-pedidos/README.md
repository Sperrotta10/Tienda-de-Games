## Verifica si ya estás en el grupo docker:
Ejecuta el siguiente comando para verificar si tu usuario ya está en el grupo docker:

```bash
groups
```

Si no ves docker en la lista, necesitas agregar tu usuario al grupo.

##  Agrega tu usuario al grupo docker:
Ejecuta el siguiente comando para agregar tu usuario al grupo docker:

```bash
sudo usermod -aG docker $USER
```

## Reinicia la sesión:
Para que los cambios surtan efecto, cierra la sesión y vuelve a iniciarla, o reinicia tu sistema.
También puedes ejecutar el siguiente comando para aplicar los cambios sin reiniciar:

```bash
newgrp docker
```
