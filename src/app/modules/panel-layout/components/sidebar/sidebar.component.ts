import { Component, OnInit } from '@angular/core';

interface Link {
  routerLink?: string;
  text: string;
  svg: string;
  subItems?: Link[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('dates', this.menuItems);
  }

  menuItems: Link[] = [
    {
      routerLink: '/dashboard',
      text: 'Dashboard',
      svg: 'assets/icons/chart-pie.svg',
    },
    {
      text: 'E-commerce',
      svg: 'assets/icons/cart.svg',
      subItems: [
        {
          routerLink: '/dashboard',
          text: 'Products',
          svg: '<svg>...</svg>',
        },
        {
          routerLink: '/dashboard',
          text: 'Billing',
          svg: '<svg>...</svg>',
        },
        {
          routerLink: '/dashboard',
          text: 'Invoice',
          svg: 'assets/icons/chart-pie.svg',
        },
      ],
    },
    {
      routerLink: '/asegurados',
      text: 'Asegurados',
      svg: 'assets/icons/address-book.svg',
    },
    {
      routerLink: '/prestadores',
      text: 'Prestadores',
      svg: 'assets/icons/building.svg',
    },
    {
      routerLink: '/solicitudes',
      text: 'Solicitudes',
      svg: 'assets/icons/file-pen.svg',
    },
    {
      routerLink: '/documentacion',
      text: 'Documentación',
      svg: 'assets/icons/newspaper.svg',
    },
    {
      routerLink: '/liquidaciones',
      text: 'Liquidaciones',
      svg: 'assets/icons/briefcase.svg',
    },
  ];
}
