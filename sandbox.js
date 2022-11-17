

document.getElementById('getPosts').addEventListener('click', getPosts);

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
            
            postItems +=`
            <h3>${post.title}</h3>
            <p> <a href="${testResultImgs}"></a> </p>
            <img src="${testResultImgs}" alt="">
            <p>${post.thumbnail.width + " x " + post.thumbnail.height}</p>
            <p>${post.thumbnail.alt_text}</p>
            `;

        document.getElementById('api-data').innerHTML = postItems;
        
        });
        
    })
}    

