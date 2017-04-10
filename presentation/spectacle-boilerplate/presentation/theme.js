import * as React from 'react'
import {
    Heading, Slide
} from 'spectacle';

export const CsHeading = (p) => <Heading size={4} textColor="secondary" caps {...p} />

export const CsSlide = (p) => <Slide transition={["slide", ...(p.transition || [])]} bgColor="background" textColor="tertiary" {...p} >{p.children}</Slide>