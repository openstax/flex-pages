import React from 'react';
import { getToken, setToken, clearToken } from '../lib/github';

export const TokenInput = ({onTokenChange}: {onTokenChange: (token: string | null) => void}) => {
  const [value, setValue] = React.useState('');
  const stored = getToken();

  if (stored) {
    const masked = `****${stored.slice(-4)}`;
    return <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
      <span>GitHub token: <code>{masked}</code></span>
      <button type="button" onClick={() => { clearToken(); onTokenChange(null); }}>Clear</button>
    </div>;
  }

  return <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
    <input
      type="password"
      placeholder="GitHub Personal Access Token"
      value={value}
      onChange={e => setValue(e.target.value)}
      style={{width: '300px'}}
    />
    <button type="button" onClick={() => { if (value) { setToken(value); onTokenChange(value); setValue(''); } }}>
      Save Token
    </button>
  </div>;
};
