import { Link, Outlet, useLocation } from 'react-router-dom'

const tabs = [
  { name: 'Overview', path: '' },
  { name: 'Financials', path: '/financials' },
  { name: 'Insiders', path: '/insiders' },
  { name: 'Government', path: '/government' },
  { name: 'Investors', path: '/investors' },
  { name: 'News', path: '/news' },
]

export default function StocksPage() {
  const location = useLocation()
  const currentPath = location.pathname.split('/stocks')[1] || ''

  return (
    <div className="container mx-auto p-6">
      {/* Tabs Navigation */}
      <div className="border-b border-white/10 mb-6">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => {
            const isActive = currentPath === tab.path
            return (
              <Link
                key={tab.name}
                to={`/stocks${tab.path}`}
                className={`
                  border-b-2 py-4 px-1 text-sm font-medium
                  ${isActive 
                    ? 'border-white text-white' 
                    : 'border-transparent text-white/50 hover:text-white/70 hover:border-white/30'}
                `}
              >
                {tab.name}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <Outlet />
    </div>
  )
} 