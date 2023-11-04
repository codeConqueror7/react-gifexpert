

export const getGifs = async( category ) => {
    const ulr = `https://api.giphy.com/v1/gifs/search?api_key=arKgUTtxMIparbrDojjZJU0UQTRS5fyy&q=${ category }&limit=10`
    const resp = await fetch( ulr )
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }) )

    console.log(gifs);
    return gifs;
}