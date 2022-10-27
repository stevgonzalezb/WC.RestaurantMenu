import html from './horizontalCard.component.html'

class HorizontalCard extends HTMLElement {
  constructor() {
    super();
    this.showInfo = true;
    
    const template = document.createElement('template');
    template.innerHTML = html.replace(/\\/g, '\\\\');

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

  }
}

window.customElements.define('h-card', HorizontalCard);