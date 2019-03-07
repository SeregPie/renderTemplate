# renderTemplate

```
renderTemplate(template, directive, {
	regex = /{{\s*([^\s{}]+)\s*}}/g,
})
```

Renders a string template with the given directive.

| argument | description |
| ---: | :--- |
| `template` | A string to render. |
| `directive` | An object or an array to be used to replace the matches. |
| `regex` | A regular expression. |

Returns the rendered string.

---

Access and change the default configuration.

```javascript
let {
	regex,
} = renderTemplate;
```

## setup

### npm

```shell
npm i @seregpie/render-template
```

### ES module

```javascript
import renderTemplate from '@seregpie/render-template';
```

### browser

```html
<script src="https://unpkg.com/@seregpie/render-template"></script>
```

## usage

```javascript
let string = renderTemplate('Hello, {{ name }}. You have {{ unreadMessagesCount }} unread messages.', {
	name: 'Alice',
	unreadMessagesCount() {
		return 1 + 1;
	},
});
// => 'Hello, Alice. You have 2 unread messages.'
```

---

```javascript
let string = renderTemplate('My top three favorite fruits are {{ 0 }}, {{ 1 }} and {{ 2 }}.', [
	'apples',
	'bananas',
	'oranges',
]);
// => 'My top three favorite fruits are apples, bananas and oranges.'
```
