function editElement(reference, match, replacer) {
    const text = reference.textContent;
    const matcher = new RegExp(match, 'g');
    reference.textContent = text.replace(matcher, replacer)
}