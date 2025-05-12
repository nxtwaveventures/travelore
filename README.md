# Travelore

AI-powered travel content platform that helps users discover extraordinary destinations and create unforgettable experiences.

## Features

- AI-generated travel recommendations
- Personalized itineraries
- Interactive story sharing
- Telegram bot integration
- Newsletter subscription
- MongoDB integration

## Tech Stack

- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- MongoDB
- NextAuth.js
- Vercel Analytics

## Getting Started

1. Clone the repository:
```bash
git clone git@github.com:nxtwaveventures/travelore.git
cd travelore
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:
```env
MONGODB_URI=your_mongodb_uri
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

- `MONGODB_URI`: MongoDB connection string
- `NEXTAUTH_URL`: NextAuth.js URL
- `NEXTAUTH_SECRET`: NextAuth.js secret key
- `VERCEL_ANALYTICS_ID`: Vercel Analytics ID (optional)

## Deployment

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
