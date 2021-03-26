import { Modal } from "./modal";
import { ConfirmModalSettings } from "../modals";

export class ConfirmModal extends Modal{
	private settings: ConfirmModalSettings;
	private confirmButton: HTMLButtonElement;
	private cancelButton: HTMLButtonElement;
	private resolve: Function;

	constructor(settings:ConfirmModalSettings, resolve:Function, reject:Function){
		super(reject);
		this.settings = settings;
		this.resolve = resolve;
		this.render();
	}

	private render(){
		this.innerHTML = `
			<div class="backdrop"></div>
			<div class="modal ${this.settings.className}" size="${this.settings.size}">
				<h1>${this.settings.heading}</h1>
				<p>${this.settings.message}</p>
				<div class="actions">
					<button class="cancel">
						${this.settings.rejectLabel}
					</button>
					<button class="confirm ${this.settings.dangerous ? "danger" : ""}">
						${this.settings.confirmLabel}
					</button>
				</div>
				<button class="close" aria-label="close modal">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		`;
	}

	private confirm:EventListener = () => {
		this.resolve();
		this.remove();
	}

	private cancel:EventListener = () => {
		this.reject();
		this.remove();
	}

	connected(){
		this.confirmButton = this.querySelector(".confirm");
		this.confirmButton.addEventListener("click", this.confirm);
		this.cancelButton = this.querySelector(".cancel");
		this.cancelButton.addEventListener("click", this.cancel);
	}
}