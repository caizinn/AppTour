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
      { expanded: false, nome:"ARQUITETURA", ends:[{nome:"BUENOS AIRES" , link: "/arquiteturaba"}, {nome:"SAN MARTÍN" , link: "/arquiteturasm"}] },
      { expanded: false, nome:"BIBLIOTECA", ends:[{nome:"BUENOS AIRES" , link: "/bibliotecaba"}, {nome:"SAN MARTÍN" , link: "/bibliotecasm"}]  },
      { expanded: false, nome:"DIVERSOS", ends:[{nome:"BUENOS AIRES" , link: "/diversosba"}, {nome:"SAN MARTÍN" , link: "/diversossm"}]  },
      { expanded: false, nome:"TEMPLOS", ends:[{nome:"BUENOS AIRES" , link: "/templosba"}, {nome:"SAN MARTÍN" , link: "/templossm"}] }
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
