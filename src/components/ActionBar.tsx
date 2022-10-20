import {ChangeEventHandler} from "react";
import './ActionBar.css'

export type ActionBarProps = {
    searchText: string,
    onSearchInputChange: ChangeEventHandler<HTMLInputElement>,
    hasNext: boolean,
    hasPrev: boolean,
    loadNext: () => void,
    loadPrev: () => void
}

export default function ActionBar(props: ActionBarProps) {
    return (
        <div className={"action-bar"}>
            <input className={"action-bar__search-input"} placeholder={"Search"} value={props.searchText}
                   onChange={props.onSearchInputChange}/>

            <button onClick={props.loadPrev} disabled={!props.hasPrev}>Prev</button>
            <button onClick={props.loadNext} disabled={!props.hasNext}>Next</button>
        </div>)
}
