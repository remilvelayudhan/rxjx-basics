import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ResolveEnd } from '@angular/router';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit ,AfterViewInit {

  constructor() { }

  //click event convertion
  ngAfterViewInit(): void {
 
    fromEvent(document.getElementById('clickitem')!,'click').subscribe({
      next: (data)=>{console.log(data)},
      error: (error)=>{console.log(error)},
      complete: ()=>{console.log("click event send sucessfully")},
    });
  }
   
 
  // array convertion
  postArray=[{name:"remil", age:28},
  {name:"remil1", age:28},
  {name:"remil2", age:29},
  {name:"remil3", age:30},
  {name:"remil4", age:31},
  {name:"remil5", age:32},
  {name:"remil6", age:33},];

  postArrayObservable$ = from(this.postArray);

  // promise convertion

  promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve("send promise, sendind data")
    }, 3000);
  });

  promiseObservable$ =from(this.promise);

  ngOnInit(): void {

    this.postArrayObservable$.subscribe({
      next: (data)=>{console.log(data)},
      error: (error)=>{console.log(error)},
      complete :() =>{console.log("completed sucessfully")},
  });

  

  this.promiseObservable$.subscribe({
    next: (data)=>{console.log(data)},
    error: (error)=>{console.log(error)},
    complete: ()=>{console.log("promise send sucessfully")}
  });

  }
}
