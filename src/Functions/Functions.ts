export const checkEmpty = (value: string) => {
    if (!(value.trim())) {
        alert('String must not be empty')
        return false;
    }
    return true
}