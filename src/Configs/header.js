export const adminHeader = () => {
    const Header = {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${"token"}`
        }
    }
    return Header
}
