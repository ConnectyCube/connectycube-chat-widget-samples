import './style.css'
import connectycubeLogo from '/logo.png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://connectycube.com" target="_blank">
      <img src="${connectycubeLogo}" class="logo" alt="ConnectyCube logo" />
    </a>
    <h1>ConnectyCube Chat Widget</h1>
    <div class="card">
      <p><code>< Vanilla JS + TypeScript ></code></p>
    </div>
  </div>
`
