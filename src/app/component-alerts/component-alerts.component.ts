import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-alerts',
  templateUrl: './component-alerts.component.html',
  styleUrls: ['./component-alerts.component.css']
})
export class ComponentAlertsComponent implements OnInit {

  @Input() p;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}