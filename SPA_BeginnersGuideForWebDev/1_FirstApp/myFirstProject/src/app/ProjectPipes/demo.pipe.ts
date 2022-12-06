import {Pipe, PipeTransform} from "@angular/core"

@Pipe({
    name: "uxpipe"

})

export class uxpipe implements PipeTransform{
    transform(value: any) {
        return "hello " + value;
    }
} 
