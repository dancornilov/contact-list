import { Gender } from '@core/enums/gender.enum';

export interface Contact {
  first_name: string;
  last_name: string;
  gender: Gender;
  phone: string;
  email: string;
  created_at?: number;
}
