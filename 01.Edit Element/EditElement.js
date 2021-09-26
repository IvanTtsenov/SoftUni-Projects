function editElement(el, match, replace) {
    // TODO
    const element = el.textContent
    let final = element.split(match).join(replace)

    el.textContent = final;
}