const div = dom.create("<div>newDiv</div>");
console.log(div);

dom.after(test, div)


const div3 = dom.create("<div>this is test's parent node</div>");
dom.wrap(test, div3)


// 删除测试
const removeNodes = dom.empty(empty);
console.log(removeNodes)