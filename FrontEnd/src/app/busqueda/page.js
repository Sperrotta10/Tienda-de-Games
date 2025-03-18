export const dynamic = 'force-dynamic';
import BusquedaComponent from "@/Components/busqueda/busqueda";
export default async function BusquedaPage(props) {
    var query = '';
    query = await props.searchParams?.then((searchParams) => {
        query = searchParams?.query || '';
        console.log("Query:", query);
        return query;
    });


    //Esto se sustituira por una llamada a la API
    var games = null;
    try {
        const response = await fetch("http://localhost:81/api/catalogo-games/get-games");

        if (!response.ok) throw new Error(`Error en la solicitud: ${response.status}`);

        games = await response.json();
    } catch (error) {
        console.error("Error al obtener los juegos:", error);
    }

    /* console.log(games); */
    const gamesFiltrado = games.data.map((game) => {
        /* console.log("epale");
        console.log(query);
        console.log(game.titulo)
        console.log(game.titulo.search(query)); */
        if (game.titulo.toLowerCase().search(query.toLowerCase()) != -1 && query != "") {
            return game;
        }
    })
    console.log(gamesFiltrado);

    return (
        <div>
            <h2>Busqueda: {query}</h2>
            <BusquedaComponent gamesFiltados={ gamesFiltrado}></BusquedaComponent>
        </div>
    );
}