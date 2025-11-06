import { createContext } from 'react'

export let InputContext = createContext({
    LabelTitle: '',
    handleChange: null,
    value: null
});
