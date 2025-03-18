export const dynamic = 'force-dynamic';

export default async function BusquedaPage(props) {
    var query = '';
    query = await props.searchParams?.then((searchParams) => {
        query = searchParams?.query || '';
        console.log("Query:", query);
        return query;
    });


    //Esto se sustituira por una llamada a la API
    const dataOffers = [
        {
            gameName: "Fifa 25",
            backgroundImage: "fifa25.avif",
            price: "59.99",
            offerPrice: "19.99",
        },
        {
            gameName: "Monster Hunter Wilds",
            backgroundImage: "mh_wilds.webp",
            price: "40",
            offerPrice: "30",
        },
        {
            gameName: "Mortal Kombat 1",
            backgroundImage: "Mortal_Kombat_1.webp",
            price: "60",
            offerPrice: "50",
        },
        {
            gameName: "Lol",
            backgroundImage: "lol.png",
            price: "10",
            offerPrice: "2",
        },
        {
            gameName: "Dragon Ball",
            backgroundImage: "kokun.png",
            price: "60",
            offerPrice: "30",
        },
        {
            gameName: "El bicho",
            backgroundImage: "siuu.jpeg",
            price: "75",
            offerPrice: "50",
        },
        {
            gameName: "Fifa 25",
            backgroundImage: "fifa25.avif",
            price: "59.99",
            offerPrice: "19.99",
        },
        {
            gameName: "Elden Ring",
            backgroundImage: "elden-ring.webp",
            price: "60",
            offerPrice: "45",
        }
    ];

    const gameFiltrado = dataOffers.map( (game) => {
        console.log("epale");
        console.log( query);
        console.log(game.gameName)
        console.log(game.gameName.search(query));
        if (game.gameName.search(query) != -1 && query!= "") {
            return game;
        }
    })
    console.log(gameFiltrado);

    return (
        <div>
            <h2>Busqueda: {query}</h2>
        </div>
    );
}