import { LitElement, html } from '@polymer/lit-element'

class MyApp extends LitElement {
    constructor() {
        super();
        this.score = 1;
    }

    static get properties() {
        return { 
            score: Number 
        }
    }

    _render({score}) {
        return html`
            <h1> The score is ${score}</h1>
            `
    }
    static get is() {
        return 'my-app'
    }
}

window.customElements.define(MyApp.is, MyApp)