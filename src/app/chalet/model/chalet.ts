import { Langue } from '../../langues/langue.type';

export interface Chalet {
  description: {[K in Langue]?: string};
  images: string[];
  prestations: {[K in Langue]?: [string, string?]}[];
}
