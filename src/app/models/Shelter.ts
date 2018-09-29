export interface Shelter extends Object {
	id: number;
	shelter_name: string;
	shelter_address: string;
	shelter_address_street: string;
	shelter_address_zip: number;
	shelter_address_city: string;
	shelter_address_state: string;
	available: number;
	shelter_phone: number;
	shelter_type: {
		id: number;
		name: 'Woman' | 'Men' | 'Youth' | 'Family' | 'All';
  };
  status?: 'pending' | 'active' | 'inactive';
	last_updated: number;
}
