'use client'

import { Provider } from "react-redux";
import { store } from "./store/store";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";


const Providers = ({children,}:{children: React.ReactNode}) => {
    const persistor = persistStore(store)
    return<Provider store={store} >


        <PersistGate persistor={persistor}>
            {children}
        </PersistGate>
        </Provider>
}

export default Providers