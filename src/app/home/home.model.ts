import { CityId } from '../app.model';


export interface CityListItem {
  id: CityId;
  name: string;
}

export type CityList = CityListItem[];
