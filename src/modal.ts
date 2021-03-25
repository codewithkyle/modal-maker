import { noop } from "./utils";

export class Modal extends HTMLElement{
	private closeButton: HTMLButtonElement;
	private backdrop: HTMLElement;
	public reject: Function;

	constructor(rejectCallback:Function = noop){
		super();
		this.closeButton = this.querySelector(".close");
		this.backdrop = this.querySelector(".backdrop");
		this.reject = rejectCallback;
	}

	private close:EventListener = () => {
		this.reject();
		this.remove();
	}

	connectedCallback(){
		this.closeButton.addEventListener("click", this.close);
		// @ts-ignore
		document.activeElement.blur();
		this.closeButton.focus();
		this.backdrop.addEventListener("click", this.close);
	}
}