const v1 = 10;

const fn1 = function () {
  const v1 = 100;
  const fn2 = () => {
    const v1 = 200;
    const v2 = 300;
    console.log(v1);
  }
  // console.log(v2); v2 only exists on fn2
  fn2()
}

fn1();



const obj1 = {
  p1: 10,
  getP1: function () {
    const that = this;
    const f = function () {
      return that.p1;
    }
    const a = () => {
      return this.p1;
    }
    return f(); // undefined or use that
    // return a(); // p1
  }
}

console.log(obj1.getP1());