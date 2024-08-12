export const dateEdited = (date_passed)=>{
    const date = new Date(date_passed).toLocaleDateString("en-US",{"dateStyle":"full"});
    return date
}

