import { noop } from "./utils";

export class Modal extends HTMLElement{
	private closeButton: HTMLButtonElement;
	private backdrop: HTMLElement;
	public reject: Function;

	constructor(rejectCallback:Function = noop){
		super();
		this.reject = rejectCallback;
	}

	private close:EventListener = () => {
		this.reject();
		this.remove();
	}

	private connected(){}

	connectedCallback(){
		this.closeButton = this.querySelector(".close");
		this.closeButton.addEventListener("click", this.close);
		// @ts-ignore
		document.activeElement.blur();
		this.closeButton.focus();
		this.backdrop = this.querySelector(".backdrop");
		this.backdrop.addEventListener("click", this.close);
		this.connected();
	}
}