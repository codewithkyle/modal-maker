# Modal Maker

A lightweight (1.5kb) modal generator.

## Install

Install via NPM:

```bash
npm i -S @codewithkyle/modal-maker
```

Or via CDN:

```javascript
import { passive, confirm, form, raw } from "https://cdn.jsdelivr.net/npm/@codewithkyle/modal-maker@1/modals.min.mjs";
```

```html
<script src="https://cdn.jsdelivr.net/npm/@codewithkyle/modal-maker@1/modals.min.js">
```

## Usage

```javascript
import { passive, confirm, form, raw } from "https://cdn.jsdelivr.net/npm/@codewithkyle/modal-maker@1/modals.min.mjs";

passive({
    heading: "Example Modal",
    message: "This is an example passive modal."
});

confirm({
    heading: "Example Modal",
    message: "This is an example confirm modal."
}).then(() => {
    console.log("Confirmed");
}).catch(() => {
    console.log("Canceled");
});

const formEl = document.createElement("form");
formEl.innerHTML = `<input type="text" placeholder="Your name" name="fullName">`;
form({
    form: formEl,
}).then((data) => {
    console.log(data.get("fullName"));
}).catch(() => {
    console.log("Form rejected");
});

raw({
    heading: "Waffles",
    message: "They're better than pancakes. Don't @ me.",
    el: `<img class="w-full ar-16:9" src="https://images.unsplash.com/photo-1616709620730-0058222c8389?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="waffles on white ceramic plate">`,
    size: "large",
});
```

## Interfaces

```typescript
interface Passive {
    heading: string;
    message: string;
    size?: "small" | "medium" | "large";
    className?: string;
}

interface Confirm {
    heading: string;
    message: string;
    size?: "small" | "medium" | "large";
    rejectLabel?: string;
    confirmLabel?: string;
    dangerous?: boolean;
    className?: string;
}

interface Form {
    heading?: string;
    message?: string;
    size?: "small" | "medium" | "large";
    form: HTMLFormElement;
    className?: string;
}

interface RawModalSettings{
    heading?: string;
    message?: string;
    size?: "small" | "medium" | "large";
    el: HTMLElement | string;
    className?: string;
}
```

## HTML Markup

### Passive

```html
<passive-modal>
    <div class="backdrop"></div>
    <div class="modal" size="small">
        <h1>Example Heading</h1>
        <p>Example message</p>
        <button class="close" aria-label="close modal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
            </svg>
        </button>
    </div>
</passive-modal>
```

### Confirm

```html
<confirm-modal>
    <div class="backdrop"></div>
    <div class="modal" size="small">
        <h1>Example Heading</h1>
        <p>Example message</p>
        <div class="actions">
            <button class="cancel">Cancel</button>
            <!-- Danger class is only applied when the dangerous setting is set to true -->
            <button class="confirm danger">Confirm</button>
        </div>
        <button class="close" aria-label="close modal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
            </svg>
        </button>
    </div>
</confirm-modal>
```

### Form

```html
<form-modal>
    <div class="backdrop"></div>
    <div class="modal" size="medium">
        <!-- Heading and message elements are optional -->
        <h1>Example Heading</h1>
        <p>Example message</p>
        <div class="form">
            <form>
                <!-- ...snip... -->
            </form>
        </div>
        <button class="close" aria-label="close modal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
            </svg>
        </button>
    </div>
</form-modal>
```

### Raw

```html
<raw-modal>
    <div class="backdrop"></div>
    <div class="modal" size="${this.settings.size}">
        <!-- Heading and message elements are optional -->
        <h1>Example Heading</h1>
        <p>Example message</p>
        <div class="container">
            <!-- ...custom HTML will be injected here... -->
        </div>
        <button class="close" aria-label="close modal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
</raw-modal>
```