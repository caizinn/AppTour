import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brasil',
  templateUrl: './brasil.page.html',
  styleUrls: ['./brasil.page.scss'],
})
export class BrasilPage implements OnInit {
  public items;
  ngOnInit(){
    this.items = [
      { expanded: false, nome:"ARQUITETURA", ends:[{nome:"SÃO PAULO" , link: "/saopaulo1"}, {nome:"RIO DE JANEIRO" , link: "/riodejaneiro1"}] },
      { expanded: false, nome:"BIBLIOTECA", ends:[{nome:"SÃO PAULO" , link: "/home"}]  },
      { expanded: false, nome:"DIVERSOS", ends:["Rua7","Rua8"]  },
      { expanded: false, nome:"ESTÁDIO", ends:["Rua9","Rua10"] }
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
