import * as React from 'react';
import {Fill} from 'spectacle';

/*
export const CenteredFill = (p) => {

    return <Fill  {...p} style={{...p.style, alignItems:'center', display:'flex', justifyContent:'center'}}>{p.children}</Fill>
}
*/
console.log(Fill);
export class CenteredFill extends Fill {
    constructor(p) {
        super({
            ...p,
            
        })
    }
}