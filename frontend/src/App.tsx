import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react'
import { LineChart, Wallet, TrendingUp, Users, User, Search } from 'lucide-react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import PoliticiansPage from './features/politicians/PoliticiansPage'
import StocksPage from './features/stocks/StocksPage'
import OverviewPage from './features/stocks/pages/OverviewPage'
import FinancialsPage from './features/stocks/pages/FinancialsPage'
import InsidersPage from './features/stocks/pages/InsidersPage'
import GovernmentPage from './features/stocks/pages/GovernmentPage'
import InvestorsPage from './features/stocks/pages/InvestorsPage'
import NewsPage from './features/stocks/pages/NewsPage'

function SignedInHome() {
  // Placeholder data - replace with real data later
  const trendingItems = [
    {
      type: 'politician',
      name: 'Nancy Pelosi',
      title: 'Dem - House',
      avatar: '/avatars/pelosi.jpg'
    },
    {
      type: 'politician',
      name: 'Kamala Harris',
      title: 'Dem - VP',
      avatar: '/avatars/harris.jpg'
    },
    {
      type: 'politician',
      name: 'J. D. Vance',
      title: 'Rep - Senate',
      avatar: '/avatars/vance.jpg'
    }
  ]

  const dashboards = [
    {
      title: 'Congress Trading',
      subtitle: 'See Dashboard',
      icon: '📊'
    },
    {
      title: 'Corporate Lobbying',
      subtitle: 'See Dashboard',
      icon: '📈'
    },
    {
      title: 'Fear and Greed Index',
      subtitle: 'See Dashboard',
      icon: '📉'
    }
  ]

  const stocks = [
    {
      symbol: 'TEM',
      name: 'Tempus AI Inc.',
      price: '61.54',
      change: '+12.89%',
      changeType: 'positive'
    },
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corp.',
      price: '116.66',
      change: '-1.06%',
      changeType: 'negative'
    },
    {
      symbol: 'VST',
      name: 'Vista Corp.',
      price: '168.53',
      change: '+2.81%',
      changeType: 'positive'
    }
  ]

  return (
    <div className="container mx-auto px-4 pt-12 pb-8">
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Hero Text */}
        <div className="text-center space-y-1 animate-fade-in mb-6">
          <h1 className="text-3xl font-bold text-white">Discover Market Insights</h1>
          <p className="text-base text-gray-400">Real-time tracking of political and corporate trading activities</p>
        </div>

        {/* Search Bar */}
        <div className="relative animate-fade-in-up mb-4">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search stocks, politicians, and more..."
            className="w-full h-11 bg-[#1A1A1A] text-white placeholder:text-gray-500 rounded-lg pl-10 pr-4 border border-gray-800 focus:outline-none focus:border-gray-700 focus:ring-1 focus:ring-gray-700 transition-all duration-200"
          />
        </div>

        {/* Politicians Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {trendingItems.map((item, index) => (
            <Link
              key={item.name}
              to={`/politicians/${item.name.toLowerCase().replace(' ', '-')}`}
              className={`group flex items-center gap-3 bg-[#1A1A1A] p-3 rounded-lg hover:bg-[#242424] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-8 h-8 rounded-full bg-gray-800 overflow-hidden group-hover:ring-2 ring-white/20 transition-all duration-300">
                <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-white group-hover:text-white/90">Track {item.name}</div>
                <div className="text-xs text-gray-500">{item.title}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Dashboards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {dashboards.map((dashboard, index) => (
            <Link
              key={dashboard.title}
              to="/dashboard"
              className={`group flex items-center gap-3 bg-[#1A1A1A] p-3 rounded-lg hover:bg-[#242424] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20 animate-fade-in-up`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="text-2xl group-hover:scale-110 transition-transform duration-300">{dashboard.icon}</div>
              <div className="flex-1">
                <div className="text-sm font-medium text-white group-hover:text-white/90">{dashboard.title}</div>
                <div className="text-xs text-gray-500">{dashboard.subtitle}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {stocks.map((stock, index) => (
            <Link
              key={stock.symbol}
              to={`/stocks/${stock.symbol}`}
              className={`group flex items-center justify-between bg-[#1A1A1A] p-3 rounded-lg hover:bg-[#242424] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20 animate-fade-in-up`}
              style={{ animationDelay: `${(index + 6) * 100}ms` }}
            >
              <div>
                <div className="text-sm font-medium text-white group-hover:text-white/90">{stock.symbol}</div>
                <div className="text-xs text-gray-500">{stock.name}</div>
              </div>
              <div className={`text-sm ${stock.changeType === 'positive' ? 'text-green-500' : 'text-red-500'} group-hover:scale-110 transition-transform duration-300`}>
                {stock.change}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function SignedOutHome() {
  return (
    <>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <TrendingUp className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">InsiderTracker</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Track Insider Trading Like Never Before
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Monitor stock trades of politicians, CEOs, and executive members. Get real-time insights into insider trading patterns.
          </p>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="inline-flex items-center justify-center rounded-lg text-base font-medium bg-white text-black hover:bg-white/90 transition-colors h-12 px-8">
                Start Tracking Now
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-black">
            <LineChart className="h-12 w-12 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Real-time Tracking</h3>
            <p className="text-white/70">Monitor insider trading activities as they happen with our real-time tracking system.</p>
          </div>
          <div className="p-8 rounded-xl bg-black">
            <Users className="h-12 w-12 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Comprehensive Coverage</h3>
            <p className="text-white/70">Track trades from politicians, CEOs, and executive members across all major companies.</p>
          </div>
          <div className="p-8 rounded-xl bg-black">
            <Wallet className="h-12 w-12 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Smart Analytics</h3>
            <p className="text-white/70">Get detailed analytics and insights into trading patterns and trends.</p>
          </div>
        </div>
      </div>
    </>
  )
}

function HomePage() {
  return (
    <>
      <SignedIn>
        <SignedInHome />
      </SignedIn>
      <SignedOut>
        <SignedOutHome />
      </SignedOut>
    </>
  )
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <SignedIn>
          <nav className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-sm border-b border-white/10 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <Link to="/" className="flex items-center space-x-2">
                  <TrendingUp className="h-6 w-6 text-white" />
                  <span className="text-lg font-bold text-white">InsiderTracker</span>
                </Link>
                <div className="flex items-center space-x-4">
                  <Link to="/politicians" className="text-white/70 hover:text-white transition-colors">
                    Politicians
                  </Link>
                  <Link to="/stocks" className="text-white/70 hover:text-white transition-colors">
                    Stocks
                  </Link>
                </div>
              </div>
              <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </button>
            </div>
          </nav>
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/politicians" element={<PoliticiansPage />} />
              <Route path="/stocks" element={<StocksPage />}>
                <Route index element={<OverviewPage />} />
                <Route path="financials" element={<FinancialsPage />} />
                <Route path="insiders" element={<InsidersPage />} />
                <Route path="government" element={<GovernmentPage />} />
                <Route path="investors" element={<InvestorsPage />} />
                <Route path="news" element={<NewsPage />} />
              </Route>
            </Routes>
          </div>
        </SignedIn>

        <SignedOut>
          <HomePage />
        </SignedOut>
      </div>
    </Router>
  )
}