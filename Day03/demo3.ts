
export class Myclass{
   public fname:string;
   private lname:string;
   protected id:number;

    constructor(f:string,l:string,id:number){
        this.fname=f;
        this.lname=l;
        this.id=id;
    }
  

    display(){
      console.log(`
        First Name :: ${this.fname}
        Last Name  :: ${this.lname}
        ID         :: ${this.id}
      `)
    }

}

// let obj=new Myclass("Sumit",'Raokhande',9);
// obj.display();

export function add(a:number,b:number):number
{
  return(a+b);
}

export const pi=3.14;

