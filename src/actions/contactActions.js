export const addContact = (data) => {
    const id = new Date();
    return {
        type: 'ADD_CONTACT',
        contact: {
            id: id.getTime(),
            fname: data.fname,
            lname: data.lname,
            email: data.email,
            address: data.address
        }
    }
}