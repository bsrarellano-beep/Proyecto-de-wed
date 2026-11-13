import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity'; // Verifica esta ruta

@Module({
  imports: [TypeOrmModule.forFeature([Persona])], // ◄ ¡ESTA LÍNEA ES CRUCIAL!
  controllers: [PersonaController],
  providers: [PersonaService],
  exports: [TypeOrmModule], // Expórtalo por si UserModule lo necesita
})
export class PersonaModule {}