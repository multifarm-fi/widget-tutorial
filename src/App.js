
import { MultifarmProvider, Dashboard } from '@multifarm/widget'

export default function App() {

  return (
      <MultifarmProvider token={process.env.REACT_APP_TOKEN} theme="maia" key="maia" provider="maia" 
      themeColors='linear-gradient(197.3deg, #072154 0%, #345FB0 22.92%, #9B74D1 48.96%, #B67ADA 64.69%, #8A62BC 82.29%, #453B8D 100%)'>
        <Dashboard />
      </MultifarmProvider>
    )
}