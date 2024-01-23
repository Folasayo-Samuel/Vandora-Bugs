# Use an official Node.js runtime as a base image
FROM node:18.17.0-alpine AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# ENV NPM_CONFIG_FETCH_RETRY_MINTIMEOUT 100000

# Install dependencies
RUN npm install

# Install dependencies and generate Prisma client
# RUN npm install && npx prisma generate


# Copy the rest of the application code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the Next.js application
RUN npm run build

# Expose the port that Next.js will run on
EXPOSE 3000

# Run the Next.js application
CMD ["npm", "start"]

