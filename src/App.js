
import { MultifarmProvider, Dashboard } from '@multifarm/widget'
import '@multifarm/widget/dist/maia.css'

export default function App() {

  return (
      <MultifarmProvider
          token={process.env.REACT_APP_TOKEN}
          theme="maia"
          key="maia"
          provider="maia"
      >
        <Dashboard />
      </MultifarmProvider>
    )
}
