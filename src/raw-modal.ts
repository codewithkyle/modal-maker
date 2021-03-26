import { Modal } from "./modal";
import { RawModalSettings } from "../modals";

export class RawModal extends Modal{
	private settings: RawModalSettings;

	constructor(settings:RawModalSettings){
		super();
		this.settings = settings;
		this.render();
	}

	private render(){
		this.innerHTML = `
			<div class="backdrop"></div>
			<div class="modal ${this.settings.className}" size="${this.settings.size}">
				${ this.settings.heading?.length ? `<h1>${this.settings.heading}</h1>` : "" }
				${ this.settings.message?.length ? `<p>${this.settings.message}</p>` : "" }
				<div class="container">
					${this.settings.el instanceof HTMLElement ? "" : this.settings.el}
				</div>
				<button class="close" aria-label="close modal">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		`;
	}

	connected(){
		if (this.settings.el instanceof HTMLElement){
			const container = this.querySelector(".container");
			container.appendChild(this.settings.el);
		}
	}
}