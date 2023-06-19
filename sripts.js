function doSomethingCool() {
// alert('Warning!');

// var x = 'warning (but in a var)';
// var x = Math.rondom() * 10;
// var y = math. floor(x);
// alert(y);
// 
// var name = document.querySelector('#name').value;

var div = document.querySelector(".child");
var p = document.creatElement('p');
p.textContent = 'I was appended to the div';
div.appendChild(p);

}