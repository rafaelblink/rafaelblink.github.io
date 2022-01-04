import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {

  @Input() subTitle: string = '';
  @Input() mainTitle: string = '';
  @Input() mainTitleNormal: string = '';
  @Input() mainTitleBolder: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
