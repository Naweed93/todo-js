import { buildwebsite } from "./base";

console.log(buildwebsite().sidebar);
document.body.insertBefore(buildwebsite().sidebar,document.body.firstChild)

