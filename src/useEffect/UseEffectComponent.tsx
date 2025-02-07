import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const UseEffectComponent = () => {
  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/product/3");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <h1>UseEffectComponent</h1>

      <div>
        {data ? (
          <div>
            <p>Id : {data.id}</p>
            <p>Title : {data.title}</p>
            <p>Description : {data.description}</p>
            <p>Price : {data.price}</p>
            <p>DiscountPercentage : {data.discountPercentage}</p>
            <p>Rating : {data.rating}</p>
            <p>Stock : {data.stock}</p>
            <p>Brand : {data.brand}</p>
            <p>Category : {data.category}</p>
            <p>Thumbnail : {data.thumbnail}</p>
            <p>
              Images :
              {data.images.map((img, index) => (
                <img src={img} key={index} height={400} width={400} />
              ))}
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default UseEffectComponent;
