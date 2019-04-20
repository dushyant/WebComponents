class toggleBtn extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.toggleBtnEle;
        this.shadowRoot.innerHTML = `
        <style>
            button {
                background-color: #4CAF50;
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
            }
            button.btn-hide {
                background-color: #f44336;
            }
            div {
                font-family: 'Lucida Console';
                margin-top: 4px;
                padding: 15px 32px;
                background-color: white;
                border: 2px solid #f44336;
                border-radius: 4px;
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
        this.toggleBtnEle.classList.toggle('btn-hide');
        if(paraDivEle.classList.contains('dp-show')) {
            this.toggleBtnEle.innerText = 'Hide';
        } else {
            this.toggleBtnEle.innerText = 'Show';
        }
    }
}

customElements.define('dp-togglebtn', toggleBtn);
