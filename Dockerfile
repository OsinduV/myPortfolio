# use node base image to have node and npm available
FROM node:14 

# Create /app folder and set it as the working directory
WORKDIR /app

# Copy all necessary files from host into the docker image
COPY server.js .
COPY index.html .
COPY images ./images
COPY package.json .

# execute npm install to install all dependencies listed in package.json
RUN npm install

# expose port 3000
EXPOSE 3000

# execute the command to start the node server
CMD ["node", "server.js"]