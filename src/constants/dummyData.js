import { images } from ".";

const deliciousFood = [
  {
    id: 1,
    title: "Grilled Salmon Fillet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis saepe officia obcaecati magnam fugit?",
    ratings: 90.5,
    price: 10.99,
    category: ['special'],
    image: images.grilled_salmon_fillet,
  },
  {
    id: 2,
    title: "Chicken Teriyaki",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis saepe officia obcaecati magnam fugit?",
    ratings: 100,
    price: 5.99,
    category: ['top', ],
    image: images.chicken_teriyaki,
  },
  {
    id: 3,
    title: "Cheese Stuffed Burger",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis saepe officia obcaecati magnam fugit?",
    ratings: 80.5,
    price: 9.99,
    category: ['special'],
    image: images.cheese_stuffed_burger,
  },
  {
    id: 4,
    title: "Seafood Salad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis saepe officia obcaecati magnam fugit?",
    ratings: 90.5,
    price: 15.99,
    category: ['top', 'special'],
    image: images.seafood_salad,
  },
  {
    id: 5,
    title: "Salad With Calamari",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis saepe officia obcaecati magnam fugit?",
    ratings: 100,
    price: 20.99,
    category: ['special'],
    image: images.salad_calamari,
  },
  {
    id: 6,
    title: "Baked Mashrum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis saepe officia obcaecati magnam fugit?",
    ratings: 100,
    price: 7.89,
    category: ['top', ],
    image: images.baked_mushrooms,
  },
];

const testimonials = [
  {
    id: 1,
    name: "Angel Jessica",
    image:
      "https://templatekit.tokomoo.com/deliverykit/wp-content/uploads/sites/26/2021/07/beautiful-young-latin-woman-smiling-in-camera-XEA22HZ.png",
    testimony:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, eos quisquam! Quae dolorum dicta animi unde veritatis earum porro. Deserunt eum suscipit accusantium expedita magnam.",
    personality: "Food Lover",
    rating: 100,
  },
];

const dummyData = {
  deliciousFood,
  testimonials,
};

export default dummyData;
