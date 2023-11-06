import React, { useEffect, useState } from 'react'
import { DataSource, Prompt } from '../interfaces'



export interface Props {
    dataSource: DataSource
}

export default function Flowchart(props: Props) {
    const [prompts, setPrompts] = useState<Map<number, Prompt>>(new Map());
    const updateMap = (key: number, value: Prompt) => {
        setPrompts(map => new Map(map.set(key, value)));
    }

    const [head, setHead] = useState<number>(props.dataSource.head);

    useEffect(() => {
        props.dataSource.prompts.map((prompt) => updateMap(prompt.id, prompt))
    }, [props.dataSource])


    const currentPrompt = prompts.get(head)

    if (currentPrompt === undefined) {
        return <div><p>It Broke</p></div>
    }

    return (
        <>
            <h3>{currentPrompt.text}</h3>
            <div>
                {currentPrompt.choices.length > 0 ? (
                    currentPrompt.choices.map(
                        (choice) => (
                            <button onClick={() => setHead(choice.promptId)}>{choice.text}</button >
                        )
                    )) : (
                    <p>The End.</p>
                )
                }
            </div >
        </>
    )

}
