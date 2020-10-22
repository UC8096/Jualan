var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpg'],
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg']
]

function newCard(items) {
    const listB = document.getElementById("listBarang");

    var newcard = '';

    for (let i = 0; i < items.length; i++) {

        newcard +=
            `
            <div class="col-md-4 col-lg-4 col-sm-6 mb-2 mt-2">
                <div class="card" style="width: 22rem;">
                <img src="${items[i][4]}" height="200px" style="object-fit: cover;" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title" id="itemName">${items[i][1]}</h5>
                        <p class="card-text" id="itemDesc">${items[i][3]}</p>
                        <p class="card-text">Rp ${items[i][2]}</p>
                        <a href="#" class="btn btn-primary" onclick="hasiladd()" id="addCart">Tambahkan ke keranjang</a>
                    </div>
                </div>
            </div>
            `
    }
    listB.innerHTML = newcard;
    return newcard;
}

function search(items) {
    const formItemSearch = document.getElementById('formItem');


    formItemSearch.addEventListener('submit', function(e) {
        var keyWord = document.getElementById('keyword').value;
        var resultFind = [];

        e.preventDefault();

        for (let index = 0; index < items.length; index++) {
            if (items[index][1].toLowerCase().includes(keyWord.toLowerCase())) {
                resultFind.push(items[index]);
            } else {

            }
        }
        newCard(resultFind);
    });
}

var total = 1;

function hasiladd() {

    const addBarangCart = document.getElementById('total');
    var tambah = document.getElementById('total').value;

    addBarangCart.innerHTML = total++;
    return tambah;
}


newCard(items);
search(items);