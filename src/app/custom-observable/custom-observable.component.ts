import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit {

  newObservable = new Observable<number>((observer) => {
    // observer.next("data1"),
    // observer.next("data2"),
    // observer.next("data3"),
    // observer.next("data4"),
    // observer.next("data5"),

    // for(let i=0;i<10;i++){
    //   observer.next("data1")
    // }
  
    setTimeout(() => {
      for (let i = 0; i < 10; i++)
        observer.next(i);
    },  3000);

    // observer.complete();

  })

  constructor() { }

  ngOnInit(): void {
    this.newObservable.subscribe({
      next: (data) => { console.log(data) },
      error: (error) => { console.log(error) },
      complete: () => { console.log("custom observer send sucessfully") },
    });
  }

}
