export type FiledValodatorType = (value: string) => string | undefined 

export const required: FiledValodatorType = (value) => {
    if(value) return undefined;
    return 'Field is required'
}

export const maxLengthCreator = (maxLenght: number): FiledValodatorType => (value) =>{
    if( value.length > maxLenght) return `Max length symbols ${maxLenght}`
    return undefined;
}