import { IPerson } from './person.interfase';

export class Person implements IPerson{
 constructor( 
    public  id:number,
    public login:string,
    public password:string,
    public email:string
    ){}
}