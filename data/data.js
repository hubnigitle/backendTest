export let daftarProduk = [
  {
    id: 1, 
    name: "Laptop",
    price: 5000000,
    stock: 10,
  },
  {
    id: 2, 
    name: "Smartphone",
    price: 3000000,
    stock: 5,    
  },
  {
    id: 3, 
    name: "Tablet",
    price: 2000000,
    stock: 8,                    
  },
  {
    id: 4, 
    name: "Headset",
    price: 1000000,
    stock: 15,            
  },
  {
    id: 5, 
    name: "Keyboard",
    price: 500000,
    stock: 12,
  }];

 export let daftarKategori = [
    {
      id: 11,
      name: "Elektronik",
    },
    {
      id: 12,
      name: "Fashion",
    }];

    //helper id 
    const nextIdProduk = () => {
      return daftarProduk.length > 0 ? Math.max(...daftarProduk.map(p => p.id)) + 1 : 1;
    }

