export interface Heroe {
  id?:                string;
  superhero:        string;
  publisher:        Publisher;
  alter_ego:        string;
  first_appearance: string;
  characters:       string;
  text:             string;
  alt_img?: string; // http://adsffafaafsad.com/img.png
}

export enum Publisher {
  DCComics = "DC Comics",
  MarvelComics = "Marvel Comics",
}
