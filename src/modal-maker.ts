import { PassiveModal } from "./passive-modal";
import { ConfirmModalSettings, FormModalSettings, PassiveModalSettings, RawModalSettings } from "../modals";
import { Modal } from "./modal";
import { ConfirmModal } from "./confirm-modal";
import { FormModal } from "./form-modal";
import { RawModal } from "./raw-modal";

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
			className: "",
			heading: "Heading",
			message: "Passive modals require a message.",
			size: "small",
		}, settings);
		this.launch(new PassiveModal(config));
	}

	public confirm(settings:Partial<ConfirmModalSettings>): Promise<void>{
		return new Promise((resolve, reject) => {
			const config:ConfirmModalSettings = Object.assign({
				className: "",
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
			const config:FormModalSettings = Object.assign({
				className: "",
				heading: null,
				message: null,
				size: "medium",
				form: null,
			}, settings);
			this.launch(new FormModal(config, resolve, reject));
		});
	}

	public raw(settings:Partial<RawModalSettings>){
		const config:RawModalSettings = Object.assign({
			className: "",
			heading: null,
			message: null,
			size: "large",
			el: null,
		}, settings);
		this.launch(new RawModal(config));
	}
}