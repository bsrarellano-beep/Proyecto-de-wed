import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductoService {
    private productos: any[] = [];

    findAll(): any[] {
        return this.productos;
    }

    create(prod: any) {
        this.productos.push(prod);
        return prod;
    }

    update(Nombre: string, prod: any): any {
        const index = this.productos.findIndex(
            existeProd => existeProd.Nombre == Nombre
        );

        if (index != -1) {
            this.productos[index] = prod;
            return prod;
        }

        return null;
    }

    delete(Nombre: string): any {
        const index = this.productos.findIndex(
            existeProd => existeProd.Nombre == Nombre
        );

        if (index != -1) {
            const productoEliminado = this.productos.splice(index, 1);
            return productoEliminado[0];
        }

        return null;
    }
}