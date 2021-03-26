import { Modal } from "./modal";
import { FormModalSettings } from "../modals";

export class FormModal extends Modal{
	private settings: FormModalSettings;
	private form: HTMLFormElement;
	private resolve: Function;

	constructor(settings:FormModalSettings, resolve:Function, reject:Function){
		super(reject);
		this.settings = settings;
		this.resolve = resolve;
		this.render();
	}

	private render(){
		this.className = this.settings.className;
		this.innerHTML = `
			<div class="backdrop"></div>
			<div class="modal" size="${this.settings.size}">
				${ this.settings.heading?.length ? `<h1>${this.settings.heading}</h1>` : "" }
				${ this.settings.message?.length ? `<p>${this.settings.message}</p>` : "" }
				<div class="form"></div>
				<button class="close" aria-label="close modal">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		`;
	}

	private submit:EventListener = (e:Event) => {
		e.preventDefault();
		if (this.settings.form.checkValidity()){
			this.resolve(new FormData(this.settings.form));
			this.remove();
		} else {
			this.settings.form.reportValidity()
		}
	}

	connected(){
		if (this.settings.form instanceof HTMLFormElement){
			this.form = this.querySelector(".form");
			this.form.appendChild(this.settings.form);
			this.settings.form.addEventListener("submit", this.submit);
		}
	}
}