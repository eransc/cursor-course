# Task 32: Project Setup with NextJS, TailwindCSS, and ShadUI

**Status:** pending
**Priority:** high

## Description
Initialize the project structure using NextJS App Directory, configure TailwindCSS for styling, and integrate ShadUI for reusable components.

## Details
1. Create a new NextJS project using the App Directory structure:
```bash
npx create-next-app@latest chatbot-app --typescript --eslint --app
```
2. Install and configure TailwindCSS:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
3. Configure tailwind.config.js to include app paths
4. Install and set up ShadUI components:
```bash
npm install @shadcn/ui
npx shadcn-ui init
```
5. Create basic folder structure following NextJS App Directory conventions:
   - app/
     - layout.tsx
     - page.tsx
     - components/
     - lib/
     - api/
6. Set up environment variables (.env.local) for API keys and endpoints

## Test Strategy
1. Verify project builds without errors using 'npm run build'
2. Confirm NextJS dev server starts correctly with 'npm run dev'
3. Validate TailwindCSS is working by applying and testing basic styles
4. Test ShadUI component rendering by implementing a simple button or card component
5. Ensure environment variables are properly loaded using a test component

## Subtasks

### 32.1: Initialize NextJS Project with TypeScript
**Status:** done

Create a new NextJS project using the App Directory structure with TypeScript and ESLint support.

**Details:** Run the following command to create a new NextJS project:

npx create-next-app@latest chatbot-app --typescript --eslint --app

After initialization, navigate to the project directory:

cd chatbot-app

Verify the project structure has been created correctly with the app directory and TypeScript configuration files.

### 32.2: Install and Configure TailwindCSS
**Status:** done

Set up TailwindCSS for styling the application, including proper configuration for the NextJS App Directory structure.

**Details:** Install TailwindCSS and its dependencies:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Update the tailwind.config.js file to include app paths:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your globals.css file in the app directory:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 32.3: Install and Set Up ShadUI Components
**Status:** pending

Integrate ShadUI for reusable UI components and configure it to work with the project's TailwindCSS setup.

**Details:** Install ShadUI:

npm install @shadcn/ui

Initialize ShadUI with the CLI tool:

npx shadcn-ui init

During initialization, select the following options:
- TypeScript: Yes
- Style: Default (or your preference)
- Base color: Slate (or your preference)
- Global CSS path: app/globals.css
- CSS variables: Yes
- React Server Components: Yes
- Components directory: components/ui
- Utility directory: lib/utils

After initialization, install a basic component to test the setup:

npx shadcn-ui add button

### 32.4: Create Project Folder Structure
**Status:** pending

Set up the recommended folder structure following NextJS App Directory conventions for organized code management.

**Details:** Create the following folder structure within the app directory:

- app/
  - layout.tsx (Update with proper metadata and global styles)
  - page.tsx (Main entry point)
  - components/ (For custom application components)
    - ui/ (Already created by ShadUI)
  - lib/ (For utility functions and shared code)
    - utils.ts (Already created by ShadUI)
  - api/ (For API routes)
    - chat/
      - route.ts (Will be implemented later)

Update the app/layout.tsx file with proper metadata and structure:

```typescript
export const metadata = {
  title: 'Chat Application',
  description: 'A modern chat application built with NextJS, TailwindCSS, and ShadUI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background">{children}</body>
    </html>
  );
}
```

### 32.5: Configure Environment Variables
**Status:** done

Set up environment variables for API keys and endpoints, ensuring proper configuration for both development and production environments.

**Details:** Create a .env.local file in the project root with placeholders for required environment variables:

```
# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Supabase Configuration (for future use)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

Create a .env.example file with the same structure but without actual values for version control.

Add .env.local to .gitignore to prevent committing sensitive information.

Create a configuration file at lib/config.ts to access environment variables:

```typescript
export const config = {
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
  },
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
};
```

