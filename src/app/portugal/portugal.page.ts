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
      { expanded: false, nome:"ARQUITETURA", ends:[{nome:"PORTO" , link: "/arquiteturapt"}, {nome:"COIMBRA" , link: "/arquiteturacb"}] },
      { expanded: false, nome:"BIBLIOTECA", ends:[{nome:"PORTO" , link: "/bibliotecapt"}, {nome:"COIMBRA" , link: "/bibliotecacb"}]  },
      { expanded: false, nome:"DIVERSOS", ends:[{nome:"PORTO" , link: "/diversospt"}, {nome:"COIMBRA" , link: "/diversoscb"}]  },
      { expanded: false, nome:"TEMPLOS", ends:[{nome:"PORTO" , link: "/templospt"}, {nome:"COIMBRA" , link: "/temploscb"}] }
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
