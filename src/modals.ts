import { ConfirmModal } from "./confirm-modal";
import { FormModal } from "./form-modal";
import { ModalMaker } from "./modal-maker";
import { PassiveModal } from "./passive-modal";

const globalModalMaker = new ModalMaker();
const passive = globalModalMaker.passive.bind(globalModalMaker);
const confirm = globalModalMaker.confirm.bind(globalModalMaker);
const form = globalModalMaker.form.bind(globalModalMaker);

customElements.define("passive-modal", PassiveModal);
customElements.define("confirm-modal", ConfirmModal);
customElements.define("form-modal", FormModal);

export { passive, confirm, form };