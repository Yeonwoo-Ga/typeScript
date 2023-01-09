const a: number = 1; //a의 타입이 넘버
const b: number[] = [1, 2, 3]; //b의 타입이 넘버로 이루어진 배열

function hello(name: string) {
  console.log(name);
}

hello("yeonwoo"); //string타입이 들어가지않으면 에러를 발생시킨다

type Player = {
  name: string;
  age?: number;
};

const playerYeonwoo: Player = {
  name: "yeonwoo",
};

function playerMaker(name: string, age: number): Player {
  return {
    name,
    age,
  };
}

console.log(playerMaker("yeonwoo", 31));
