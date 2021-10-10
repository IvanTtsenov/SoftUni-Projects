function encodeAndDecodeMessages() {
    //[Encode and send it] button is clicked, you should get the given message from the first textarea. 
    //Change the ASCII CODE on every single character in that message when you add 1 to the current ASCII NUMBER,
    //that represents the current character in that message
    //Clear the sender textarea and added the encoded message to the receiver textarea
    //After clicking [Encode and send it] button the result should be:
    //Subtract 1 from the current ASCII NUMBER, that represents the current character in that message
    //Replace the encoded message with the already decoded message in the receiver textarea, to make it readable

    let textArea = Array.from(document.querySelectorAll("#main textarea"));
    let firstArea = textArea[0];
    let secondArea = textArea[1];
    let buttons = Array.from(document.querySelectorAll("button"));
    let firstBtn = buttons[0];
    firstBtn.addEventListener("click", onFirstBtnClick);
    let secondBtn = buttons[1];
    secondBtn.addEventListener("click", onSecondBtnClick);
    function onFirstBtnClick(ev) {
        let click = ev.target.parentElement.children[1].value
        let coded = click.split('').map(el => el.charCodeAt(0) + 1).map(x => String.fromCharCode(x))
        secondArea.value = coded.join('')
        firstArea.value = ''
    }

    function onSecondBtnClick(ev) {
        let click = ev.target.parentElement.children[1].value
        let decode = click.split('').map(el => el.charCodeAt(0)).map(el => String.fromCharCode(el - 1)).join('')
        secondArea.value = decode
    }

}