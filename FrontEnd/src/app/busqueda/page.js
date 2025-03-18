export const dynamic = 'force-dynamic';

export default function BusquedaPage(props) {
    var query = '';
    query = props.searchParams?.then((searchParams) => {
        query = searchParams?.query || '';
        console.log("Query:", query);
        return query;
      });

    return(
        <div>
            <h2>Busqueda: {query}</h2>
        </div>
    );
}