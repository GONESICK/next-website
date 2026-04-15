# Corporate Showcase Website

A modern corporate showcase website built with Next.js, TypeScript, TailwindCSS, shadcn/ui, and MongoDB Atlas.

## Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, React 18
- **Styling**: TailwindCSS, shadcn/ui components
- **Backend**: Next.js API Routes
- **Database**: MongoDB Atlas with Mongoose
- **Email**: Resend API
- **Deployment**: Vercel (recommended)

## Features

- Responsive design with mobile-first approach
- Dynamic industry trends content from MongoDB
- Contact form with email notifications
- Modern UI with shadcn/ui components
- SEO optimized
- Type-safe with TypeScript

## Pages

- **Home**: Hero section, features, services preview, CTA
- **About**: Company mission, values, team, statistics
- **Services**: Detailed service offerings with features
- **Industry Trends**: Dynamic content with category filtering
- **Contact**: Contact form with validation and email sending

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account (free tier works)
- Resend account for email sending (optional)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd windsurf
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your credentials:
```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your-email@example.com
```

4. Seed the database with sample data:
```bash
npm run seed
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Setup

### MongoDB Atlas

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier)
3. Create a database user with read/write permissions
4. Get your connection string from the Atlas dashboard
5. Add the connection string to your `.env.local` file

### Resend (Optional - for contact form emails)

1. Create a free account at [Resend](https://resend.com)
2. Get your API key from the dashboard
3. Verify your domain or use Resend's provided domain
4. Add the API key to your `.env.local` file

## Project Structure

```
windsurf/
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   │   ├── page.tsx          # Home page
│   │   │   ├── about/page.tsx    # About page
│   │   │   ├── services/page.tsx # Services page
│   │   │   ├── industry-trends/page.tsx # Industry trends page
│   │   │   └── contact/page.tsx  # Contact page
│   │   ├── api/
│   │   │   ├── trends/route.ts   # Trends API endpoints
│   │   │   └── contact/route.ts  # Contact form endpoint
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── layout/               # Header, Footer
│   │   └── ui/                   # shadcn/ui components
│   ├── lib/
│   │   ├── mongodb.ts            # Database connection
│   │   ├── models/               # Mongoose schemas
│   │   ├── utils.ts              # Utility functions
│   │   └── seed.ts               # Database seed script
│   └── types/                    # TypeScript types
├── public/                       # Static assets
└── .env.local                    # Environment variables
```

## API Endpoints

### Trends API

- `GET /api/trends` - Get all trends
- `GET /api/trends?category=Technology` - Get trends by category
- `GET /api/trends?featured=true` - Get featured trends
- `POST /api/trends` - Create new trend
- `PUT /api/trends/[id]` - Update trend
- `DELETE /api/trends/[id]` - Delete trend

### Contact API

- `POST /api/contact` - Submit contact form

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Make sure to add these in your Vercel project settings:
- `MONGODB_URI`
- `RESEND_API_KEY` (optional)
- `CONTACT_EMAIL` (optional)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run seed` - Seed database with sample data

## Customization

### Styling

The project uses TailwindCSS with custom CSS variables defined in `src/app/globals.css`. You can customize the color scheme by modifying the CSS variables.

### Components

shadcn/ui components are located in `src/components/ui/`. You can add more components using the shadcn/ui CLI or manually.

### Content

Industry trends content is stored in MongoDB. You can manage content through the API endpoints or directly in MongoDB Atlas.

## License

This project is licensed under the MIT License.
