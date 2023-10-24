export default class Customer {
  id: string | null;
  constructor(id: string | null, readonly name: string, readonly cpf: string) {
    this.id = id;
  }

  setId(id: string) {
    this.id = id;
  }
}