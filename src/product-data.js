const products = [
  {
    id: 1,
    name: "Justin bieber",
    productType: "Musica",
    price: 2500,
    rating: 6,
    image:
    "https://wallpapershome.com/images/pages/pic_h/14502.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore earum ipsum nemo dicta nostrum animi sequi sed similique eligendi nihil? Dolore odit beatae quasi perferendis, vel officia sit vitae quia?",
  },
  {
    id: 2,
    name: "Harry styles",
    productType: "Musica",
    price: 3000,
    rating: 5,
    image:
      "https://tn.com.ar/resizer/hvQVtE9tLrsSw6O4SVNKW2xF1nc=/767x0/smart/cloudfront-us-east-1.images.arcpublishing.com/artear/I2UTDPO5MBBQPGOY5LPHPUXUKE.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore earum ipsum nemo dicta nostrum animi sequi sed similique eligendi nihil? Dolore odit beatae quasi perferendis, vel officia sit vitae quia?",
  },
  {
    id: 3,
    name: "Tini",
    productType: "Musica",
    price: 2800,
    rating: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/TINI_-_%22Quiero_Volver_Tour%22_Logo.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore earum ipsum nemo dicta nostrum animi sequi sed similique eligendi nihil? Dolore odit beatae quasi perferendis, vel officia sit vitae quia?",
  },
  {
    id: 4,
    name: "Floricienta",
    productType: "Teatro",
    price: 1000,
    rating: 5,
    image:
    "https://larepublica.pe/resizer/IDwUEjUajF-F3owfLZMksW_0-iE=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/LO4QJMKNMZCIDFEJKFFXVRNI5U.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos libero cupiditate, tempore corrupti iste, eius modi assumenda aperiam facere dolores molestias doloribus nisi blanditiis quibusdam distinctio, officia voluptatem. Iste, sint?",
  },
  {
    id: 5,
    name: "La trágica agonía ",
    productType: "Teatro",
    price: 900,
    rating: 4,
    image:
      "https://www.teatrosolis.org.uy/imgnoticias/202206/W756_H530/3625.png",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos libero cupiditate, tempore corrupti iste, eius modi assumenda aperiam facere dolores molestias doloribus nisi blanditiis quibusdam distinctio, officia voluptatem. Iste, sint?",
  },
  {
    id: 6 ,
    name: "El Prisionero ",
    productType: "Teatro",
    price: 350,
    rating: 3,
    image:
      "https://www.teatroelgalpon.org.uy/wp-content/uploads/2022/06/El-prisionero-de-la-2da-Avenida-TICKANTEL-700x390-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos libero cupiditate, tempore corrupti iste, eius modi assumenda aperiam facere dolores molestias doloribus nisi blanditiis quibusdam distinctio, officia voluptatem. Iste, sint?",
  },
  {
    id: 7,
    name: "Lago De los cisne",
    productType: "Danza",
    price: 900,
    rating: 4,
    image:
      "https://www.melomanodigital.com/wp-content/uploads/2021/05/El-lago-de-los-cisnes-en-el-Liceu-por-el-Ballet-Nacional-Checo.jpeg.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos libero cupiditate, tempore corrupti iste, eius modi assumenda aperiam facere dolores molestias doloribus nisi blanditiis quibusdam distinctio, officia voluptatem. Iste, sint?",
  },
  {
    id: 8,
    name: "pajaro violeta",
    productType: "Danza",
    price: 600,
    rating: 5,
    image:
    "https://www.abc.com.py/resizer/GXPZRmn1XeR7qdbNQ87W_R41Bl4=/fit-in/770x495/smart/arc-anglerfish-arc2-prod-abccolor.s3.amazonaws.com/public/VRXRD4GRWJGDFDFLECZOECVC4Q.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos libero cupiditate, tempore corrupti iste, eius modi assumenda aperiam facere dolores molestias doloribus nisi blanditiis quibusdam distinctio, officia voluptatem. Iste, sint?",
  },
  {
    id: 9,
    name: "Folcloricima",
    productType: "Danza",
    price: 450,
    rating: 4,
    image:
      "https://concepto.de/wp-content/uploads/2019/11/danzas-folcloricas-e1574731975157.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos libero cupiditate, tempore corrupti iste, eius modi assumenda aperiam facere dolores molestias doloribus nisi blanditiis quibusdam distinctio, officia voluptatem. Iste, sint?",
  },
  {
    id: 10,
    name: "Jesucristo start",
    productType: "Cine",
    price: 600,
    rating: 7,
    image:
      "http://www.quitoinforma.gob.ec/wp-content/uploads/2022/03/Jesucristo-Superstar-1-800x445.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos libero cupiditate, tempore corrupti iste, eius modi assumenda aperiam facere dolores molestias doloribus nisi blanditiis quibusdam distinctio, officia voluptatem. Iste, sint?",
  },
  {
    id: 11,
    name: "La Monja",
    productType: "Cine",
    price: 650,
    rating: 5,
    image:
      "https://www.aciprensa.com/imagespp/La-Monja-Promocion-Warner-Bros-070918.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos libero cupiditate, tempore corrupti iste, eius modi assumenda aperiam facere dolores molestias doloribus nisi blanditiis quibusdam distinctio, officia voluptatem. Iste, sint?",
  },
  {
    id: 12,
    name: "Sextillizos",
    productType: "Cine",
    price: 1200,
    rating: 10,
    image:
      "https://cdn.themedizine.com/2019/08/sextillizos-netflix-cover-1000x667.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos libero cupiditate, tempore corrupti iste, eius modi assumenda aperiam facere dolores molestias doloribus nisi blanditiis quibusdam distinctio, officia voluptatem. Iste, sint?",
  },
];

export default products;