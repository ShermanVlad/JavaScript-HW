let form = document.forms.task1;
let userPrinter= document.getElementById('task1print');
form.onsubmit = function (ev) {
    ev.preventDefault()
    userPrinter.innerText = `name: ${this.task1name.value}, surname: ${this.task1surname.value}, password: ${this.task1password.value}`;
};