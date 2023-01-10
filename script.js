let usia = 22;

let biodata = document.getElementById('biodata');

function generateBiodata(){
    let generasi;

    if(usia < 0){
        generasi = "Anda Belum Lahir";
    }else if(usia < 3){
        generasi = "Generasi Bayi";
    }else if(usia < 11){
        generasi = "Generasi Anak-Anak";
    }else if(usia < 24){
        generasi = "Generasi Remaja";
    }else if(usia < 30){
        generasi = "Generasi Dewasa";
    }else{
        generasi = "Generasi Tua";
    }

    console.log(generasi);

    return biodata.innerHTML = generasi;
}

generateBiodata();