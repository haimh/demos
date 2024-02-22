import './StockWiz.css';
import {useChatAdapter} from '@nlux/nlbridge-react';
import {AiChat} from '@nlux/react';
import '@nlux/themes/nova.css';
import {usePortfolio} from './actions/usePortfolio.ts';
import {StockWizAiContext} from './context.tsx';
import {initialState} from './data/initialState.ts';
import {Header} from './portfolio/Header/Header.tsx';
import {Portfolio} from './portfolio/Portfolio.tsx';

export const StockWiz = () => {
    const {state, actions} = usePortfolio(initialState);
    const adapter = useChatAdapter({
        url: 'http://localhost:8899',
        dataTransferMode: 'fetch',
        context: StockWizAiContext,
    });

    return (
        <div className="stock-wiz">
            <Header state={state}>
                💹 🧙‍♂️ Stock Wiz AI
            </Header>
            <div className="content">
                <Portfolio state={state} actions={actions}/>
                <AiChat className="aichat" adapter={adapter} />
            </div>
        </div>
    );
};
