export class Data {
  id!: string;
  src?: string;
  theme?: string;
  constructor(id: string, src?: string, theme?: string) {
    this.id = id;
    this.src = src;
    this.theme = theme;
  }
}
