import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-argentina',
  templateUrl: './argentina.page.html',
  styleUrls: ['./argentina.page.scss'],
})
export class ArgentinaPage implements OnInit {

  public items;
  ngOnInit(){
    this.items = [
      { expanded: false, nome:"ARQUITETURA", ends:[{nome:"BUENOS AIRES" , link: "/"}, {nome:"SAN MARTÍN" , link: "/"}] },
      { expanded: false, nome:"BIBLIOTECA", ends:[{nome:"BUENOS AIRES" , link: "/"}, {nome:"SAN MARTÍN" , link: "/"}]  },
      { expanded: false, nome:"DIVERSOS", ends:[{nome:"BUENOS AIRES" , link: "/"}, {nome:"SAN MARTÍN" , link: "/"}]  },
      { expanded: false, nome:"TEMPLOS", ends:[{nome:"BUENOS AIRES" , link: "/"}, {nome:"SAN MARTÍN" , link: "/"}] }
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
