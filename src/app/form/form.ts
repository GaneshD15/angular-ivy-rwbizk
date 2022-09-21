export class Form {
  sId: number;
  sName: string;
  email: string;
  dob: string;
  gender: string;
  qualification: string;
  hobbies: string;
  language: string;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
