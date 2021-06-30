export class formation {
  id: number ;
  name: string;
  FinalDate: string;
  FirstDate: string;
  chapter: chapter[];
  constructor(id: number) {
    this.id = id;
  }

}
export class chapter {
  id : number ;
  name : string;
  cour : [];
  constructor(id : number) {
    this.id = id;
  }
}
