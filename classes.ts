abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    public nickName: string
  ) {}
}

class PlayerClass extends User {
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getNickName() {
    return `${this.nickName}이 제 닉네임입니다`;
  }
}

const yeon = new PlayerClass("yeonwoo", "Ga", "kingYeonwoo");

yeon.getFullName();

console.log(yeon.getFullName());
console.log(yeon.getNickName());
