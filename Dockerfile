# Stage 1: Build the React app
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite app
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build output to Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Create a directory for SSL certificates
RUN mkdir -p /etc/nginx/ssl

# Copy SSL certificates into the container
COPY certs/cert.pem /etc/ssl/certs/cert.pem
COPY certs/key.pem /etc/ssl/private/key.pem


# Copy a default nginx config file
# COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port on which Nginx will run
EXPOSE 7000
EXPOSE 80  
# Optional: keep this if you want to allow HTTP traffic

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
