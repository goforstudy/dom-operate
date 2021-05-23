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
    /**
     * 删除
     *  */ 
    remove(node){
        node.parentNode.removeChild(node);
        return node;
    },

    empty(node){
        const {childNodes} = node;
        const array = [];
        for(let i = childNodes.length - 1; i >= 0; i--){
            array.push(childNodes[i]);
            dom.remove(childNodes[i]);
        }
        return array;
    },
    /**
     * 改
     */
    // 节点属性
     attr(node, name, value){
        if(arguments.length === 3){
            node.setAttribute(name, value)
        } else if(arguments.length === 2){
            return node.getAttribute(name)
        }
    },
    // 节点文本
    text(node, string){
        if(arguments.length === 2){
            'innerText' in node ? 
            node.innerText = string :
            node.textContent = string;
        } else if(arguments.length === 1){
            return 'innerText' in node ? 
            node.innerText : node.textContent ;
        }   
    },
    // html
    html(node, string){
        if(arguments.length === 2){
            node.innerHTML = string;
        } else if(arguments.length === 1){
            return node.innerHTML
        }
    },
    // 属性
    style(node, object, value){
        if(arguments.length === 3){
            node.style[object] = value;
        } else if(arguments.length === 2){
            if(typeof object === 'string'){
                return node.style[object];
            } else {
                // for(let key in object){
                //     node.style[key] = object[key]
                // }
                Object.keys(object).forEach(
                    (key, index) => {
                        node.style[key] = object[key]
                    }
                )
            }
        }
    },
    // class
    class: {
        add(node, className){
            node.classList.add(className)
        },
        remove(node, className){
            node.classList.remove(className)
        },
        has(node, className){
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn){
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn){
        node.removeEventListener(eventName, fn)
    },
    find(selector, scope){
        return (scope || document).querySelectorAll(selector)
    },
    parent(node){
        return node.parentNode;
    },
    children(node){
        return node.children;
    },
    siblings(node){
        return Array.from(node.parentNode.children).filter(n => n !== node)
    },
    next(node){
        let x = node.nextSibling;
        while(x && x.nodeType === 3){
            x = x.nextSibling;
        }
        return x
    },

    previous(node){
        let x = node.previousSibling;
        while(x && x.nodeType === 3){
            x = x.previousSibling;
        }
        return x
    },
    each(nodeList, fn){
        for(let i = 0; i < nodeList.length; i++){
            fn.call(null, nodeList[i])
        }
    },
    index(node){
        const list = dom.children(node.parentNode);
        let i;
        for( i = 0; i < list.length; i++){
            if(list[i] === node){
                break;
            }
        }
        return i
    }

};
