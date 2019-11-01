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
      { expanded: false, nome:"ARQUITETURA", ends:[
        {nome:"SÃO PAULO" , link: "/saopaulo1", titulo:"Casa Ubiracica", texto:"A Casa Ubiracica nasceu em um terreno do bairro de City Boaçava, Alto dos Pinheiros, zona oeste da cidade de São Paulo. Com claras referências da escola paulista de arquitetura, que formou os arquitetos Francisco de Paiva Fanucci e Marcelo Carvalho Ferraz."},
        {nome:"RIO DE JANEIRO", link: "/riodejaneiro1", titulo:"Palácio Capanema", texto:"O edifício (antigo MEC), projetado pelos ilustres Lucio Costa, Jorge Moreira, Affonso Eduardo Reydi, Carlos Leão, Ernani Vasconcelos e Oscar Niemeyer, compõe-se de um volume em prisma alto apoiado em pilotis e um outro mais baixo e perpendicular ao primeiro."}
      ]},
      { expanded: false, nome:"BIBLIOTECA", ends:[
        {nome:"SÃO PAULO" , link: "/saopaulo2", titulo:"Biblioteca Mário de Andrade", texto:"A Biblioteca Mário de Andrade foi fundada em 1925 e seu edifício em art déco, figura como umas das jóias do centro histórico de São Paulo. Com amplos e elegantes salões, possui o segundo maior acervo documental bibliográfico do Brasil, formado por inúmeras raridades."},
         {nome:"RIO DE JANEIRO" , link: "/riodejaneiro2", titulo:"Biblioteca Parque de Manguinhos", texto:"A Biblioteca Parque de Manguinhos, inaugurada em 2011, segue os preceitos das Bibliotecas Parque da Colômbia, onde a visão de espaço e serviços constituiu elemento de resgate social e cidadania. Colorida, ampla e cheia de novidades é uma biblioteca bela, coerente e necessária."}
      ]},
      { expanded: false, nome:"DIVERSOS", ends:[{nome:"SÃO PAULO" , link: "/saopaulo3"}, {nome:"RIO DE JANEIRO" , link: "/riodejaneiro3"}]  },
      { expanded: false, nome:"ESTÁDIO", ends:[{nome:"SÃO PAULO" , link: "/saopaulo4"}, {nome:"RIO DE JANEIRO" , link: "/riodejaneiro4"}] }
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