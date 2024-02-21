export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  url: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'iphone 13',
    price: 799,
    image: '/assets/phone.jpg',
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000&sr=1&ref=shared_link',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Computer',
    price: 699,
    image: '/assets/computer.jpg',
    url: 'https://kaspi.kz/shop/p/hp-omen-16-wd0009ci-81c38ea-chernyi-112846056/?c=750000000&m=GulserComputers&sr=1&ref=shared_link',
    rating: 5.7,
  },
  {
    id: 3,
    name: 'Mouse',
    price: 299,
    image: '/assets/mouse.jpg',
    url: 'https://kaspi.kz/shop/p/ls-pro-chernyi-107622516/?c=750000000&sr=3&ref=shared_link',
    rating: 7.0,
  },
  {
    id: 4,
    name: 'bag',
    price: 299,
    image: '/assets/bag.jpg',
    url: 'https://kaspi.kz/shop/p/sumka-portcase-9011-chernyi-108895248/?c=750000000&sr=9&ref=shared_link',
    rating: 8.8,
  },
  {
    id: 5,
    name: 'television',
    price: 299,
    image: '/assets/television.jpg',
    url: 'https://kaspi.kz/shop/p/lg-55ur91006la-chernyi-113400221/?c=750000000&m=30117675&sr=1&ref=shared_link',
    rating: 5.5,
  },
  {
    id: 6,
    name: 'earphone',
    price: 299,
    image: '/assets/earphone.jpg',
    url: 'https://kaspi.kz/shop/p/varium-pro-5s-rozovyi-104957199/?c=750000000&m=17368370&sr=1&ref=shared_link',
    rating: 7.0,
  },
  {
    id: 7,
    name: 'sewing machine',
    price: 299,
    image: '/assets/sewing-machine.jpg',
    url: 'https://kaspi.kz/shop/p/jack-jk-f5-belyi-107651742/?c=750000000&m=ShveinyiMir&sr=2&ref=shared_link',
    rating: 9.0,
  },
  {
    id: 8,
    name: 'blender',
    price: 299,
    image: '/assets/blender.jpg',
    url: 'https://kaspi.kz/shop/p/midea-mj-bl5001aw-chernyi-serebristyi-100107306/?c=750000000&sr=2&ref=shared_link',
    rating: 4.6,
  },
  {
    id: 9,
    name: 'washing machine',
    price: 299,
    image: '/assets/washing-machine.jpg',
    url: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000&sr=5&ref=shared_link',
    rating: 7.8,
  },
  {
    id: 10,
    name: 'oven',
    price: 299,
    image: '/assets/oven.jpg',
    url: 'https://kaspi.kz/shop/p/magna-m20b7001-w-belyi-108426636/?c=750000000&sr=6&ref=shared_link',
    rating: 8.8,
  },
];
