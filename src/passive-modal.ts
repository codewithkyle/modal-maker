import { Modal } from "./modal";
import { PassiveModalSettings } from "../modals";

export class PassiveModal extends Modal{
	private settings: PassiveModalSettings;

	constructor(settings:PassiveModalSettings){
		super();
		this.settings = settings;
		this.render();
	}

	private render(){
		this.innerHTML = `
			<div class="backdrop"></div>
			<div class="modal" size="${this.settings.size}">
				<h1>${this.settings.heading}</h1>
				<p>${this.settings.message}</p>
				<button class="close" aria-label="close modal">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		`;
	}
}