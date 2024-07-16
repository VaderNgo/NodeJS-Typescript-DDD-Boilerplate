# Node.js TypeScript DDD Boilerplate

[![Node.js](https://img.shields.io/badge/Node.js-v14.17-green?logo=node.js)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v4.5.2-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Redis](https://img.shields.io/badge/Redis-v6.2-red?logo=redis)](https://redis.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v4.4.10-brightgreen?logo=mongodb)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-v8.5.1-orange)](https://jwt.io/)
[![Swagger](https://img.shields.io/badge/Swagger-v4.0-purple?logo=swagger)](https://swagger.io/)

A boilerplate for building Node.js applications using TypeScript and Domain-Driven Design principles. This setup includes Redis for caching, MongoDB via Mongoose for database operations, JWT for authentication, and Swagger for API documentation.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
  - [application](#application)
  - [config](#config)
  - [domain](#domain)
  - [infrastructure](#infrastructure)
  - [interface](#interface)
  - [shared](#shared)
  - [template](#template)
  - [worker](#worker)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **TypeScript:** Write code in TypeScript for improved type safety and maintainability.
- **Domain-Driven Design (DDD):** Organize your application into distinct layers based on domain concepts.
- **Redis:** Utilize Redis for caching to improve application performance.
- **MongoDB with Mongoose:** Interact with MongoDB using the Mongoose ORM for schema management.
- **JWT Authentication:** Secure your APIs with JSON Web Tokens for authentication and authorization.
- **Swagger:** Automatically generate API documentation with Swagger.

## Getting Started

### Prerequisites

Ensure you have Node.js (v14.17 or higher) and npm installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your/repository.git
   cd repository-name
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
### Configuration
  Create a .env file based on .env.example and configure your environment variables, including MongoDB connection URI, Redis server details, JWT secret, etc.

# Project Structure
  ```bash
  /src
  │
  ├── /application     # Use cases and business logic implementations
  ├── /config          # Configuration files (database, authentication, etc.)
  ├── /domain          # Domain entities, repositories, services
  ├── /infrastructure  # Adapters for external interfaces (MongoDB, Redis, etc.)
  ├── /interface       # API controllers, GraphQL resolvers, etc.
  ├── /shared          # Shared utilities, constants, and cross-cutting concerns
  ├── /template        # Template rendering logic (if applicable)
  └── /worker          # Background job processing logic (if applicable)
  ```
### application
Contains use cases and business logic implementations that orchestrate interactions between domain entities and infrastructure services.

### config
Houses configuration files such as database connections, authentication settings, and environment variables.

### domain
Defines domain entities, repositories for data access, and services encapsulating core business logic.

### infrastructure
Implements adapters for external interfaces like databases (MongoDB with Mongoose), caching (Redis), external APIs, etc.

### interface
Handles external communication interfaces such as API controllers, GraphQL resolvers, WebSocket handlers, etc.

### shared
Includes shared utilities, helper functions, constants, and other cross-cutting concerns used across different layers.

### template
Deals with template rendering logic if your application sends templated emails or generates documents.

### worker
Contains background job processing logic using task queues or job schedulers (like Bull, Agenda, etc.) if applicable.

# Contributing
Contributions are welcome! Fork the repository and submit pull requests.
