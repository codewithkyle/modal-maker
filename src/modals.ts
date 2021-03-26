import { ConfirmModal } from "./confirm-modal";
import { FormModal } from "./form-modal";
import { ModalMaker } from "./modal-maker";
import { PassiveModal } from "./passive-modal";
import { RawModal } from "./raw-modal";

const globalModalMaker = new ModalMaker();
const passive = globalModalMaker.passive.bind(globalModalMaker);
const confirm = globalModalMaker.confirm.bind(globalModalMaker);
const form = globalModalMaker.form.bind(globalModalMaker);
const raw = globalModalMaker.raw.bind(globalModalMaker);

customElements.define("passive-modal", PassiveModal);
customElements.define("confirm-modal", ConfirmModal);
customElements.define("form-modal", FormModal);
customElements.define("raw-modal", RawModal);

export { passive, confirm, form, raw };