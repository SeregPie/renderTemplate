import Function_cast from './utils/Function/cast';
import Lang_isNil from './utils/Lang/isNil';
import String_isString from './utils/String/isString';

let renderTemplate = function(template, directive, {
	regex = renderTemplate.regex,
} = {}) {
	if (String_isString(template)) {
		return template.replace(regex, (matched, captured) => {
			let replacement = Function_cast(directive[captured])(captured);
			return Lang_isNil(replacement) ? matched : replacement;
		});
	}
};

Object.assign(renderTemplate, {
	regex: /{{\s*([^\s{}]+)\s*}}/g,
});

export default renderTemplate;
