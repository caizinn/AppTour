import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usa',
  templateUrl: './usa.page.html',
  styleUrls: ['./usa.page.scss'],
})
export class UsaPage implements OnInit {
  public items;
  ngOnInit(){
    this.items = [
      { expanded: false, nome:"ARQUITETURA", ends:[{nome:"SAN DIEGO" , link: "/"}, {nome:"FRESNO" , link: "/"}] },
      { expanded: false, nome:"BIBLIOTECA", ends:[{nome:"SAN DIEGO" , link: "/"}, {nome:"FRESNO" , link: "/"}]  },
      { expanded: false, nome:"DIVERSOS", ends:[{nome:"SAN DIEGO" , link: "/"}, {nome:"FRESNO" , link: "/"}]  },
      { expanded: false, nome:"TEMPLOS", ends:[{nome:"SAN DIEGO" , link: "/"}, {nome:"FRESNO" , link: "/"}] }
    ];
  }
    constructor() {
      
    }
  
    expandItem(item): void {
      if (item.expanded) {
        item.expanded = false;
      } else {
        this.items.map(listItem => {
          if (item == listItem) {
            listItem.expanded = !listItem.expanded;
          } else {
            listItem.expanded = false;
          }
          return listItem;
        });
      }
    }
}
