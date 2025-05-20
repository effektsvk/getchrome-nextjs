# getchro.me

A simple web application that allows users to install Google Chrome with a single command. Visit [getchro.me](https://getchro.me) to use it.

- **Windows**: `irm getchro.me | iex` (PowerShell)
- **curl**: `curl getchro.me | bash`

## Features

- 🚀 **Fast & Simple**: Install Chrome without needing a browser
- 🔄 **Latest Version**: Always installs the current Chrome release
- 🤫 **Silent Install**: No clicks or prompts needed
- 💼 **IT Friendly**: Perfect for new computer setup

## How It Works

1. Run the installer command:
   - **Windows**: `irm getchro.me | iex`
   - **curl**: `curl getchro.me | bash`
2. Our server detects the User-Agent (`PowerShell` or `curl`) and serves the corresponding installation script
3. Chrome installs automatically and silently

## Tech Stack

- [Next.js](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [shadcn/ui](https://ui.shadcn.com) - UI components
- [PostHog](https://posthog.com) - Analytics

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=your_posthog_host
```

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Made with ❤️ by [Erik](https://github.com/effektsvk)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
