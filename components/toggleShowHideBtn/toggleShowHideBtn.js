class toggleBtn extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.toggleBtnEle;
        this.shadowRoot.innerHTML = `
        <style>
            div {
                background-color: #dfdfdf;
                border: 1px solid #333333;
                color: black;
                display: none;
            }
            div.dp-show {
                display: block;
            }
            div.dp-hide {
                display: none;
            }
        </style>
        <button>Show</button>
        <div>
            <slot>Some default</slot>
        </div>
    `;
    }
    connectedCallback() {
        this.toggleBtnEle = this.shadowRoot.querySelector('button');
        this.toggleBtnEle.addEventListener('click', this.showHideToggle.bind(this));
    }
    showHideToggle() {
        const paraDivEle = this.shadowRoot.querySelector('div');
        paraDivEle.classList.toggle('dp-show');
        if(paraDivEle.classList.contains('dp-show')) {
            this.toggleBtnEle.innerText = 'Hide';
        } else {
            this.toggleBtnEle.innerText = 'Show';
        }
    }
}

customElements.define('dp-togglebtn', toggleBtn);
