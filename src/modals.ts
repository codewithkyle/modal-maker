import { ModalMaker } from "./modal-maker";
import { PassiveModal } from "./passive-modal";

const globalModalMaker = new ModalMaker();

customElements.define("passive-modal", PassiveModal);

export {  };