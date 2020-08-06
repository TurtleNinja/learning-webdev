// index of the current quote
let i = 0;

// number of quotes received in each request
let numQuotes = 10;

function increment() {
    i = (i + 1) % numQuotes;
}

function decrement() {
    if (i == 0)
        i = numQuotes;
    i--;
}


document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#quote-container");
    const quote = document.querySelector("#quote");
    const author = document.querySelector("#author");

    function get_quote() {
        // initiate a post request to backend
        const request = new XMLHttpRequest();
        request.open("POST", `/quotes/${i+1}`);
        request.onload = () => {
            // get the response
            const response = JSON.parse(request.responseText);
            console.log(response)

            // render the data to the page
            quote.innerHTML = `\"${response['quote']}\"`;
            author.innerHTML = `-${response['author']}`;
        }

        // send the request
        request.send(i+1);
    }

    document.querySelector("#next").onclick = function() {
        // increment to the next index
        increment();
        get_quote();
    }

    document.querySelector("#prev").onclick = function() {
        // increment to the next index
        decrement();
        get_quote();
    }

    // display the first quote at the beginning
    get_quote();
});