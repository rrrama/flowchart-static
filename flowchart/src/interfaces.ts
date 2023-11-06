
export interface DataSource {
    head: number,
    prompts: Prompt[]
}

export interface Prompt {
    id: number,
    text: string,
    choices: Choice[]
}

export interface Choice {
    text: string,
    promptId: number
}