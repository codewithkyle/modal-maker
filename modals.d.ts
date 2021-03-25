export type PassiveModalSettings = {
	heading: string;
	message: string;
	size?: "small" | "medium" | "large";
};

export type ConfirmModalSettings = {
	heading: string;
	message: string;
	size?: "small" | "medium" | "large";
	rejectLabel?: string;
	confirmLabel?: string;
	dangerous?: boolean;
};

export type FormModalSettings = {
	heading?: string;
	message?: string;
	size?: "small" | "medium" | "large";
	form: HTMLFormElement;
};