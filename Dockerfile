# Utiliza una imagen base de Node
FROM node:lts

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia los archivos del proyecto al contenedor
COPY . .

RUN npm update

# Inicia la aplicación
CMD ["npm", "start"]
