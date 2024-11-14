# Usa la imagen de nginx como base
FROM nginx:alpine

# Copia todos los archivos de la aplicación al directorio de contenido estático de nginx
COPY . /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Inicia el servidor nginx
CMD ["nginx", "-g", "daemon off;"]
