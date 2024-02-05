import { useState } from "react";

export function Title(props: {title: string}) {
    return (
        <div className="title">
            <h1>{props.title}</h1>
        </div>
    )
}

export function Window(props: {Icon: any | undefined, title: string, children: React.ReactNode}) {
    return (
        <div className="shadow-mat">
            <b>{props.title} {props.Icon && <props.Icon style={{color: 'var(--accent2)'}}/>} </b>
            {props.children}
        </div>
    )
}

export function Image(props: {src: string, width: number, alt: string}) {
    return (
        <div className="center-child">
            <img src={props.src} alt={props.alt} style={{ width: props.width }} />
        </div>
    )
}

export function Spoiler (props: {title: string, children: React.ReactNode}) {
    const [showing, setShowing] = useState(false);

    return (
        <>
            {!showing &&
                <button className="spoiler-reveal" onClick={() => setShowing(true)}>
                    {props.title}
                </button>
            }
            {showing && 
                props.children
            }
        </>
    )
}

export function Remark(props: {children: React.ReactNode}) {
    return (
        <Window Icon={undefined} title="Remark">
            {props.children} 
        </Window>
    )
}