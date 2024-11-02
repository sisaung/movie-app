export type Crews = {
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  department: string;
  character: string;
  original_name: string;
  profile_path: string;
};

export type Cast = {
  id: number;
  character: string;
  original_name: string;
  name: string;
  profile_path: string;
  department: string;
};

export type Credits = {
  crew: Crews[];
  cast: Cast[];
};
