# Use an official Node.js runtime as a parent image
FROM node:21.7.2

# Set the working directory inside the container
WORKDIR /root/bem-web

# Copy the package.json and package-lock.json files first to leverage Docker cache
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Ensure the environment variables are available at build time (optional)
# ARG REACT_APP_API_BASE_URL
# ARG REACT_APP_API_PORT
# ARG REACT_APP_ENV
# ARG SPECIES_LINK_KEY

# Build the app for production
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
