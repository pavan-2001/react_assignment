import Promise from 'bluebird';

const apiKey = '4f36b51eb13374c2c43553a65579f7e4' ;

export default function photoApi(search = 'cars') {
    const itemData = fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${search}&per_page=500&pages=1&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(json => {
        //console.log(json);
        var x;
        for(x in json) {
            console.log(x);
        }
        return json;
    }).catch(error => {console.log(error);});

    return new Promise((resolve) => {
        resolve(itemData);
    });
}
