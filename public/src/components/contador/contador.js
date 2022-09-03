class Contador extends HTMLElement {
    
    static get observedAttributes() {
        return ['contar']
    }
    
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue
        this.render()
        this.addEventListener()
    }
    
    constructor() {
        super()
        this.attachShadow ({ mode: 'open' })
        this.increaseLikes = this.increaseLikes.bind(this)
    }

    connectedCallback() {
        this.render()
        this.addEventListener()
    }

    disconnectedCallback() {
        this.removeEventListener()
    }

    addEventListener() {
        const button = this.shadowRoot.querySelector('button')
        button.addEventListener('click', this.increaseLikes)
    }

    removeEventListener() {
        const button = this.shadowRoot.querySelector('button')
        button = this.removeEventListener('click', this.increaseLikes)
    }

    increaseLikes() {
        const likesValue = Number (this.getAttribute('contar'))
        this.setAttribute('contar', likesValue +1)
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/post/styles.css">

        <section class="boton">
        <button id="botonLikes"><image src="./assets/heart.png" width=20px></button>
        <h5 id="cantidadLikes">${this.contar || 0} likes</h5> 
        </section>
        `
    }
}

customElements.define ('my-contador', Contador)
export default Contador