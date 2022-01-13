import React from "react";
import { LeftDrawer } from "./LeftDrawer";

const Layout: React.FC = ({ children }) => {
    let contents = [
        {
            text: "Старт",
            path: "/",
        },
        {
            text: "Понедельник",
            path: "/monday",
        },
        {
            text: "Вторник",
            path: "/tuesday",
        },

    ];
    return (
        <div>
            <LeftDrawer contents={contents} />
            {children}
        </div>
    );
};

export default Layout;
