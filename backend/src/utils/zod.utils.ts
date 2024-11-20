export function createZodErrorMessages(field: string)  {
    return {
        required_error: `please provide a valid ${field}`,
        invalid_type_error: `${field} is not the correct type`
    }
}