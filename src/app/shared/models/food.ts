export class Foods{
    id!: number;
    price!: number;
    name!: string;
    favorite: boolean = false;
    star: number = 0;
    imageUrl!: string;
    cookTime!: string;
    origins!: string[];
    tags?: string[];
}