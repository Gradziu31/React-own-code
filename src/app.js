const zmienna = {
    name: "Tablica",
    tablica: [17, 23, 27]
}


const uchwyt = document.getElementById('app');
const render = () => {
    const mojDokument = (
        <div>
            <h1>{zmienna.name}</h1>
            <p>Aktualnie w tablicy są: {zmienna.tablica.length} rekordy</p>
            <ul>{zmienna.tablica.map((nr) => 
                {
                    return <li>{nr}</li>
                })
                }
            </ul>
        </div>
    );
    ReactDOM.render(mojDokument, uchwyt);
};
render();
