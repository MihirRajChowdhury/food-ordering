export const filterData = (text,restraunts)=>{
    console.log(text);
    const filterData = restraunts.filter((restraunt)=>restraunt?.info.name.toLowerCase().includes(text.toLowerCase()))
return filterData;
}