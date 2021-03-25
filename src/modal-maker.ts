import { PassiveModal } from "./passive-modal";
import { ConfirmModalSettings, FormModalSettings, PassiveModalSettings } from "../modals";
import { Modal } from "./modal";
import { ConfirmModal } from "./confirm-modal";

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

	public confirm(settings:Partial<ConfirmModalSettings>): Promise<void>{
		return new Promise((resolve, reject) => {
			const config:ConfirmModalSettings = Object.assign({
				heading: "Heading",
				message: "Confirm modals require a message.",
				size: "small",
				confirmLabel: "Confirm",
				rejectLabel: "Cancel",
				dangerous: false,
			}, settings);
			this.launch(new ConfirmModal(config, resolve, reject));
		});
	}

	public form(settings:Partial<FormModalSettings>) : Promise<FormData>{
		return new Promise((resolve, reject) => {
			const config:ConfirmModalSettings = Object.assign({
				heading: "Heading",
				message: "Confirm modals require a message.",
				size: "small",
				form: document.createElement("form"),
			}, settings);
			this.launch(new ConfirmModal(config, resolve, reject));
		});
	}
}