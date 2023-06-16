# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the application files into the container
COPY . .

# Build the React app
RUN npm run build

# Expose the desired port (change it if your React app uses a different port)
EXPOSE 3000

# Start the React app when the container launches
CMD [ "npm", "start" ]