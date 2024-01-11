---
date: '2024-01-11'
title: Build a SVG Icon System with Vanilla Javascript
tags: [JavaScript, Web components, Custom Elements, SVG, Icons]
---

In this article, we'll delve into implementing a dynamic icon component, harnessing the power and simplicity of Web components. No need for frameworks or libraries, just plain old vanilla JavaScript.

## What are Web components?

[Web Components](https://javascript.info/web-components) represent a suite of different technologies that allow you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in web apps.

### Key Features:
- **Custom Elements:** Create your own HTML tags with full encapsulation.
- **Shadow DOM:** Encapsulates styles and markup for web components, keeping them isolated from the rest of the document.
- **HTML Templates:** Define chunks of markup that are not rendered until called upon.


::alert
---
title: Note
---
**Custom element names must contain a hyphen** to ensure they are recognized by the browser as custom and not standard HTML elements. This naming convention, differentiates them from built-in tags and avoids conflicts with future HTML updates.
::

## Implementation

### Creating a simple icon component

The following snippet demonstrates creating a basic Web Component named `<wc-icon>`:

```js
class WcUser extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          vertical-align: -0.15em;
        }
        svg {
          height: 1em;
        }
      </style>
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/>
      </svg>
    `;
  }
}
```

The Shadow DOM is used for encapsulation, ensuring the component's style and behavior don't leak into the global scope. The `:host` pseudo-class is used to target the component itself, allowing you to style it from outside the component's own DOM.

To add the component to the page, you need to register it with the browser using the `customElements.define()` method:

```js
customElements.define('wc-icon', WcUser);
```

You can then use the `<wc-icon>` element in your HTML:
  
```html
<wc-icon></wc-icon>
```


### Using an attribute to choose the icon
  
The following snippet demonstrates using an attribute to choose the icon.

```js
class WcIcon extends HTMLElement {

  static #icons = {
    mail: `
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/>
      </svg>
    `,
    user: `
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/>
      </svg>
    `,
    // ...
  };

  static #fallbackIcon = `
    <svg viewBox="0 0 24 24">
      <path d="M3,3 L21,3 L21,21 L3,21 L3,3 M3,3 L21,21 M21,3 L3,21" fill="none" stroke="currentColor" stroke-width="1"/>
    </svg>
  `;

  #name = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.#attrs.name = this.getAttribute('name');
    this.#render();
  }

  static get observedAttributes() {
    return ['name'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    
    this.#attrs.name = newValue;
    this.render();
  }

  #render() {
    let iconSvg = WcIcon.#icons[this.#attrs.name];
    if (!iconSvg) {
      iconSvg = WcIcon.#fallbackIcon;
    }
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          vertical-align: -0.15em;
        }
        svg {
          height: 1em;
        }
      </style>
      ${iconSvg}
    `;
  }

}
```

#### How It Works

The `WcIcon` class is designed to dynamically display different SVG icons based on the name attribute. It holds a collection of icons and uses the name attribute to select the appropriate icon. If an unrecognized name is given, it defaults to a fallback icon.

- The `#icons` static property stores the SVG markup for each icon.
- The `#fallbackIcon` provides a default icon in case of an invalid or missing name.
- The `attributeChangedCallback` method listens for changes to the name attribute and triggers a re-render of the component.
- The `#render` method dynamically updates the component's Shadow DOM with the selected icon.

#### Usage

```html
<wc-icon name="mail"></wc-icon>
<wc-icon name="user"></wc-icon>
```

Each `<wc-icon>` element will display the icon corresponding to its name attribute. This pattern allows for easy expansion and maintenance, as adding new icons is as simple as updating the `#icons` object.

### Enhancements

To further enhance our `WcIcon` Web Component, we can introduce additional features like customizable styles, external configuration for icons, and performance optimizations. These enhancements make the component more flexible and efficient in various use cases.

#### Customizable Style Attributes

We can add attributes like `scale`, `rotate`, and `block` to allow further customization of the icon's appearance.

- `Scale`: Adjust the size of the icon.
- `Rotate`: Rotate the icon to a specified degree.
- `Block`: Change the display to block for standalone usage.

```js
class WcIcon extends HTMLElement {

  // ...

  #attrs = {};

  connectedCallback() {
    this.#attrs.name = this.getAttribute('name');
    this.#attrs.scale = this.getAttribute('scale');
    this.#attrs.rotate = this.getAttribute('rotate');
    this.#attrs.block = this.hasAttribute('block');
    this.#render();
  }

  static get observedAttributes() {
    return ['name', 'scale', 'rotate', 'block'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    
    this.#attrs[name] = newValue;
    this.render();
  }

  #render() {
    let iconSvg = WcIcon.#icons[this.#attrs.name];
    if (!iconSvg) {
      iconSvg = WcIcon.#fallbackIcon;
    }
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: ${this.#attrs.block != null ? 'block' : 'inline-block'};
          vertical-align: -0.15em;
        }
        svg {
          height: ${this.#attrs.scale || 1}em;
          ${this.#attrs.rotate != null ? `transform: rotate(${this.#attrs.rotate}deg);` : ''}
        }
      </style>
      ${iconSvg}
    `;
  }

}
```

#### Importing Icons from a Configuration File

Separating the icon SVGs into a configuration file makes the component more maintainable. This way, icons can be managed and updated independently of the component's logic.

```js
// icons.js
export default {
  mail: `
    <svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/>
    </svg>
  `,
  user: `
    <svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/>
    </svg>
  `,
  // ...
};
```

```js
// WcIcon.js
import icons from './icons.js';

class WcIcon extends HTMLElement {

  static #icons = icons;

  // ...

}
```

#### Lazy Loading SVGs

To improve performance, especially when dealing with a large set of icons, implementing lazy loading can be beneficial. This means icons are only loaded when they are needed, reducing the initial load time.

```js
// icons.js
export default {
  mail: () => import('./icons/mail.js'),
  user: () => import('./icons/user.js'),
  // ...
};
```

```js
// mail.js
export default `
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/>
  </svg>
`;
```

Modify the `#render` method to handle the dynamic loading of icons:

```js
async #render() {
  let iconSvg = WcIcon.#fallbackIcon;
  if (WcIcon.#icons[this.#attrs.name]) {
    iconSvg = await WcIcon.#icons[this.#attrs.name]();
  }
  // ...
}
```

These enhancements not only improve the functionality and flexibility of the WcIcon component but also ensure it can be seamlessly integrated into a variety of web projects, catering to different design needs and performance considerations.


---


## Resources

<!-- - [live demo](https://codepen.io/kevin-powell/pen/GRZQqQq)
- [Source Code](https://github.com) -->
- [Web Components](https://javascript.info/web-components) - A comprehensive guide to Web Components.
- [icones.js.org](https://icones.js.org/) - A collection of SVG icons for popular brands.