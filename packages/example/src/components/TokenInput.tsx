import React from 'react';
import { clearToken, getToken, setToken } from '../lib/github';
import styles from './TokenInput.module.css';

export const TokenInput = ({onTokenChange}: {onTokenChange: (token: string | null) => void}) => {
  const [value, setValue] = React.useState('');
  const stored = getToken();

  if (stored) {
    const masked = `****${stored.slice(-4)}`;
    return <div className={styles.row}>
      <span>GitHub token: <code>{masked}</code></span>
      <button type="button" onClick={() => { clearToken(); onTokenChange(null); }}>Clear</button>
    </div>;
  }

  return <div className={styles.row}>
    <input
      type="password"
      placeholder="GitHub Personal Access Token"
      value={value}
      onChange={e => setValue(e.target.value)}
      className={styles.tokenInput}
    />
    <button type="button" onClick={() => { if (value) { setToken(value); onTokenChange(value); setValue(''); } }}>
      Save Token
    </button>
  </div>;
};
