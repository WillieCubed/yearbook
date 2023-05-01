# Yearbook

This is an interactive, personalized yearbook featuring a Spotify Wrapped-like
recap experience and an interface that allows students to show off the cool
things they've done.

A live deployment can be found at [yearbook.williecubed.dev](yearbook.williecubed.dev).

## Getting Started

After cloning the repository and installing the rependencies using
`npm install`, run the development server:

```bash
npm run dev
# or
yarn dev
```

Make sure you install the Git hooks for Prettier:

```shell
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Setting up Supabase

```
npx supabase login
npx supabase link --project-ref <SUPABASE_PROJECT_ID>
```

#### Creating Environment Variables

Create a .env.local at the root of the project:

```shell
# Not required, but can be used to customize editor used when debugging
REACT_EDITOR=code
# All required
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_KEY=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

### Generate Database Types

From the project root, run:

```shell
npm run update-types
```

### Deployment

TODO
