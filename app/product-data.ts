export interface Product {
    id:string;
    imageUrl:string;
    name:string;
    description:string;
    price:number;
}

export const products: Product[] = [{
    id:'123',
    name:'Hat',
    imageUrl:'hat.jpg',
    description:'Cheer the team on in style with our unstructured, low credebility',
    price:29
},
{
    id:'234',
    name:'Mug',
    imageUrl:'mug.jpg',
    description:'Cheer the team on in style with our unstructured, low credebility',
    price:19
},
{
    id:'345',
    name:'Apron',
    imageUrl:'apron.jpg',
    description:'Cheer the team on in style with our unstructured, low credebility',
    price:20
},
{
    id:'456',
    name:'Shirt',
    imageUrl:'shirt.jpg',
    description:'Cheer the team on in style with our unstructured, low credebility',
    price:39
}]