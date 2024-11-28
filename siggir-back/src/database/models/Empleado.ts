import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo, HasOne, HasMany } from 'sequelize-typescript';
import { Persona, Cargo, GestionRiesgo } from './index';

@Table({
    tableName: 'empleado',
    timestamps: false,
})
export class Empleado extends Model {
    @PrimaryKey
    @Column({
        field: 'empleado_id',
        type: DataType.UUID
    })
    empleadoId!: string;

    @Column({
        field: 'empleado_tipoContrato',
        type: DataType.STRING
    })
    tipoContrato!: string;

    @ForeignKey(() => Cargo)
    @Column({
        field: 'cargo_id',
        type: DataType.INTEGER
    })
    cargoId!: number;

    @BelongsTo(() => Cargo)
    cargo!: Cargo;

    @HasOne(() => Persona)
    persona!: Persona;

    @HasMany(() => GestionRiesgo)
    gestionRiesgos!: GestionRiesgo[];
}
