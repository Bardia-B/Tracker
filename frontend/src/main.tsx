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
          colorBackground: 'black',
          colorInputBackground: 'black',
          colorInputText: 'white',
          colorText: 'white',
          colorPrimary: 'white',
          colorDanger: 'white',
          colorSuccess: 'white',
          colorTextOnPrimaryBackground: 'black',
          colorTextSecondary: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '0.5rem'
        },
        elements: {
          formButtonPrimary: 'bg-primary text-primary-foreground hover:bg-primary/90',
          card: 'bg-background border border-border',
          headerTitle: 'text-foreground',
          headerSubtitle: 'text-muted-foreground',
          socialButtonsBlockButton: 'bg-background border border-border text-foreground hover:bg-muted',
          formFieldInput: 'bg-background border-border text-foreground',
          footerActionLink: 'text-primary hover:text-primary/90',
          identityPreviewText: 'text-foreground',
          identityPreviewEditButton: 'text-primary hover:text-primary/90',
          formFieldLabel: 'text-foreground',
          dividerLine: 'bg-border',
          dividerText: 'text-muted-foreground',
          formFieldLabelRow: 'text-foreground',
          footer: 'text-muted-foreground'
        }
      }}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>,
)