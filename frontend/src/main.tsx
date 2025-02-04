import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

// Add dark theme to html element
document.documentElement.classList.add('dark')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        baseTheme: dark,
        variables: {
          colorBackground: '#000000',
          colorInputBackground: '#000000',
          colorInputText: '#ffffff',
          colorText: '#ffffff',
          colorPrimary: '#ffffff',
          colorDanger: '#ffffff',
          colorSuccess: '#ffffff',
          colorTextOnPrimaryBackground: '#000000',
          colorTextSecondary: '#ffffff',
          borderRadius: '0.75rem'
        },
        elements: {
          rootBox: 'flex min-h-screen items-center justify-center bg-black',
          card: 'bg-black w-[400px] p-8 rounded-xl',
          headerTitle: 'text-white text-2xl font-bold text-center mb-2',
          headerSubtitle: 'text-white/70 text-center text-base mb-6',
          socialButtonsBlockButton: 'bg-black text-white hover:bg-white/10 transition-colors h-12 text-base',
          formButtonPrimary: 'bg-white text-black hover:bg-white/90 transition-colors h-12 text-base font-semibold shadow-xl shadow-white/10',
          formFieldInput: 'bg-black text-white focus:border-white/40 transition-colors h-12 bg-white/5',
          footerActionLink: 'text-white hover:text-white/80 transition-colors font-medium',
          identityPreviewText: 'text-white text-lg',
          identityPreviewEditButton: 'text-white hover:text-white/80 transition-colors',
          formFieldLabel: 'text-white/70 text-base font-medium',
          dividerLine: 'bg-white/10',
          dividerText: 'text-white/40 text-base',
          formFieldLabelRow: 'text-white',
          footer: 'text-white/40 text-base',
          card__background: 'bg-black',
          navbar: 'hidden',
          main: 'p-0 w-full',
          form: 'gap-6',
          formField: 'gap-3',
          formFieldRow: 'gap-3',
          formButtonPrimary__icon: 'text-black w-5 h-5',
          formFieldInput__input: 'px-4 bg-transparent text-base',
          otpCodeFieldInput: 'h-12 text-lg font-mono bg-white/5',
          alternativeMethodsBlockButton: 'hover:bg-white/10 bg-white/5',
          alert: 'bg-white/5',
          avatarBox: 'border border-white/20',
          organizationSwitcherTrigger: 'bg-white/5',
          organizationPreview: 'bg-white/5',
          userPreview: 'bg-white/5',
          card__backdrop: 'backdrop-blur-xl'
        },
        layout: {
          socialButtonsPlacement: 'bottom',
          socialButtonsVariant: 'blockButton'
        }
      }}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>,
)