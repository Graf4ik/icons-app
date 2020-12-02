import { Component } from '@angular/core';

import { BASIC_ICONS } from './basic_icons';



@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  icons = BASIC_ICONS
  searchStr: string = ""
  textColor: string

  constructor() {
  }

  ngOnInit(): void {
  }

}