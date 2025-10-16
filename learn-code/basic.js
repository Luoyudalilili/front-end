console.log("Hello, World!");

let val0;
val0 = "egg";
let val1 = "little egg";
let val2 = [1, "egg1", 2, "egg2"];
let val3 = val2[0] + val2[1] + val2[2] + val2[3];
console.log(val3);
var val4 = 1 / 2;
console.log(val4);
console.log(val0 === val1);
console.log(val0 !== val1);

function multiplay(num1, num2) {
  let res = num1 * num2;
  return res;
}

console.log(multiplay(1, 2));
console.log(multiplay(1.1, 2.2));
console.log(multiplay(1, "d"));

var egg = { Name: "Wang", Age: 25 }; // 不推荐
console.log(egg);
console.log(egg.Name);
console.log(egg["Age"]);

console.log(16 + "ddd");
console.log(typeof [1, 2, 3]); // 返回object，设计的缺陷
