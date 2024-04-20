export class Auth {
  isActive!: boolean;
  constructor(isActive = true) {
    this.isActive = isActive;
  }
}
export class GetAuth {
  id!: string;
  constructor(id: string) {
    this.id = id;
  }
}
