import { randomUUID } from "crypto";

const products = [
  {
    id: "b1f9583a-fcea-4a3f-8fe8-8c2b4def469a",
    name: "laptop",
    price: 400.0,
    quantity: 4,
    active: true,
  },
  {
    id: "2ab7ed80-90b9-468c-b151-6239a9f5b8e9",
    name: "keyboard",
    price: 29.0,
    quantity: 10,
    active: true,
  },
];

export const getAllProducts = (req, res) => {
  res.json(products);
};

export const createProduct = (req, res) => {
  const { name, price, quantity, active } = req.body;

  if (!name) {
    return res.status(422).json({ message: "Name is required!" });
  }

  const id = randomUUID();

  products.push({ id, name, price, quantity, active });

  res.status(201).json({ message: "Success!", id });
};

export const getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found!" });
  }

  res.status(202).json(product);
};

export const updateProduct = (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === id);

  const { name, price, quantity, active } = req.body;

  if (name) {
    product.name = name;
  }
  if (price) {
    product.price = price;
  }
  if (quantity) {
    product.quantity = quantity;
  }
  if (active) {
    product.active = active;
  }

  res.status(200).json(product);
};

export const deleteProduct = (req, res) => {
  const { id } = req.params;

  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found!" });
  }

  products.splice(productIndex, 1);

  res.status(200).json({ message: "Deleted" });
};
