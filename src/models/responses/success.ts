export class Success {
  success!: boolean;
  constructor(success = true) {
    this.success = success;
  }
}

export class NotSuccess {
  success!: boolean;
  constructor(success = false) {
    this.success = success;
  }
}
