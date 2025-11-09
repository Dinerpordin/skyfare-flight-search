# ✈️ SkyFare Flight Search

A professional flight search engine with real-time pricing from 400+ airlines worldwide. Built with Next.js, TypeScript, and Amadeus Flight API.

![Flight Search Interface](https://via.placeholder.com/800x400/1e3a8a/ffffff?text=SkyFare+Flight+Search)

## 🌟 Features

- **Real-time Flight Data**: Access live flight prices and availability from 400+ airlines
- **Multi-City Search**: Search for one-way, round-trip, and multi-city flights
- **Advanced Filters**: Filter by stops, price, airline, departure time, and duration
- **Professional UI**: Modern, responsive design inspired by leading travel platforms
- **Date Range Selection**: Flexible date picker with calendar view
- **Price Comparison**: Compare prices across different dates and airlines
- **Mobile Responsive**: Fully optimized for all devices

## 🚀 Tech Stack

- **Framework**: Next.js 14 (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: Amadeus Flight Search API (Free Tier)
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **HTTP Client**: Axios

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18.x or higher
- npm or yarn package manager
- Amadeus API credentials (free)

## 🔑 Getting Amadeus API Keys (FREE)

1. Visit [Amadeus for Developers](https://developers.amadeus.com/)
2. Click "Register" and create a free account
3. Go to "My Self-Service Workspace"
4. Create a new app
5. Copy your **API Key** and **API Secret**
6. Free tier includes:
   - 2,000 API calls/month for Flight Offers Search
   - Access to 400+ airlines
   - Real-time pricing
   - No credit card required

## ⚙️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/Dinerpordin/skyfare-flight-search.git
cd skyfare-flight-search
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Amadeus API credentials:
```env
AMADEUS_API_KEY=your_api_key_here
AMADEUS_API_SECRET=your_api_secret_here
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deploy to Vercel

### One-Click Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Dinerpordin/skyfare-flight-search)

### Manual Deployment

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

4. **Set Environment Variables in Vercel**
   - Go to your project settings on Vercel
   - Navigate to "Environment Variables"
   - Add:
     - `AMADEUS_API_KEY`
     - `AMADEUS_API_SECRET`

5. **Redeploy**
```bash
vercel --prod
```

## 📁 Project Structure

```
skyfare-flight-search/
├── pages/
│   ├── api/
│   │   └── flights/
│   │       └── search.ts       # Flight search API endpoint
│   ├── _app.tsx                # Next.js app component
│   └── index.tsx               # Home page
├── components/
│   ├── SearchForm.tsx          # Flight search form
│   ├── FlightCard.tsx          # Flight result card
│   ├── FilterPanel.tsx         # Search filters
│   └── DatePicker.tsx          # Custom date picker
├── lib/
│   └── amadeus.ts              # Amadeus API client
├── styles/
│   └── globals.css             # Global styles
├── public/
│   └── images/                 # Static assets
├── .env.example                # Environment variables template
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🎨 UI Components

The interface includes:

- **Search Form**: Origin/destination autocomplete, date picker, passenger selector
- **Filter Panel**: Price range, stops, airlines, departure time
- **Flight Cards**: Airline logo, flight times, duration, price, stops
- **Sort Options**: Best, cheapest, fastest flights
- **Loading States**: Skeleton loaders during API calls
- **Empty States**: No results found messaging

## 🔧 Configuration

### Tailwind CSS
Customize colors and styling in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        secondary: '#3b82f6',
      },
    },
  },
}
```

### API Rate Limits
Free tier limits:
- 2,000 requests/month
- Implement caching for frequently searched routes
- Consider upgrading for production use

## 📱 API Endpoints

### Search Flights
```
POST /api/flights/search

Body:
{
  "originLocationCode": "LHR",
  "destinationLocationCode": "JFK",
  "departureDate": "2025-12-01",
  "returnDate": "2025-12-15",
  "adults": 1,
  "travelClass": "ECONOMY"
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Amadeus for Developers](https://developers.amadeus.com/) for the Flight API
- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vercel](https://vercel.com/) for hosting

## 📞 Support

For support, email support@skyfare.com or open an issue in the GitHub repository.

## 🚧 Roadmap

- [ ] Add hotel search integration
- [ ] Implement user authentication
- [ ] Save favorite routes
- [ ] Price alerts
- [ ] Booking functionality
- [ ] Multi-language support
- [ ] Dark mode

---

**Built with ❤️ by [Dinerpordin](https://github.com/Dinerpordin)**