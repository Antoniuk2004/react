export const getTextFromNode = (node: Node): string => {
    let text = '';

    for (let i = 0; i < node.childNodes.length; i++) {
        const childNode = node.childNodes[i];

        if (childNode.nodeType === Node.TEXT_NODE) {
            text += childNode.textContent;
        } else if (childNode.nodeType === Node.ELEMENT_NODE) {
            const tagName = (childNode as Element).tagName.toLowerCase();
            if (tagName === 'br') {
                text += '';
            } else if (tagName === 'div') {
                text += '\n' + getTextFromNode(childNode);
            } else {
                text += getTextFromNode(childNode);
            }
        }
    }

    return text;
}