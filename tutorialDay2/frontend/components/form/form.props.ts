
export interface FormProps{
    onSubmit: (formData: FormValue) => any
    values?: FormValue
    sectionTitle:string
}

export interface FormValue{
    title?:string
    expert?:string
    description?:string
}
