import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from "jspdf";
import html2canvas from 'html2canvas';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-long-text',
  templateUrl: './long-text.component.html',
  styleUrls: ['./long-text.component.css']
})
export class LongTextComponent implements OnInit {

  @ViewChild('content') content: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
  ) { }
  myList:any;
  another:any;
  ngOnInit() {
    this.myList = [];
    this.myList.push(1);
    //this.myList.add(2);
    this.another = [1,2,3,4,5];
    //console.log(this.myList);
    for (let i=0;i<2000;i++) {
      this.myList.push(i);
    }
  }
  public downloadPDF() {
    html2pdf($('#content').get(0), {
      margin:       .22,
      filename:     'test.pdf',
      image:        { type: 'jpeg', quality: 1 },
      html2canvas:  { dpi: 30, letterRendering: true },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    });
  }
}
