
import { MultifarmProvider, Dashboard } from '@multifarm/widget'
import '@multifarm/widget/dist/digits.css'

const GRADIENT = 'radial-gradient(50% 255.75% at 50% 50%, #00198F 0%, #000002 100%)'

export default function App() {

  return (
      <div style={{backgroundImage: GRADIENT, padding: '100px'}}>
          <MultifarmProvider
              token={process.env.REACT_APP_TOKEN}
              theme="digits"
              key="digits"
              provider="digits"
              themeColors="dark"
          >
              <Dashboard />
          </MultifarmProvider>
      </div>
    )
}
