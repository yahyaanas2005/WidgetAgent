(function() {
  'use strict';
  
  const WIDGET_API = 'https://your-domain.vercel.app/api';
  
  class IsolateWidget extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.isOpen = false;
      this.isListening = false;
    }
    
    connectedCallback() {
      this.render();
      this.setupEventListeners();
    }
    
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          :host { position: fixed; bottom: 20px; right: 20px; z-index: 999999; }
          .widget-button {
            width: 60px; height: 60px; border-radius: 50%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border: none; cursor: pointer; box-shadow: 0 8px 24px rgba(0,0,0,0.3);
            display: flex; align-items: center; justify-content: center;
            transition: transform 0.2s;
          }
          .widget-button:hover { transform: scale(1.1); }
          .widget-panel {
            display: none; position: absolute; bottom: 80px; right: 0;
            width: 400px; height: 600px; border-radius: 16px;
            background: rgba(17, 24, 39, 0.95); backdrop-filter: blur(20px);
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            overflow: hidden; flex-direction: column;
          }
          .widget-panel.open { display: flex; }
          .chat-container { flex: 1; overflow-y: auto; padding: 16px; }
          .message { margin-bottom: 12px; padding: 10px; border-radius: 8px; color: white; }
          .message.user { background: rgba(102, 126, 234, 0.2); margin-left: 40px; }
          .message.agent { background: rgba(255,255,255,0.05); margin-right: 40px; }
          .input-area {
            padding: 16px; border-top: 1px solid rgba(255,255,255,0.1);
            display: flex; gap: 8px;
          }
          .voice-btn {
            width: 40px; height: 40px; border-radius: 50%;
            background: #ef4444; border: none; cursor: pointer;
          }
          .voice-btn.listening { background: #22c55e; animation: pulse 1s infinite; }
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        </style>
        <button class="widget-button" id="toggle">
          <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
        </button>
        <div class="widget-panel" id="panel">
          <div class="chat-container" id="messages"></div>
          <div class="input-area">
            <input type="text" id="input" placeholder="Type or speak..." style="flex:1; padding:10px; border-radius:8px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:white;">
            <button class="voice-btn" id="voice">🎤</button>
          </div>
        </div>
      `;
    }
    
    setupEventListeners() {
      const toggle = this.shadowRoot.getElementById('toggle');
      const panel = this.shadowRoot.getElementById('panel');
      const voice = this.shadowRoot.getElementById('voice');
      const input = this.shadowRoot.getElementById('input');
      
      toggle.addEventListener('click', () => {
        this.isOpen = !this.isOpen;
        panel.classList.toggle('open', this.isOpen);
      });
      
      voice.addEventListener('click', () => this.toggleVoice());
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.sendMessage(input.value);
      });
    }
    
    async toggleVoice() {
      const voiceBtn = this.shadowRoot.getElementById('voice');
      this.isListening = !this.isListening;
      voiceBtn.classList.toggle('listening', this.isListening);
      
      if (this.isListening) {
        // Use browser's SpeechRecognition API
        if ('webkitSpeechRecognition' in window) {
          const recognition = new webkitSpeechRecognition();
          recognition.continuous = false;
          recognition.onresult = (e) => {
            const transcript = e.results[0][0].transcript;
            this.sendMessage(transcript);
          };
          recognition.start();
        }
      }
    }
    
    async sendMessage(text) {
      if (!text.trim()) return;
      
      this.addMessage(text, 'user');
      const input = this.shadowRoot.getElementById('input');
      input.value = '';
      
      try {
        const res = await fetch(`${WIDGET_API}/agent`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text })
        });
        const data = await res.json();
        this.addMessage(data.response || 'Response received', 'agent');
        
        // TTS response if voice enabled
        if (this.isListening && data.audioUrl) {
          new Audio(data.audioUrl).play();
        }
      } catch (err) {
        this.addMessage('Error connecting to agent', 'agent');
      }
    }
    
    addMessage(text, type) {
      const container = this.shadowRoot.getElementById('messages');
      const msg = document.createElement('div');
      msg.className = `message ${type}`;
      msg.textContent = text;
      container.appendChild(msg);
      container.scrollTop = container.scrollHeight;
    }
  }
  
  customElements.define('isolate-widget', IsolateWidget);
  
  // Auto-inject
  const widget = document.createElement('isolate-widget');
  document.body.appendChild(widget);
})();
