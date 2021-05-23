const div = dom.create("<div>newDiv</div>");
console.log(div);

dom.after(test, div)


const div3 = dom.create("<div>this is test's parent node</div>");
dom.wrap(test, div3)


// 删除测试
const removeNodes = dom.empty(empty);
console.log(removeNodes)

dom.style(test, {border: '1px solid red', color: 'blue'})

console.log(dom.style(test, 'color'));

dom.style(test, 'font-size', '30px')

dom.class.add(test, 'gray');
console.log(dom.class.has(test, 'gray'))
dom.class.remove(test, 'gray');
console.log(dom.class.has(test, 'gray'))