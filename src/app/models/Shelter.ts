export class Shelter extends Object {
  id: number;
  name: string;
  EIN: number;
  address: {
    street: string;
    zip: number;
  }
  phoneNumber: number;
  type: [{
    id: number,
    name: 'WOMAN' | 'MEN' | 'YOUTH' | 'FAMILY' | 'ALL';
  }]
}