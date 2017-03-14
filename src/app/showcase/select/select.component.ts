import {Component, OnInit} from '@angular/core';
import {Select} from 'ui-model';
import {Metadata} from '../_common/meta-data';

class Option {
  label: string;
  id: string;
}

@Component({
  selector: 'ui-app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  options: Option[] = [
    {
      label: 'A1',
      id: 'a1',
    },
    {
      label: 'B1',
      id: 'b1',
    },
    {
      label: 'C1',
      id: 'c1',
    },
    {
      label: 'D1',
      id: 'd1',
    },
    {
      label: 'E1',
      id: 'e1',
    },
  ];

  select = new Select<Option>();

  constructor() {
  }

  ngOnInit() {
    this.select.select(this.options[1]);
  }

  static meta = new Metadata()
    .setId('select')
    .setTitle('Select')
    .setTags(['select', 'radio group', 'dropdown', 'tabset', 'menu'])
    .setDescription('')
    .setAuthors(['wzc']);
}

