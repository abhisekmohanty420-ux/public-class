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
function debns(fn,delay){
    let timeId;
    return function(...args){
        clearTimeout(timeId);
        timeId=setTimeout(()=>{
            fn(...args)
        },delay)
    }
}
const start=(query)=>{
console.log("abhisek branch",query)
}
func=debns(start,1000);
func("new")
func("hello new branch")