const URL ="https://cat-fact.herokuapp.com/facts"

let promise = fetch(URL);
console.log(promise);

const getFacts = () => {
    console.log("Getting data....")
    let response = await fetch(URL);
    console.log(response);
}
