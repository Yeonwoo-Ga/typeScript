type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
};
//generic이란 타입의 placeholder같은 것

const superPrint: SuperPrint = arr => arr[0];

let aa = superPrint([1, 2, 3, 4]);
let bb = superPrint([true, false, false]);
let cc = superPrint(["a", "b", "c"]);
let dd = superPrint([1, 2, true, false, "a"]);

//any를 사용하지 않고 generic을 사용하는 이유????
//any를 사용 할 경우, 더이상 에러가나는 코드로부터 보호받지 못한다.
