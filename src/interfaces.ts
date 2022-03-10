interface ICardData {
  data: string | React.ReactNode;
}
interface ICardNode {
  name: string;
  children: string | React.ReactNode;
  
}

interface IFactorySupplement {
  type: string;
  props?: {};
  children?: ISerializable[];
}

interface ISerializable{
  get getFacSup(): IFactorySupplement;
}
interface IHasElement{
  getElement(): Element
}
interface IChapter {
  title: string;
}