type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = config => {
  if (typeof config === "string") {
    console.log(config); //타입이 스트링일경우 config에서 끝
  } else {
    console.log(config.path); //타입이 object일경우 path 와 state에 접근 가능하다.
  }
};

type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  //파라미터의 갯수가 다를경우 옵셔널한 파라미터의 타입도 지정해줘야한다.
  if (c) return a + b + c;
  return a + b;
};

console.log(add(1, 3));
console.log(add(1, 4, 5));
