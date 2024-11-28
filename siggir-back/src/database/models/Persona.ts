import { Table, Column, Model, PrimaryKey, DataType, ForeignKey, BelongsTo, HasOne, AutoIncrement } from 'sequelize-typescript';
import { User } from './User';
import { Empleado } from './Empleado';

@Table({
    tableName: 'persona',
    timestamps: false,
})
export class Persona extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'persona_id',
        type: DataType.INTEGER
    })
    personaId!: number;

    @Column({
        field: 'persona_dni',
        type: DataType.STRING
    })
    dni!: string;

    @Column({
        field: 'persona_nombres',
        type: DataType.STRING
    })
    nombres!: string;

    @Column({
        field: 'persona_apellidos',
        type: DataType.STRING
    })
    apellidos!: string;

    @Column({
        field: 'persona_email',
        type: DataType.STRING
    })
    email!: string;

    @Column({
        field: 'persona_fechaNacimiento',
        type: DataType.DATE
    })
    fechaNacimiento!: Date;

    @ForeignKey(() => User)
    @Column({
        field: 'usuario_id',
        type: DataType.UUID
    })
    userId!: string;

    @ForeignKey(() => Empleado)
    @Column({
        field: 'empleado_id',
        type: DataType.UUID
    })
    empleadoId!: string;

    @BelongsTo(() => User)
    user!: User;

    @BelongsTo(() => Empleado)
    empleado!: Empleado;
}
