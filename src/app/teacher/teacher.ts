export class Teacher {
    id: number;
    name: string = '';
    lastName: string = '';
    email: string = '';

    constructor(id?: number, name: string = '', lastName: string = '', email: string = '') {
      this.id = id ?? 0;
      this.name = name;
      this.lastName = lastName;
      this.email = email;
    }
}
