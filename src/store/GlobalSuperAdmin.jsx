import React, { createContext, useState } from "react";


const GlobalData = createContext({})

const GlobalVariable = ({ children }) => {
    const [basicDetail, setBasicDetail] = useState({})

    return <GlobalData.Provider value={{
        basicDetail, setBasicDetail,
    }}>
        <div className={`globalVariable`}>
            {children}
        </div>
    </GlobalData.Provider>
}

export { GlobalData, GlobalVariable }