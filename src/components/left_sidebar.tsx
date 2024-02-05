import { useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import Link from 'next/link';

function Title() {
    return (
        <div id='toc-title'>
            <Link href='/'><h1>cp-insights</h1></Link>
        </div>
    )
}

function Article(props: {section: string, title: string}) {
    const path = `/${props.section}/${encodeURIComponent(props.title.replace(/[ /]/g, '_'))}`;
    return (
        <a className='toc-link' href={path}>{props.title}</a>
    )
}

function Division(props: {title: string, children: React.ReactNode}) {
    return (
        <div className='toc-division'>
            <h3>{props.title}</h3>
            <div className='flex-col'>
                {props.children}
            </div>
        </div>
    )
}

function TOC() {
    return (
        <div id='toc-content'>
            <Division title='Universal' >
                <Article section='universal' title='Reading Problems'/>
                <Article section='universal' title='Intro to Logic/Proofs'/>
                <Article section='universal' title='Making Observations'/>
                <Article section='universal' title='Creating Test Cases'/>
                <Article section='universal' title='Getting Faster'/>
                <Article section='universal' title='Contest Strategy'/>
            </Division>

            <Division title='Beginner' >
                <Article section='beginner' title='Brute Force/Simulation'/>
                <Article section='beginner' title='Greedy/Sorting'/>
                <Article section='beginner' title='Sets/Maps'/>
                <Article section='beginner' title='Graphs/Trees I'/>
                <Article section='beginner' title='Problem Set I'/>
            </Division>

            <Division title='Intermediate' >
                <Article section='intermediate' title='Binary Search'/>
                <Article section='intermediate' title='Prefix Sums/Compression'/>
                <Article section='intermediate' title='Graphs/Trees II'/>
                <Article section='intermediate' title='Stacks'/>
                <Article section='intermediate' title='Combinatorics/Probability'/>
                <Article section='intermediate' title='Extraneous Tricks'/>
                <Article section='intermediate' title='Problem Set II'/>
            </Division>
            <Division title='Advanced' >
                <Article section='advanced' title='Graphs/Trees III'/>
                <Article section='advanced' title='Dynamic Programming'/>
                <Article section='advanced' title='Strings'/>
                <Article section='advanced' title='Query Problems'/>
                <Article section='advanced' title='Problem Set III'/>
            </Division>
        </div>
    )
}

function Swap(props: {open: boolean, setOpen: (open: boolean) => void}) {
    return (
        <div id='toc-swap' className='mat' onClick={() => {props.setOpen(!props.open)}}>
            <BsThreeDots style={{color: "white"}} />
            {props.open &&
                <div id='toc-hit-detector' onClick={() => {props.setOpen(!props.open)}}/>
            }
        </div>
    )
}

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <aside id='toc'>
            <Swap 
                open={open}
                setOpen={setOpen}
            />

            <div id='toc-sticky' className={open ? "toc-shifted" : ""}>
                <Title />

                <div className='toc-hr' />
                <TOC />
                <div className='toc-hr'/>
            </div>
        </aside>
    )
}