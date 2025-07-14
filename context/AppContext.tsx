import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
    bag: { [productName: string]: number };
    favorites: string[];
    addToBag: (productName: string) => void;
    removeFromBag: (productName: string) => void;
    updateBagQuantity: (productName: string, quantity: number) => void;
    toggleFavorite: (productName: string) => void;
    clearBag: () => void;
    getBagTotal: (products: any[]) => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [bag, setBag] = useState<{ [productName: string]: number }>({});
    const [favorites, setFavorites] = useState<string[]>([]);

    const addToBag = (productName: string) => {
        setBag(prev => ({
            ...prev,
            [productName]: (prev[productName] || 0) + 1
        }));
    };

    const removeFromBag = (productName: string) => {
        setBag(prev => {
            const newBag = { ...prev };
            delete newBag[productName];
            return newBag;
        });
    };

    const updateBagQuantity = (productName: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromBag(productName);
        } else {
            setBag(prev => ({
                ...prev,
                [productName]: quantity
            }));
        }
    };

    const toggleFavorite = (productName: string) => {
        setFavorites(prev =>
            prev.includes(productName)
                ? prev.filter(name => name !== productName)
                : [...prev, productName]
        );
    };

    const clearBag = () => {
        setBag({});
    };

    const getBagTotal = (products: any[]) => {
        return Object.entries(bag).reduce((total, [productName, quantity]) => {
            const product = products.find(p => p.name === productName);
            return total + (product ? product.price * quantity : 0);
        }, 0);
    };

    const value: AppContextType = {
        bag,
        favorites,
        addToBag,
        removeFromBag,
        updateBagQuantity,
        toggleFavorite,
        clearBag,
        getBagTotal
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext };

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
}; 