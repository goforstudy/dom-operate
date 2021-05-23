window.dom = {
    create(string){
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        return container.content.firstChild
    },
    // create(tagName){
    //     return document.createElement(tagName)
    // }
    after(node, node2){
        node.parentNode.insertBefore(node2, node.nextSibling)
    }
};
