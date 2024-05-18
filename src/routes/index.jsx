import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/Home'
import { QuestionPage } from '../pages/Question'
import { DicePage } from '../pages/Dice'
import { ConsequencePage } from '../pages/Consequence';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='*' element={<HomePage />} />
            <Route path='/question' element={<QuestionPage />} />
            <Route path='/dice' element={<DicePage />} />
            <Route path='/consequence' element={<ConsequencePage />} />
        </Routes>

    )
}
