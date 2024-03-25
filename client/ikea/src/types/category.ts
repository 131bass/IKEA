
export interface CategoryType {
    name: string,
    imgURL?: string,
    subCategories?:string[]
}

export interface CategoriesTypeArr {
    name: string,
    imgURL?: string,
    categories: CategoryType[]
}
