export interface Shelter extends Object {
	shelter_id: string;
	shelter_name: string;
	shelter_address: string;
	shelter_address_street: string;
	shelter_address_zip: string;
	shelter_address_city: string;
	shelter_address_state: string;
	available: string;
	shelter_phone: string;
	shelter_type: {
		id: string;
		name: 'Woman' | 'Men' | 'Youth' | 'Family' | 'All';
	};
	shelter_approved?: 'pending' | 'active' | 'inactive';
	last_updated: number;
}
