const deliveryBoys = [
  {
    id: 1,
    name: "Lova Katari",
    slug: "delivery-to-rajahmundry",
    managerId: 1,
    category: "Short DIstance Traveller",
  },
  {
    id: 2,
    name: "Phani",
    slug: "delivery-to-hyderabad",
    managerId: 1,
    category: "Short DIstance Traveller",
  },
  {
    id: 3,
    name: "Sagar",
    slug: "delivery-to-kakinada",
    managerId: 1,
    category: "Short DIstance Traveller",
  },
  {
    id: 4,
    name: "Afroz",
    slug: "delivery-to-kovvur",
    managerId: 1,
    category: "Short DIstance Traveller",
  },
  {
    id: 5,
    name: "Sai",
    slug: "delivery-to-nidadavole",
    managerId: 1,
    category: "Short DIstance Traveller",
  },
  {
    id: 6,
    name: "Manikanta",
    slug: "delivery-to-ramachandrapuram",
    managerId: 1,
    category: "Short DIstance Traveller",
  },
  {
    id: 7,
    name: "Raj Babu",
    slug: "delivery-to-rajanagaram",
    managerId: 1,
    category: "Long DIstance Traveller",
  },
  {
    id: 8,
    name: "Ramarao",
    slug: "delivery-to-kadiyam",
    managerId: 1,
    category: "Long DIstance Traveller",
  },
  {
    id: 9,
    name: "Salomi",
    slug: "delivery-to-bangalore",
    managerId: 1,
    category: "Long DIstance Traveller",
  },
  {
    id: 10,
    name: "Jaswanth",
    slug: "delivery-to-mumbai",
    managerId: 1,
    category: "Long DIstance Traveller",
  },
];

const managers = [
  { id: 1, name: "Lova" },
  { id: 2, name: "Lakshmi" },
  { id: 3, name: "Satyanarayana" },
];

const newDeliveryBoy = {
  id: null,
  name: "",
  managerId: null,
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newDeliveryBoy,
  deliveryBoys,
  managers,
};
