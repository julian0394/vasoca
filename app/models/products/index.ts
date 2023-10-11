import { AllProducts } from "./types";
import Imagen from '../../assets/img/product-img.jpg'
import { PRICES } from "../constants";

export const productList: AllProducts = {
  premium: [
    {
      name: 'Pantera Rosa',
      category: 'premium',
      descrption: 'Descripcion larga del producto Pantera Rosa qu ese usa dentro del modal donde se realiza el pedido. Tambien incluye la receta y nota sobre procedencia de la materia prima.',
      shortDesc: 'Descripcion corta de Pantera Rosa',
      hasMint: true,
      flavor: 'frutal',
      img: Imagen,
      soldOut: false,
      isNew: false,
      price: [
        { key: '30ml', price: PRICES.PREMIUM[30] },
        { key: '60ml', price: PRICES.PREMIUM[60] },
        { key: '120ml', price: PRICES.PREMIUM[120] },
      ],
    },
    {
      name: 'Tony Montana',
      category: 'premium',
      descrption: 'Descripcion larga del producto Tony Montana qu ese usa dentro del modal donde se realiza el pedido. Tambien incluye la receta y nota sobre procedencia de la materia prima.',
      shortDesc: 'Descripcion corta de Tony Montana',
      hasMint: false,
      flavor: 'tabaquil',
      img: Imagen,
      soldOut: false,
      isNew: false,
      price: [
        { key: '30ml', price: PRICES.PREMIUM[30] },
        { key: '60ml', price: PRICES.PREMIUM[60] },
        { key: '120ml', price: PRICES.PREMIUM[120] },
      ],
    },
  ],
  tradicional: [
    {
      name: 'Tormenta',
      category: 'tradicional',
      descrption: 'Descripcion larga del producto Tormenta qu ese usa dentro del modal donde se realiza el pedido. Tambien incluye la receta y nota sobre procedencia de la materia prima.',
      shortDesc: 'Descripcion corta de Tormenta',
      hasMint: true,
      flavor: 'frutal',
      img: Imagen,
      soldOut: true,
      isNew: false,
      price: [
        { key: '30ml', price: PRICES.TRADICIONAL[30] },
        { key: '30ml', price: PRICES.TRADICIONAL[30] },
        { key: '30ml', price: PRICES.TRADICIONAL[30] },
      ],
    },
    {
      name: 'Freezer',
      category: 'tradicional',
      descrption: 'Descripcion larga del producto Freezer qu ese usa dentro del modal donde se realiza el pedido. Tambien incluye la receta y nota sobre procedencia de la materia prima.',
      shortDesc: 'Descripcion corta de Freezer',
      hasMint: false,
      flavor: 'mentolado',
      img: Imagen,
      soldOut: false,
      isNew: false,
      price: [
        { key: '30ml', price: PRICES.TRADICIONAL[30] },
        { key: '30ml', price: PRICES.TRADICIONAL[30] },
        { key: '30ml', price: PRICES.TRADICIONAL[30] },
      ],
    },
  ],
  lowCost: [
    {
      name: 'Uva',
      category: 'lowCost',
      descrption: 'Descripcion larga del producto Uva qu ese usa dentro del modal donde se realiza el pedido. Tambien incluye la receta y nota sobre procedencia de la materia prima.',
      shortDesc: 'Descripcion corta de Uva',
      hasMint: false,
      flavor: 'frutal',
      img: Imagen,
      soldOut: true,
      isNew: false,
      price: [
        { key: '30ml', price: PRICES.LOWCOST[60] },
      ],
    },
    {
      name: 'Cafe con Crema',
      category: 'lowCost',
      descrption: 'Descripcion larga del producto Cafe con Crema qu ese usa dentro del modal donde se realiza el pedido. Tambien incluye la receta y nota sobre procedencia de la materia prima.',
      shortDesc: 'Descripcion corta de Cafe con Crema',
      hasMint: false,
      flavor: 'postre',
      img: Imagen,
      soldOut: false,
      isNew: false,
      price: [
        { key: '30ml', price: PRICES.LOWCOST[60] },
      ],
    },
  ],
  salt: [
    {
      name: 'Woody',
      category: 'salt',
      descrption: 'Descripcion larga del producto Woody qu ese usa dentro del modal donde se realiza el pedido. Tambien incluye la receta y nota sobre procedencia de la materia prima.',
      shortDesc: 'Descripcion corta de Woody',
      hasMint: false,
      flavor: 'frutal',
      img: Imagen,
      soldOut: false,
      isNew: false,
      price: [
        { key: '30ml', price: PRICES.SALT.TRADICIONAL },
      ],
    },
    {
      name: 'El Padrino',
      category: 'salt',
      descrption: 'Descripcion larga del producto El Padrino qu ese usa dentro del modal donde se realiza el pedido. Tambien incluye la receta y nota sobre procedencia de la materia prima.',
      shortDesc: 'Descripcion corta de El Padrino',
      hasMint: false,
      flavor: 'tabaquil',
      img: Imagen,
      soldOut: false,
      isNew: false,
      price: [
        { key: '30ml', price: PRICES.SALT.PREMIUM },
      ],
    },
  ],
  insumos: [
    {
      name: 'Baterias Samsung Q30',
      category: 'insumos',
      descrption: 'Descripcion larga del producto Baterias Samsung Q30 qu ese usa dentro del modal donde se realiza el pedido. Tambien incluye la receta y nota sobre procedencia de la materia prima.',
      shortDesc: 'Descripcion corta de Baterias Samsung Q30',
      img: Imagen,
      soldOut: false,
      isNew: true,
      price: [
        { key: '2X UNIDADES', price: '18000' },
      ],
    },
    {
      name: 'Pirex plastico',
      category: 'insumos',
      descrption: 'Descripcion larga del producto Pirex plastico qu ese usa dentro del modal donde se realiza el pedido. Tambien incluye la receta y nota sobre procedencia de la materia prima.',
      shortDesc: 'Descripcion corta de Pirex plastico',
      img: Imagen,
      soldOut: false,
      isNew: false,
      price: [
        { key: 'SKY SOLO PLUS', price: '600' },
        { key: 'KYLIN V1', price: '600' },
        { key: 'TFV12 PRINCE / VECO SOLO PLUS', price: '600' },
        { key: 'BLITZEN', price: '600' },
        { key: 'GOVAD RTA', price: '600' },
        { key: 'VAPE PEN PLUS / TFV8 BIG BABY', price: '600' },
        { key: 'CASCADE BABY', price: '600' },
        { key: 'SKY SOLO', price: '600' },
        { key: 'PEN 22 / V2 / TFV8 BABY', price: '600' },
      ],
    },
  ],
  equipos: [
    {
      name: 'DRAG 3 TPP-X - KIT',
      category: 'equipos',
      descrption: 'Descripcion larga del producto DRAG 3 TPP-X - KIT qu ese usa dentro del modal donde se realiza el pedido. Tambien incluye la receta y nota sobre procedencia de la materia prima.',
      shortDesc: 'Descripcion corta de DRAG 3 TPP-X - KIT',
      img: Imagen,
      soldOut: false,
      isNew: true,
      price: [
        { key: 'BLACK', price: '82400' },
      ],
    },
  ],
}
