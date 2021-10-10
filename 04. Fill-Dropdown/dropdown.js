function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    let select = document.getElementById('menu');
    let option = document.createElement('option')
    option.textContent = text.value;
    option.setAttribute("value", `${value.value}`)
    if (text.value !== '' && value.value !== '') {
        select.appendChild(option);
    }
    text.value = '';
    value.value = '';

}