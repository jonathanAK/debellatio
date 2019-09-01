export class Territory {
  public id: string;
  public name: string;
  public description: string;
  public age: number;
  public imgFile: string;
  public more: string | null;

  constructor(spec: any) {
    this.id = spec.id;
    this.name = spec.name;
    this.description = spec.description;
    this.age = spec.age;
    this.imgFile = (spec.imgFile) ? spec.imgFile : 'cat-default.jpg';
    this.more = (spec.more) ? spec.more : null;
  }
}