import template from "raw-loader!./template.html";
import templatePug from "./template.pug";
import { renderFragment } from "../../utils/render";

export function render(container) {
	/*renderFragment(container, template);*/
	renderFragment(container, templatePug({title:"Home2"}));
}