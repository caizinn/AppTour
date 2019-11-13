import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portugal',
  templateUrl: './portugal.page.html',
  styleUrls: ['./portugal.page.scss'],
})
export class PortugalPage implements OnInit {
  public items;
  ngOnInit(){
    this.items = [
      { expanded: false, nome:"ARQUITETURA", ends:[{nome:"PORTO" , link: "/arquiteturapo"}, {nome:"COIMBRA" , link: "/arquiteturaco"}] },
      { expanded: false, nome:"BIBLIOTECA", ends:[{nome:"PORTO" , link: "/bibliotecapo"}, {nome:"COIMBRA" , link: "/bibliotecaco"}]  },
      { expanded: false, nome:"DIVERSOS", ends:[{nome:"PORTO" , link: "/diversospo"}, {nome:"COIMBRA" , link: "/diversosco"}]  },
      { expanded: false, nome:"TEMPLOS", ends:[{nome:"PORTO" , link: "/templospo"}, {nome:"COIMBRA" , link: "/templosco"}] }
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
