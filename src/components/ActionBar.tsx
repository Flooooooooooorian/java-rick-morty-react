import {ChangeEvent, useState} from "react";


type ActionBarProps = {
    // myCallBackFunction: (searchText: string) => void
    myCallBackFunction(searchText: string): void
}

export default function ActionBar(props: ActionBarProps) {

    const onSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("ActionBar")
        props.myCallBackFunction(event.target.value)
    }

    return (
        <input onChange={onSearchTextChange}/>
    )
}
