"use strict";

var zmienna = {
    name: "Tablica",
    tablica: [17, 23, 27]
};

var uchwyt = document.getElementById('app');
var render = function render() {
    var mojDokument = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            zmienna.name
        ),
        React.createElement(
            "p",
            null,
            "Aktualnie w tablicy s\u0105: ",
            zmienna.tablica.length,
            " rekordy"
        ),
        React.createElement(
            "ul",
            null,
            zmienna.tablica.map(function (nr) {
                return React.createElement(
                    "li",
                    null,
                    nr
                );
            })
        )
    );
    ReactDOM.render(mojDokument, uchwyt);
};
render();
