import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Welcome to SNEAKERBOX! Looking for a specific drop today? 👟' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');

    // Simulated automated smart reply matching the sneaker theme
    setTimeout(() => {
      let reply = "That's an excellent choice! Our pairs are 100% authenticated before dispatch. Use drop code 'KICKS26' for express shipping! 🔥";
      if (userMessage.toLowerCase().includes('nike') || userMessage.toLowerCase().includes('jordan')) {
        reply = "Classic choices! The Jordan 1 Retro and Nike Panda lows are currently our highest trending stock today. Sizing runs true to size!";
      } else if (userMessage.toLowerCase().includes('discount') || userMessage.toLowerCase().includes('sale')) {
        reply = "Keep an eye on our live Flash Sale badges on the home catalog for up to 20% off retail pricing!";
      }
      setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
    }, 800);
  };

  return (
    <div style={styles.wrapper}>
      {/* Floating Action Circle Button */}
      <button onClick={() => setIsOpen(!isOpen)} style={styles.floatingBtn}>
        {isOpen ? '❌' : '💬 AI'}
      </button>

      {/* Floating Chat Box Panel */}
      {isOpen && (
        <div className="glass-effect" style={styles.chatWindow}>
          <div style={styles.header}>
            <h4>SNEAKERBOX Assistant 🤖</h4>
            <span style={{ fontSize: '11px', opacity: 0.8 }}>Online • Instant Verification</span>
          </div>

          <div style={styles.msgArea}>
            {messages.map((msg, index) => (
              <div 
                key={index} 
                style={{
                  ...styles.bubble,
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  background: msg.sender === 'user' ? 'var(--accent-color)' : 'rgba(255,255,255,0.15)',
                  color: msg.sender === 'user' ? 'white' : 'var(--text-color)',
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} style={styles.inputForm}>
            <input 
              type="text" 
              placeholder="Ask about drops, sizing, verification..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={styles.chatInput}
            />
            <button type="submit" style={styles.sendBtn}>➔</button>
          </form>
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'fixed',
    bottom: '25px',
    right: '25px',
    zIndex: 1000,
    fontFamily: 'inherit'
  },
  floatingBtn: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
  },
  chatWindow: {
    position: 'absolute',
    bottom: '75px',
    right: '0',
    width: '320px',
    height: '400px',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  },
  header: {
    background: 'var(--accent-color)',
    color: 'white',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column'
  },
  msgArea: {
    flex: 1,
    padding: '15px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  bubble: {
    padding: '10px 14px',
    borderRadius: '14px',
    maxWidth: '80%',
    fontSize: '13px',
    lineHeight: '1.4',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
  },
  inputForm: {
    display: 'flex',
    padding: '10px',
    borderTop: '1px solid var(--card-border)',
    background: 'rgba(0,0,0,0.02)'
  },
  chatInput: {
    flex: 1,
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid var(--card-border)',
    background: 'transparent',
    color: 'var(--text-color)',
    outline: 'none',
    fontSize: '13px'
  },
  sendBtn: {
    marginLeft: '8px',
    padding: '8px 12px',
    borderRadius: '8px'
  }
};