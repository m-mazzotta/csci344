const ENDPOINT_WIKIPEDIA = "https://en.wikipedia.org/api/rest_v1/page/summary";

async function getWikipediaArticle(searchTerm) {
    // your code here...
    //take a searchTerm as an argument and 
    //return a data object that contains Wikipedia information pertaining to the search term

    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${searchTerm}`, {
        method: "GET"
     });
    const data = await response.json();
    console.log(data);

    return data;
    }



function dataToHTML(wikiArticle) {
    // your code here...
    const template = `
    
    <section class="card">
    <img src="${wikiArticle.originalimage.source}">
    <div>
        <h2>${wikiArticle.title}</h2>
        ${wikiArticle.extract_html}
    </div>
</section>

    `;
    const container = document.querySelector("card");
    container.insertAdjacentHTML("beforeend", template);
}



// Uncomment these functions when you're ready to test:
 testGetWikipediaArticles(); // Part A
testDisplayArticles(); // Part B





// Please do not modify the testGetWikipediaArticles() function
async function testGetWikipediaArticles() {
    const western = await getWikipediaArticle("Western Carolina University");
    const unca = await getWikipediaArticle("UNC Asheville");
    const app = await getWikipediaArticle("Appalachian State");
    const charlotte = await getWikipediaArticle("UNC Charlotte");
    console.log(western);
    console.log(unca);
    console.log(app);
    console.log(charlotte);
    return [western, unca, app, charlotte];
}

// Please do not modify the testDisplayArticles() function
async function testDisplayArticles() {
    const container = document.querySelector("#wiki-previews");
    const pages = await testGetWikipediaArticles();
    pages.forEach((page) => {
        container.insertAdjacentHTML("beforeend", dataToHTML(page));
    });
}
