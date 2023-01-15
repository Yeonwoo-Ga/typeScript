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
}

const yeon = new PlayerClass("yeonwoo", "Ga", "kingYeonwoo");

yeon.getFullName();
