import { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export function GameProvider ({ children }) {
    const [inventory, setInventory] = useState([]);
    const addItems = (items) =>  {
        setInventory(prev => [...prev, ...items]);
    };

    const resetGame = () => setInventory([]);

    return (
        <GameContext.Provider value={{ inventory, addItems, resetGame }}>
            {children}
        </GameContext.Provider>
    )
}

export const useGame = () => useContext(GameContext);