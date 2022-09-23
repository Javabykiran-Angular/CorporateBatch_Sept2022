import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'summary'
})
export class SummaryPipe implements PipeTransform {
 
 
  transform(value: any,start:number=0,end:number=15) {

      let temp=(<string> value);

    //  return (temp.substring(0,15)+"...");
      let min=start==0?1:0;
      let max=end==15?12:30;

   // return (temp.substring(start,end)+"...");
   
   return (temp.substring(min,max)+"...");

  }

}