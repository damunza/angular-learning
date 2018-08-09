export class Goal {
  public showDescription:boolean;//creating a boolean value
  constructor(public id:number, public name:string, public description:string, public completeDate:Date){this.showDescription=false}//public determines where the properties of a class are visible
}
