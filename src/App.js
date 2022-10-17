
import { MultifarmProvider, Dashboard } from '@multifarm/widget'
import '@multifarm/widget/dist/redacted.css'

const GRADIENT = '#040309'

export default function App() {

  return (
      <div style={{backgroundImage: GRADIENT, padding: '100px'}}>
          <MultifarmProvider
              token={process.env.REACT_APP_TOKEN}
              theme="redacted"
              key="redacted"
              provider="redacted"
              themeColors="dark"
              strategyTypesConfig={{
                wallet: {
                  cols: {
                    apr_y: false,
                    month_earnings: false
                  }
                },
                claimable: {
                  cols: {
                    apr_y: false,
                    month_earnings: false
                  }
                }
              }}
          >
              <Dashboard />
          </MultifarmProvider>
      </div>
    )
}
