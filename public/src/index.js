import './components/post/myPost.js'
import './components/contador/contador.js'
import data from '../data.js'

class MyContainer extends HTMLElement {

    constructor() {
        super()
        this.attachShadow({ mode:'open' })
    }

    connectedCallback() {
        this.render()
    }

    render() {

        const compts = data.map(({username, ubicacion, publicacion, usernamecomentario, micomentario1, micomentario2, fechapublicacion}) => `
        <my-post
        username="${username}"
        ubicacion="${ubicacion}"
        publicacion="${publicacion}"
        usernamecomentario="${usernamecomentario}"
        micomentario1="${micomentario1}"
        micomentario2="${micomentario2}"
        fechapublicacion="${fechapublicacion}"
        ></my-post>

        <my-contador></my-contador>
        `)
        
        console.log(compts)
        this.shadowRoot.innerHTML = compts.join("")
    }
}

customElements.define('my-container', MyContainer)