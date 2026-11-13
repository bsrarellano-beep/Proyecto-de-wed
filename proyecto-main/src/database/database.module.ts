import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers';
import { ConfigService } from 'src/config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/config/config.module';

// 📦 IMPORTS DE TODAS TUS ENTIDADES GAMER
import { Categoria } from '../modules/categoria/entities/categoria.entity'; 
import { User } from '../modules/users/entities/user.entity'; 
import { Persona } from '../modules/persona/entities/persona.entity'; // ◄ AGREGADO
import { Role } from '../modules/role/entities/role.entity'; // ◄ AGREGADO
import { Producto } from '../modules/producto/entities/producto.entity'; // ◄ AGREGADO
import { Cliente } from '../modules/cliente/entities/cliente.entity'; // ◄ AGREGADO
import { Pedido } from '../modules/pedido/entities/pedido.entity'; // ◄ AGREGADO
import { PedidoProducto } from '../modules/pedido/entities/pedidoproducto.entity'; // ◄ AGREGADO

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                type: 'postgres',
                host: config.get('HOST') || 'localhost',
                port: +config.get('PORT'), 
                username: config.get('USERNAME') || 'root',
                password: config.get('PASSWORD') || 'prueba',
                database: config.get('DATABASE'),
                
                // 🎮 TODAS tus entidades registradas para la base de datos
                entities: [
                    Categoria,
                    User,
                    Persona, // ◄ AGREGADO
                    Role, // ◄ AGREGADO
                    Producto, // ◄ AGREGADO
                    Cliente, // ◄ AGREGADO
                    Pedido, // ◄ AGREGADO
                    PedidoProducto // ◄ AGREGADO
                ],
                synchronize: false, 
            })
        })
    ],
    providers: [...databaseProvider, ConfigService],
    exports: [...databaseProvider]
})
export class DatabaseModule {}