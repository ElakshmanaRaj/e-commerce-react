import React, { createContext, useState, useEffect } from 'react';

export const CategoryContext = createContext();

const Category = ({ children }) => {
    const [category, setCategory] = useState('all');
    const [sortOrder, setSortOrder] = useState('default');
    const [search, setSearch] = useState('');

    
    // Favorites (global)
    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    // Save favorites to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    return (

        <CategoryContext.Provider
            value={{ category, setCategory, sortOrder, setSortOrder, search, setSearch, favorites, setFavorites}} >
            {children}
        </CategoryContext.Provider>
        
    );
};

export default Category;
