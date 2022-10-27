import {
  MultifarmProvider,
  RedactedDashboard,
} from '@multifarm/widget/dist/redacted';

export default function App() {
  return (
    <div style={{ background: '#040308', padding: '100px' }}>
      <MultifarmProvider
        token={process.env.REACT_APP_TOKEN}
        theme="redacted"
        provider="redacted"
        themeColors="dark"
      >
        <RedactedDashboard />
      </MultifarmProvider>
    </div>
  );
}
