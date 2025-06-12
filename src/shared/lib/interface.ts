export   interface ICategory{
id:number;
categoryName:string
categoryImage:string;
subCategories:ISubCategory[];
}
interface ISubCategory{
    id:number;
    subCategoryName:string
}