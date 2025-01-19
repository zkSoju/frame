# Frame - Next.js Web3 Template

A modern, opinionated Next.js 15+ template for building Web3 applications with best practices and powerful development features.

## Features

- 🏗️ Built with Next.js 15+ (App Router)
- 🔐 Web3 authentication with Dynamic
- 🎨 Styled with Tailwind CSS + shadcn/ui
- 🔥 Type-safe with TypeScript
- 📦 State management with Zustand
- 🌐 Web3 integration with Wagmi V2 + Viem V2
- 🗃️ Database with Supabase
- 🚀 Fast data fetching with SWR
- 📏 Code formatting with Prettier
- 🧪 Linting with ESLint

## Quick Start

1. Create a new repository using this template:
   ```bash
   git clone https://github.com/yourusername/frame.git
   cd frame
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. Set up your environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Update the following variables in `.env.local`:
   ```
   # Authentication
   NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID=
   NEXT_PUBLIC_DYNAMIC_APP_ID=

   # Database
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=
   SUPABASE_SERVICE_ROLE_KEY=

   # Web3
   NEXT_PUBLIC_WALLET_CONNECT_ID=
   ```

5. Start the development server:
   ```bash
   pnpm dev
   ```

## Project Structure

The template follows a feature-based structure and uses `.cursorrules` for AI-assisted development:

```
├── .cursorrules      # AI development rules
├── app/              # Next.js app directory
├── components/       # React components
├── lib/             # Shared utilities
├── styles/          # Global styles
├── types/           # TypeScript definitions
├── actions/         # Server actions
└── state/          # State management
```

## AI-Assisted Development

### .cursorrules

The `.cursorrules` file is a crucial part of this template, providing context and rules for AI-assisted development through Cursor. It helps maintain consistency and best practices across your project.

#### Purpose
- Provides project context to AI
- Defines code structure and conventions
- Maintains consistent patterns
- Guides AI responses for better assistance

#### Maintaining .cursorrules

As your project evolves, keep the `.cursorrules` file updated:

1. **Project Context**: 
   - Update the project description
   - Add new major features
   - Document architectural decisions

2. **Code Structure**:
   - Keep directory structure current
   - Add new directories with descriptions
   - Update naming conventions

3. **Tech Stack**:
   - Update versions of core technologies
   - Add new dependencies
   - Remove unused technologies

4. **Best Practices**:
   - Document new coding patterns
   - Update TypeScript guidelines
   - Add security considerations

Example update workflow:
```bash
# When adding a new feature directory
1. Add directory to project
2. Update .cursorrules structure
3. Document any new conventions
4. Commit changes with:
   git commit -m "docs: update .cursorrules with new feature structure"
```

## Development Guidelines

### Code Style

- Follow the TypeScript guidelines in `.cursorrules`
- Use absolute imports with `@/` prefix
- Follow naming conventions:
  - PascalCase for components
  - camelCase for utilities
  - kebab-case for directories

### State Management

- Use Zustand for global state
- Use SWR for data fetching
- Keep state as local as possible
- Implement proper cleanup in effects

### Commit Convention

Format: `type: description`

Types:
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring
- `test:` Testing
- `chore:` Maintenance

## Available Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
pnpm format     # Format code with Prettier
```

## Tech Stack Details

### Frontend
- **Framework:** Next.js 15+
- **Styling:** TailwindCSS + shadcn/ui
- **State:** Zustand + SWR
- **Components:** TypeScript + React

### Web3
- **Authentication:** Dynamic
- **Blockchain:** Wagmi V2 + Viem V2
- **Wallet:** WalletConnect

### Backend
- **Database:** Supabase
- **API:** Next.js API Routes
- **Authentication:** Dynamic

## Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FzkSoju%2Fframe)

1. Click "Deploy with Vercel" above
2. Set up required environment variables
3. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes following the commit convention
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this template for any project!

## Acknowledgments

Built with these amazing technologies:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [SWR](https://swr.vercel.app/)
- [Wagmi](https://wagmi.sh/)
- [Viem](https://viem.sh/)
- [Dynamic](https://www.dynamic.xyz/)
- [Supabase](https://supabase.com/)
