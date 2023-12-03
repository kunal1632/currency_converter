// console.log("app.js working")

const populate = async (value, currency)=>{
    let myStr = ""
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_m6ZCejHQTWzzi4IWdtxMMzwLoejzrj3FiLxjHZqX&base_currency="+currency
    let response = await fetch(url)
    let rJson = await response.json()
    // console.log(rJson)
    document.querySelector(".output").style.display = "block";
    for(let key of Object.keys(rJson["data"])){
        myStr += `<tr>
                    <td>${key}</td>
                    <td>${rJson["data"][key]["code"]}</td>
                    <td>${(rJson["data"][key]["value"] * value).toFixed(2)}</td>
                </tr>
            `
    } 
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;  
}
const btn = document.querySelector(".btn")
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    // console.log("button is clicked")
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='Currency']").value;
    populate(value,currency)
})



