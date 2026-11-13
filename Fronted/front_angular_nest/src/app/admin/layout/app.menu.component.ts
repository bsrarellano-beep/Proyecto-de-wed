import { OnInit, Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
    this.model = [
      {
        label: 'ADMINISTRACIÓN',
        items: [
          { label: 'Admin', icon: 'pi pi-fw pi-home', routerLink: ['/admin'] },
          { label: 'Perfil', icon: 'pi pi-fw pi-user', routerLink: ['/admin/perfil'] }
        ]
      },
      {
        label: 'INVENTARIO',
        items: [
          { label: 'Categoría', icon: 'pi pi-fw pi-list', routerLink: ['/admin/categoria'] },
          { label: 'Producto', icon: 'pi pi-fw pi-box', routerLink: ['/admin/producto'] }
        ]
      }
    ];
  }
}