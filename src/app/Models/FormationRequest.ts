interface Formateur {
  Id: number;
  age: number;
  name: string;
  picUrl: string;
  title: string;
}
interface Comments {
  id: number;
  username: string;
  description: string;
}
export  interface Chapter {
  id: number;
  name: string;
  cour: Cours[];
}
 export interface Cours {
  id: number;
  VideoUrl: string;
  description: string;
  name: string;
}
export interface FormationRequest {
  id: number;
  name: string;
  formateur: Formateur ;
  FirstDate: string;
  FinalDate: string;
  chapter: Chapter[];
}
