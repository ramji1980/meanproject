import {Component,OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
    selector:'layout-footer',
    templateUrl:'./footer.component.html'
})

export class FooterComponent implements OnInit{
    footercopyright:string;
    today: number = Date.now();
        ngOnInit(){
            this.footercopyright=' All rights reservered';
        }
}