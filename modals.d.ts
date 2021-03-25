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

declare const passive: (settings: Partial<PassiveModalSettings>) => void;
declare const confirm: (settings: Partial<ConfirmModalSettings>) => Promise<void>;
declare const form: (settings: Partial<FormModalSettings>) => Promise<FormData>;