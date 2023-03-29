"use strict";
fetch("https://fakestoreapi.com/products?limit=15").then((value) => {
    return value.json();
}).then((objdata) => {
    var data = "";
    objdata.map((values) => {
        data += `<tr>
                        <td style="border: 2px solid black; font-size: 20px; padding: 8px;">${values.id}</td>
                        <td style="border: 2px solid black; font-size: 20px; padding: 8px;">${values.title}</td>
                        <td style="border: 2px solid black; font-size: 20px; padding: 8px;">${values.description}</td>
                        <td style="border: 2px solid black; font-size: 20px; padding: 8px;">${values.price + "$"}</td>
                    </tr>`;
        let body = document.getElementById(`table`);
        body.innerHTML = data;
    });
}).catch((error) => {
    console.log(error);
});
//# sourceMappingURL=Ashar.js.map