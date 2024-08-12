export const getImg = (an_array)=>{
    const image = an_array.map((each)=> each.img.split("2F")[1].split("?")[0])
    return image;
}