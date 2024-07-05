interface Pivot {
  fungi_id: number | null;
  occurrence_id: number | null;
}

export default interface Occurrence {
  id: number | null;
  uuid: string | null;
  inaturalist_taxa: number | null;
  type: number | null;
  state_acronym: string | null;
  state_name: string | null;
  habitat: string | null;
  literature_reference: string | null;
  latitude: number | null;
  longitude: number | null;
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
  curation: boolean | null;
  specieslink_id: number | null;
  pivot: Pivot;
}
