
import { MultifarmProvider, Dashboard } from '@multifarm/widget'
import '@multifarm/widget/dist/maia.css'

const GRADIENT = 'linear-gradient(197.3deg, #072154 0%, #345FB0 22.92%, #9B74D1 48.96%, #B67ADA 64.69%, #8A62BC 82.29%, #453B8D 100%)'

export default function App() {

  return (
      <div style={{backgroundImage: GRADIENT, padding: '100px'}}>
          <MultifarmProvider
              token={process.env.REACT_APP_TOKEN}
              theme="maia"
              key="maia"
              provider="maia"
          >
              <Dashboard />
          </MultifarmProvider>
      </div>
    )
}
