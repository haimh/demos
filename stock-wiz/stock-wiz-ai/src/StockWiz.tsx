import './StockWiz.css';
import {useChatAdapter} from '@nlux/nlbridge-react';
import '@nlux/themes/nova.css';
import {AiChat} from '@nlux/react';
import {usePortfolio} from './actions/usePortfolio.ts';
import {MyAiContext} from './context.tsx';
import {initialState} from './data/initialState.ts';
import {Header} from './portfolio/Header/Header.tsx';
import {Portfolio} from './portfolio/Portfolio.tsx';

export const StockWiz = () => {
    const {state, actions} = usePortfolio(initialState);
    const nlBridgeChatAdapter = useChatAdapter({
        url: 'http://localhost:8899/',
        mode: 'copilot',
        context: MyAiContext,
    });

    return (
        <div className="stock-wiz">
            <Header state={state}>
                💹 🧙‍♂️ Stock Wiz
            </Header>
            <div className="content">
                <Portfolio state={state} actions={actions}/>
                <AiChat
                    className="aichat"
                    adapter={nlBridgeChatAdapter}
                />
            </div>
        </div>
    );
};
