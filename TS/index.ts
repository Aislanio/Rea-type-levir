//Tipos
const value:string =  'text';

const  booleano:boolean = true;

const  numero:number = 10.5;

const arr:string[] = ['text1','text2'];

const tuple:[number,string] =[12,'text1'];

enum  Theme{
	Dark  = 'dark',
	Light =  'light'
}

const anys:any ='';
anys =  10;

let  unk:unknow  =  '';

//:voide não retorna  nada

//:never ele não tem fim  (while,)

function sum(primeiroNumero:number,segundo:number):void{
	return primeiroNumero+segundo
}

let  test = undefined;

const obj:object =  {
	nome:'Aislânio'
};//any dos  obejetos



interface