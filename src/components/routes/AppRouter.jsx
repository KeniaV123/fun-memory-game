import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BoardGame } from '../cardMemoryGame/BoardGame';
import { NavbarGame } from '../navbar/NavbarGame';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavbarGame />

            <Routes>
                <Route path='/' element={ <BoardGame /> } />
                <Route path='categories/:categoryId' element={ <BoardGame /> } />
            </Routes>
        </BrowserRouter>
    )
}
