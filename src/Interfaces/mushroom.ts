import Occurrence from "./occurrence";

export default interface MushroomProps {
  id: number | null;
  uuid: string | null;
  inaturalist_taxa: number | null;
  bem: number | null;
  kingdom: string | null;
  phylum: string | null;
  class: string | null;
  order: string | null;
  family: string | null;
  genus: string | null;
  specie: string | null;
  scientific_name: string | null;
  popular_name: string | null;
  threatened: number;
  description: string | null;
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
  imageUrl: string | null;
  occurrences: Array<Occurrence> | null;
  brazilian_type: string | null;
  brazilian_type_synonym:string | null,
}
