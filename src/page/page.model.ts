import {
    Column,
    Table,
    Model,
    DataType,
    PrimaryKey,
    ForeignKey,
    Default,
    HasMany,
    BelongsTo,
} from 'sequelize-typescript';
import { CATEGORIES_LISTS, TYPES, TYPES_LISTS } from 'src/constants/app.constant';
import { Section } from 'src/section/section.model';

@Table
export class Page extends Model {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    id: string;

    @Column(DataType.STRING)
    name: string;

    @Column(DataType.STRING)
    header: string;

    @Column(DataType.STRING)
    description: string

    @Column(DataType.STRING)
    image_url: string

    @Column(DataType.STRING)
    @Column({
        type: DataType.ENUM({
            values: CATEGORIES_LISTS,
        }),
    })
    category: string

    @Column(DataType.JSON)
    contents: [string]

    @Column(DataType.STRING)
    sequence: string

    @HasMany(() => Section)
    section: Section[];

    //this status will be used to difine the type either of :-
    //-->FULL_WIDTH -->ONE_COLUMN -->TWO_COLUMN -->THREE_COLUMN
    @Default(TYPES['FULL_WIDTH'])
    @Column({
        type: DataType.ENUM({
            values: TYPES_LISTS,
        }),
    })
    type: string
}
