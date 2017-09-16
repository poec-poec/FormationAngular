export class Item {
  reference: string;
  name: string;
  state: number;
  constructor(data: any) {
      this.reference = data.reference;
      this.name = data.name;
      this.state = data.state;
  }
}
