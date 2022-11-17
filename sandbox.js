

document.getElementById('getPosts').addEventListener('click', getPosts);


// You need to flip through each page via "data.pagination.next_url"

function getPosts(){
    fetch('https://api.artic.edu/api/v1/artworks')
    .then((res) => res.json())
    .then((data) => {
        let artInstChiApi = data.data;

        // LOOP INTO THE API
        let postItems = `<h2>Selected Arts - API Example</h2>`;
        
        artInstChiApi.forEach((post) => {
            let linkOne = "https://www.artic.edu/iiif/2/";
            let linkTwo = post.image_id;
            let linkThree = "/full/843,/0/default.jpg";
            let testResultImgs = linkOne.concat(linkTwo, linkThree);
            
            // artwork_type_title - sculpture, painting etc
            // term_titles - contains key words about the art in strings
            // style_title - contains a key word but most null
            // subject_title(s) - not enough under each work
            
            postItems +=`
            <h3>${post.title}</h3>
            <h4>by ${post.artist_title}</h4>
            <p> <a href="${testResultImgs}"></a> </p>
            <img src="${testResultImgs}" alt="">
            <p>${post.thumbnail.alt_text}</p>
            <p>${post.dimensions}</p>
            `;

        document.getElementById('api-data').innerHTML = postItems;
        
        });
        
    })
}    

