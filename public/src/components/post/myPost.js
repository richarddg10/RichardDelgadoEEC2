class MyPost extends HTMLElement {
    
    static get observedAttributes() {
        return ['username', 'ubicacion', 'publicacion', 'numerolikes', 'usernamecomentario', 'micomentario1', 'micomentario2', 'fechapublicacion']
    }
    
    constructor() {
        super()
        this.attachShadow({mode:'open'})
    }

    connectedCallback() {
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `

        <link rel="stylesheet" href="./src/components/post/styles.css">

        <section class="fondoGeneral">

            <section class="fondoArriba">
                <img id="fotoPerfil" src="./assets/yourLogo.png"/>
                <h1 id="nombreUsuario">${this.username}</h1>
                <h2 id="ubicacion">${this.ubicacion}</h2>
                <img id="punticosOpciones" src="./assets/scroll.png"/>
            </section>
            
            <img id="publicacion" src="${this.publicacion}"/>

            <section class="fondoAbajo">
                <section class="contenedorIconos">
                    <img id="heart" src="./assets/heart.png"/>
                    <img id="comentario" src="./assets/comment.png"/>
                    <img id="share" src="./assets/share.png"/>
                </section>
                <img id="save" src="./assets/save.png"/>

                <h1 id="nombreUsuarioComentario">${this.usernamecomentario}</h1>
                <p id="miComentario1">${this.micomentario1}</p>
                <p id="miComentario2">${this.micomentario2}</p>

                <h2 id="fechaPublicacion">${this.fechapublicacion}</h2>
            </section>

        </section>
        `
    }
}

customElements.define('my-post', MyPost)
export default MyPost