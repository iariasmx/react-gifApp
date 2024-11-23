import {useState} from "react";
import {AddCategory, GifGrid} from "./components";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Blue Demon'])
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>
                Gift Expert App
            </h1>
            <AddCategory onNewCategory={onAddCategory}/>
            {/*<AddCategory  setCategories={setCategories}/>*/}
            {/*<button onClick={onAddCategory}>Buscar</button>*/}
            {categories.map(category => (
                <GifGrid key={category} category={category}/>
            ))}
        </>
    );
};

