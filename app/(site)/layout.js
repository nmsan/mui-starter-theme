'use client'
import * as React from 'react';
import Header from "@/components/Header";
import WdBox from "@/Theme/WdBox";

function SiteLayout({children}) {

    return (
        <>
            <Header/>
            <WdBox>
                {children}
            </WdBox>
        </>
    );
}
export default SiteLayout;