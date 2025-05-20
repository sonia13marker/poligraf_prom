import style from "../ProvidersPage/ProvidersPage.module.scss";
import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import tags from "../../data/catalogTags.json";
import TagsComponent from "../../components/TagsComponent/TagsComponent";
import ProductsComponent from "../../components/ProductsComponent/ProductsComponent";
import productsData from "../../data/dd.json";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// // Функция для перемешивания массива
// const shuffleArray = (array) => {
//   const newArray = [...array]; // Создаем копию массива
//   for (let i = newArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Меняем элементы местами
//   }
//   return newArray;
// };

// // Собираем все продукты в один массив
// const allProducts = productsData.products.flatMap(supplier => 
//   (supplier.products || []).map(product => ({
//       ...product,
//       supplierName: supplier.name, // Добавляем имя поставщика к продукту
//   }))
// );

// // Перемешиваем продукты один раз
// const shuffledProducts = shuffleArray(allProducts);
export default function CatalogPage() {
  const [value, setValue] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [activeTags, setActiveTags] = useState([]);
  
  const location = useLocation();
  
  const categoryMap = {
    graphic: ["Сольвентные краски", "Краски УФ-отверждения", "Пасты и порошки", "Термографические порошки", "Загуститель"],
    textile: ["Пластизольные краски", "Водные краски", "Клеи и аэрозоли"],
    tpf: ["Эмульсии", "Химия для изготовления и регенерации ТФП", "Сетки"]
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    
    if (category && categoryMap[category]) {
      setSelectedTags(categoryMap[category]);
      setActiveTags(categoryMap[category]);
    }
  }, [location.search]);

  const handleTagClick = (tag) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
    setActiveTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const handleSelectAll = (tagList) => {
    const allSelected = tagList.every(tag => selectedTags.includes(tag));
    
    if (allSelected) {
      setSelectedTags(prev => prev.filter(tag => !tagList.includes(tag)));
      setActiveTags(prev => prev.filter(tag => !tagList.includes(tag)));
    } else {
      const tagsToAdd = tagList.filter(tag => !selectedTags.includes(tag));
      setSelectedTags(prev => [...prev, ...tagsToAdd]);
      setActiveTags(prev => [...prev, ...tagsToAdd]);
    }
  };

  return (
    <div className={style.container}>
      <HeaderForPages title="Основные направления" searchMock="Найти товары..." value={value} setValue={setValue} />
       <div className={style.tagList} style={{ flexDirection: "column" }}>
        {tags.tags.map((tag, i) => (
          <TagsComponent
            key={i}
            title={tag.title}
            tagList={tag.tagList}
            page="catalog"
            onTagClick={handleTagClick}
            activeTags={activeTags}
            onSelectAll={() => handleSelectAll(tag.tagList)}
            allSelected={tag.tagList.every(t => selectedTags.includes(t))}
          />
        ))}
      </div>
      <div className="product-list">
         {/* Показывает перемешанный массив на странице */}
       {/* {shuffledProducts.map((product, index) => (
                    <div key={index} className="product-card">
                        <h2>{product.name}</h2>
                        <p>Поставщик: {product.supplierName}</p>
                        <img src={product.image} alt={product.name} />
                        <a href={product.file} target="_blank" rel="noopener noreferrer">
                            Скачать PDF
                        </a>
                    </div>
                ))} */}
        <ProductsComponent 
          product={productsData} 
          selectedTags={selectedTags} 
          searchValue={value}
        />
      </div>
    </div>
  );
}