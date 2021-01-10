import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { faCircle, faPen, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input() iconName: string;
  
  faPen = faPen;
  faTimes = faTimes;
  faCircle = faCircle;
  
  constructor() { }

  ngOnInit() {
  }

}
