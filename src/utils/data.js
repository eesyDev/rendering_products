import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpeg';
import image3 from '../assets/3.jpeg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/tab1.jpeg';
import image7 from '../assets/tab2.jpeg';
import image8 from '../assets/tab3.jpeg';
import image9 from '../assets/tab4.jpeg';
import image10 from '../assets/tab5.jpeg';

export const products = [
    { id: 1, name: "Apple iPhone 12", price: 799, categoryId: 1, supplierIds: [1, 2], image: image1 },
    { id: 2, name: "Samsung Galaxy S21", price: 699, categoryId: 1, supplierIds: [1, 2, 3], image: image2 },
    { id: 3, name: "Google Pixel 5", price: 599, categoryId: 1, supplierIds: [1, 3], image: image3 },
    { id: 4, name: "OnePlus 9", price: 729, categoryId: 1, supplierIds: [2], image: image4 },
    { id: 5, name: "Sony Xperia 5", price: 649, categoryId: 1, supplierIds: [3], image: image5 },
    { id: 6, name: "Xiaomi Mi 11", price: 749, categoryId: 1, supplierIds: [1], image: image6},
    { id: 7, name: "HP Spectre x360", price: 1200, categoryId: 2, supplierIds: [4], image: image7 },
    { id: 8, name: "Dell XPS 13", price: 1100, categoryId: 2, supplierIds: [5], image: image8 },
    { id: 9, name: "Apple MacBook Air", price: 999, categoryId: 2, supplierIds: [1, 4], image: image9 },
    { id: 10, name: "Microsoft Surface Laptop 4", price: 1029, categoryId: 2, supplierIds: [5], image: image10 },
    { id: 11, name: "Asus ZenBook 13", price: 899, categoryId: 2, supplierIds: [1, 4, 5], image: image1 },
    { id: 12, name: "Acer Swift 3", price: 670, categoryId: 2, supplierIds: [3], image: image2 },
    { id: 13, name: "Lenovo Yoga 9i", price: 1399, categoryId: 2, supplierIds: [5], image: image3 },
    { id: 14, name: "Apple iPad Pro", price: 799, categoryId: 3, supplierIds: [1], image: image4 },
    { id: 15, name: "Samsung Galaxy Tab S7", price: 649, categoryId: 3, supplierIds: [2], image: image5 }
  ];

export const categories = [
    { id: 1, name: "Smartphones", description: "Portable mobile devices for communication and entertainment." },
    { id: 2, name: "Laptops", description: "Portable computers for professional and personal use." },
    { id: 3, name: "Tablets", description: "Touchscreen devices suitable for browsing, reading, and multimedia consumption." }
  ];

export  const suppliers = [
    { id: 1, name: "Global Electronics Inc.", location: "New York, NY" },
    { id: 2, name: "Tech Distributors LLC", location: "San Francisco, CA" },
    { id: 3, name: "Mobile World Supplies", location: "London, UK" },
    { id: 4, name: "Computing MegaStore", location: "Austin, TX" },
    { id: 5, name: "Ultimate Tech Source", location: "Seattle, WA" }
  ];