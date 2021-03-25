import { PassiveModal } from "./passive-modal";
import { PassiveModalSettings } from "../modals";
import { Modal } from "./modal";

export class ModalMaker {
	private modal: Modal;

	constructor(){
		this.modal = null;
	}

	private launch(el:Modal){
		if (this.modal?.isConnected){
			this.modal.reject();
			this.modal.remove();
		}
		this.modal = el;
		document.body.appendChild(this.modal);
	}

	public passive(settings:Partial<PassiveModalSettings>){
		const config:PassiveModalSettings = Object.assign({
			heading: "Heading",
			message: "Passive modals require a message.",
			size: "small",
		}, settings);
		this.launch(new PassiveModal(config));
	}
}