This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy on EdgeOne

This project is optimized for deployment on [EdgeOne Pages](https://pages.edgeone.ai/).

### Image Optimization Configuration

⚠️ **Important**: EdgeOne currently does not support Next.js's built-in Image Optimization API (`/_next/image`). When using the `<Image>` component, you must disable image optimization in `next.config.ts`:

```typescript
const nextConfig = {
  images: {
    unoptimized: true, // Required for EdgeOne compatibility
    domains: ['images.pexels.com'], // Add your remote image domains
  },
};
```

**Why is this needed?**

- **Next.js behavior**: The `<Image>` component uses `/_next/image` API for **ALL images** (both local and remote)
- **Without unoptimized**: 
  - Local images: `/_next/image?url=%2Fprofile.jpeg&w=640&q=75`
  - Remote images: `/_next/image?url=https%3A%2F%2Fexample.com%2Fimage.jpg&w=640&q=75`
- **EdgeOne limitation**: The `/_next/image` handler is not implemented, causing all images to fail
- **Solution**: Set `unoptimized: true` to make images use their original URLs directly

For detailed information about this issue and alternative solutions, see [EDGEONE_IMAGE_OPTIMIZATION.md](./EDGEONE_IMAGE_OPTIMIZATION.md).

### Deployment Steps

```bash
# Build the project
npm run build

# Deploy to EdgeOne
edgeone pages deploy
```
