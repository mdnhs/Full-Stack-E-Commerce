# Full-Stack E-Commerce Platform

A modern, feature-rich e-commerce platform built with Next.js 15, Sanity CMS, and TypeScript. This project combines the power of server-side rendering with a headless CMS to deliver a fast, scalable, and maintainable e-commerce solution.

## Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Headless CMS**: Powered by Sanity.io for flexible content management
- **Authentication**: Secure user authentication with Clerk
- **Responsive Design**: Mobile-first approach with a modern UI
- **Performance Optimized**: Leverages Next.js features for optimal loading speeds
- **Type-Safe**: Full TypeScript support with generated types for Sanity content

## Tech Stack

- **Frontend**:
  - Next.js 15 (React Framework)
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - Radix UI Components

- **Backend & CMS**:
  - Sanity.io
  - Next.js API Routes

- **Authentication**:
  - Clerk

- **Development Tools**:
  - ESLint
  - Turbopack
  - Bun Package Manager

## Installation

1. **Clone the repository**:
   ```bash
   git clone [your-repository-url]
   cd Full-Stack-E-Commerce
   ```

2. **Install dependencies**:
   ```bash
   bun install
   ```

3. **Environment Setup**:
   - Copy `.env.example` to `.env.local`
   - Fill in the required environment variables

4. **Start the development server**:
   ```bash
   bun run dev
   ```

5. **Start Sanity Studio** (in a new terminal):
   ```bash
   bun run dev:sanity
   ```

## Configuration

### Environment Variables

Create a `.env.local` file with the following variables:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

### Sanity Schema

To update Sanity schema types:
```bash
bun run typegen
```

## Project Structure

```
├── app/               # Next.js application routes
├── components/        # Reusable React components
├── lib/              # Utility functions and configurations
├── public/           # Static assets
├── sanity/           # Sanity CMS configuration and schemas
└── styles/           # Global styles and Tailwind configuration
```

## Development Workflow

1. Make changes to your code
2. Run `bun run typegen` if you update Sanity schemas
3. Use `bun run dev` with Turbopack for fast development
4. Commit your changes following conventional commit messages

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

- Agregando comando al package.json

```script
  "scripts": {
    "typegen":"bun x sanity@latest schema extract && bun x sanity@latest typegen generate"
    ,
  }
```
