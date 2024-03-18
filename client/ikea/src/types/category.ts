
export interface CategoryType {
    name: string,
    imgURL?: string
}

export interface CategoriesTypeArr {
    name: string,
    withIMG: boolean,
    categories: CategoryType[]
}
