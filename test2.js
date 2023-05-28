function errormessage() {
    var message = document.getElementById('hasil');
    alert("ANDA BUKAN PRAKTIKAN PPW1, ANDA TIDAK BOLEH MASUK")
}

function table(nama, nim, angkatan) {
    var message = document.getElementById('hasil');
    var table = `<table class="table">
        <thead>
            <tr>
                <th>Nama</th>
                <th>NIM</th>
                <th>Angkatan</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${nama}</td>
                <td>${nim}</td>
                <td>${angkatan}</td>
            </tr>
        </tbody>
    </table>`;
    message.innerHTML = table;
    console.log(document)
}

function form() {
    var isPraktikan = confirm("APAKAH ANDA PRAKTIKAN PPW1 ?!");
    if (isPraktikan) {
        var nama = prompt("Masukkan nama:");
        var nim = prompt("Masukkan NIM:");
        var angkatan = prompt("Masukkan angkatan:");
        table(nama, nim, angkatan);
    } else {
        errormessage();
    }
}

form()
