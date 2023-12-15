export interface Product {
    _key?: string;
    name: string;
    brand: string;
    price: number;
    createdDate: Date;
    expiryDate: Date;
}

export const ProuductList: Product[] = [
    {
        _key: '1',
        name: 'Ice Cream',
        brand: 'brand1',
        createdDate: new Date(),
        expiryDate: new Date(),
        price: 30
    },
    {
        _key: '2',
        name: 'Ice Cream2',
        brand: 'brand2',
        createdDate: new Date(),
        expiryDate: new Date(),
        price: 32
    },
    {
        _key: '3',
        name: 'Ice Cream3',
        brand: 'brand2',
        createdDate: new Date(),
        expiryDate: new Date(),
        price: 323
    },
    {
        _key: '4',
        name: 'Ice Cream3',
        brand: 'brand2',
        createdDate: new Date(),
        expiryDate: new Date(),
        price: 323
    },
    {
        _key: '5',
        name: 'Ice Cream5',
        brand: 'brand2',
        createdDate: new Date(),
        expiryDate: new Date(),
        price: 323 
    },
    {
        _key: '5',
        name: 'Ice Cream6',
        brand: 'brand2',
        createdDate: new Date(),
        expiryDate: new Date(),
        price: 323 
    }
]