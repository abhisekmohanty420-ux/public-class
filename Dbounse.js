function debounce(fn,delay){
    let timerid;
return function(...args){
clearTimeout(timerid)
timerid=setTimeout(()=>{
    fn(...args)
},delay);
};
}
const search=(query)=>{
    console.log("search for query",query)
}
// search('ha')
// search("har")
// search("hard")
// search("hard_")
// search("hard_js")
const debounceSearch=debounce(search,1000);
debounceSearch('ha')
debounceSearch('har')
debounceSearch('hard')
debounceSearch('hard')
debounceSearch('hard_')
debounceSearch('hard_js')