export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  url: string;
  rating: number;
  likes: number; 
}

export const products: Product[] = [
  {
    id: 1,
    name: 'iphone 13',
    price: 799,
    description:
      'The iPhone 13 is expected to be the successor to the iPhone 12, featuring improvements in performance, camera capabilities, and potentially battery life.',
    image: '/assets/phone.jpg',
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000&sr=1&ref=shared_link',
    rating: 4.5,
    likes: 34,
  },
  {
    id: 2,
    name: 'Laptop',
    price: 699,
    description:
      'laptop is a portable personal computer designed for mobility and convenience. It typically features a compact design with an integrated screen, keyboard, and trackpad or pointing device.',
    image: '/assets/computer.jpg',
    url: 'https://kaspi.kz/shop/p/hp-omen-16-wd0009ci-81c38ea-chernyi-112846056/?c=750000000&m=GulserComputers&sr=1&ref=shared_link',
    rating: 5.7,
    likes: 20,
  },
  {
    id: 3,
    name: 'Mouse',
    price: 299,
    description:
      'A computer mouse is an input device that allows users to interact with a computer by moving a cursor on the screen. It typically has two buttons (left and right) and a scroll wheel.',
    image: '/assets/mouse.jpg',
    url: 'https://kaspi.kz/shop/p/ls-pro-chernyi-107622516/?c=750000000&sr=3&ref=shared_link',
    rating: 7.0,
    likes: 30,
  },
  {
    id: 4,
    name: 'shirt',
    price: 299,
    description:
      'it is a really pretty shirt, and it is a white shirt.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h50/hc3/83845461835806.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/rubashka-belaja-fashion-0404-belyi-46-110152538/?c=750000000',
    rating: 8.8,
    likes: 44,
  },
  {
    id: 5,
    name: 'television',
    price: 299,
    description:
      'television, often referred to as a TV, is an electronic device that receives broadcast signals, typically transmitted through cables, satellites, or antennas, and displays audiovisual content on a screen. ',
    image: '/assets/television.jpg',
    url: 'https://kaspi.kz/shop/p/lg-55ur91006la-chernyi-113400221/?c=750000000&m=30117675&sr=1&ref=shared_link',
    rating: 5.5,
    likes: 50,
  },
  {
    id: 6,
    name: 'earphone',
    price: 299,
    description:
      'Earphones are compact audio devices designed to be worn inside the ears. They deliver sound directly to the listener, providing a personal and immersive audio experience. They are commonly used with portable devices like smartphones, music players, and laptops.',
    image: '/assets/earphone.jpg',
    url: 'https://kaspi.kz/shop/p/varium-pro-5s-rozovyi-104957199/?c=750000000&m=17368370&sr=1&ref=shared_link',
    rating: 7.0,
    likes: 18,
  },
  {
    id: 7,
    name: 'sewing machine',
    price: 299,
    description:
      'A sewing machine is a mechanical or electronic device used for stitching fabrics together with thread. It automates the process of sewing, making it faster and more efficient than hand stitching. Sewing machines are essential tools for various textile-related tasks, including garment construction and repair.',
    image: '/assets/sewing-machine.jpg',
    url: 'https://kaspi.kz/shop/p/jack-jk-f5-belyi-107651742/?c=750000000&m=ShveinyiMir&sr=2&ref=shared_link',
    rating: 9.0,
    likes: 60,
  },
  {
    id: 8,
    name: 'blender',
    price: 299,
    description:
      'A blender is a kitchen appliance used for mixing, pureeing, or emulsifying food and liquids. It typically consists of a motorized base with a rotating blade at the bottom of a container. Blenders are versatile tools for preparing smoothies, soups, sauces, and other liquid-based recipes.',
    image: '/assets/blender.jpg',
    url: 'https://kaspi.kz/shop/p/midea-mj-bl5001aw-chernyi-serebristyi-100107306/?c=750000000&sr=2&ref=shared_link',
    rating: 4.6,
    likes: 48,
  },
  {
    id: 9,
    name: 'washing machine',
    price: 299,
    description:
      'A washing machine is a household appliance designed to clean clothes automatically. It uses water, detergent, and mechanical movements to agitate and clean clothing. Washing machines come in various types, including top-loading and front-loading, offering different features such as varying wash cycles and load capacities.',
    image: '/assets/washing-machine.jpg',
    url: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000&sr=5&ref=shared_link',
    rating: 7.8,
    likes: 67,
  },
  {
    id: 10,
    name: 'oven',
    price: 299,
    description:
      'An oven is a kitchen appliance used for baking, roasting, and cooking food by applying dry heat. It can be powered by electricity or gas. Ovens come in different types, such as conventional, convection, and microwave ovens, each serving specific cooking needs. They are essential for preparing a wide range of dishes, from baked goods to roasted meats.',
    image: '/assets/oven.jpg',
    url: 'https://kaspi.kz/shop/p/magna-m20b7001-w-belyi-108426636/?c=750000000&sr=6&ref=shared_link',
    rating: 8.8,
    likes: 52,
  },
  {
    id: 11,
    name: 'folk cloth',
    price: 100,
    description:
      'it is a very beautiful and pretty cloth.',
    image: '/assets/folk cloth.jpg',
    url: 'https://kaspi.kz/shop/p/etno-korset-987451-sinii-universal-nyi-109435784/?c=750000000',
    rating: 7.8,
    likes: 20
  },
  {
    id: 12,
    name: 'bomber jacket',
    price: 330,
    description:
      'it is a very beautiful and pretty cloth.',
    image: '/assets/bomber jacket.jpg',
    url: 'https://kaspi.kz/shop/p/bomber-boni-a144-seryi-universal-nyi-113495911/?c=750000000',
    rating: 5.8,
    likes: 33
  },
  {
    id: 13,
    name: 'long sleeve',
    price: 120,
    description:
      'it is a very beautiful and pretty cloth.',
    image: '/assets/long sleeve.jpg',
    url: 'https://kaspi.kz/shop/p/longsliv-your-kzt-kzt331-haki-universal-nyi-109261951/?c=750000000',
    rating: 4.6,
    likes: 50
  },
  {
    id: 14,
    name: 'pajamas',
    price: 220,
    description:
      'it is a very beautiful and pretty cloth.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hca/h00/84163024420894.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/pizhama-milana-250-krasnyi-m-46-108218231/?c=750000000',
    rating: 8.6,
    likes: 80
  },
  {
    id: 15,
    name: "Electric kettle",
    price: 99,
    description: 'it is a good eletric kettle.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000',
    rating: 7.7,
    likes: 68,
  },
  {
    id: 16,
    name: "keychain",
    price: 125,
    description: 'it is a really beautiful keychain',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h43/80536263884830.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/brelok-stich-silikon-1-sht-110110342/?c=750000000',
    rating: 5.7,
    likes: 70,
  },
  {
    id: 17,
    name: "cap",
    price: 99,
    description: 'it is a good and pretty cap.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/hfd/80277240905758.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/kepka-musse-mussebn-razmer-universal-nyi-chernyi-109979006/?c=750000000',
    rating: 7.7,
    likes: 68,
  },
  {
    id: 18,
    name: "watch",
    price: 60,
    description: 'it is a good and pretty watch.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/h2f/82181698158622.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/mehanicheskie-15757390-776245-metallicheskii-splav-112049937/?c=750000000',
    rating: 8.2,
    likes: 340,
  },
  {
    id: 19,
    name: "shopping bag",
    price: 78,
    description: 'it is a good and pretty bag.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb0/h15/84675997663262.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/sumka-shopper-236097-dzhut-kremovyi-108055970/?c=750000000',
    rating: 5.5,
    likes: 110,
  },
  {
    id: 20,
    name: "glass",
    price: 55,
    description: 'it is a good and pretty glass',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hcc/h24/80501880553502.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/bot300-02-prjamougol-nye-odnotonnye-110086860/?c=750000000',
    rating: 8.9,
    likes: 234,
  },
];
