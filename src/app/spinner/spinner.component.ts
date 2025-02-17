import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SpinnerService} from "./spinner.service";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  showSpinner = false;

  constructor(private spinnerService:SpinnerService,
              private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.init();
  }

init(){
this.spinnerService.getSpinnerObserver().subscribe((status)=>{
  this.showSpinner=status === 'start';
  console.log(this.showSpinner)
  this.cdRef.detectChanges();
  });
}
}
