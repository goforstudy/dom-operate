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
    },
    before(node, node2){
        node.parentNode.insertBefore(node2, node)
    },
    append(parent, node){
        parent.appendChild(node)
    },
    // 修改节点的父级关系
    wrap(node, parent){
        dom.before(node, parent);
        dom.append(parent, node)
    },
};
