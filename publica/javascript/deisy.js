$(document).ready(function () {
    //Initiat WOW JS
    new WOW().init();
    //smoothScroll
    smoothScroll.init();
    $('#cargarDarwin').on('click', cargar_darwin);
    $('#cargarEsposo').on('click', cargar_esposo);
    $('#cargarHija').on('click', cargar_hija);
    $('#cargarEmpleo').on('click', cargar_empleo);
})

function cargar_darwin() {
    var html = `  <div class="card mb-3" style="max-width: 540px;">
                                    <div class="row no-gutters">
                                        <div class="col-md-4">
                                            <img src="./publica/imagenes/pp.jpg" class="card-img img-response" alt="...">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">MI HIJO MAYOR</h5>
                                                <p class="card-text">Es una gran persona llena de talentos, actualmente cantante y estudiante.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
    $('#cuerpo-body').html(html);
    $("#exampleModalLabel").html("DARWIN SMITH CALVO BUENAÑOS");
}

function cargar_esposo() {
    var html = `  <div class="card mb-3" style="max-width: 540px;">
                                    <div class="row no-gutters">
                                        <div class="col-md-4">
                                            <img src="./publica/imagenes/esposo.jpg" class="card-img img-response" alt="...">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">ESPOSO</h5>
                                                <p class="card-text">Es una persona muy dedicada a su profesión y mantiene un constante aprendizaje.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
    $('#cuerpo-body').html(html);
    $("#exampleModalLabel").html("DIEGO ALEJANDRO CALVO");
}

function cargar_empleo() {
    var html = `  <div class="card mb-3" style="max-width: 540px;">
                                    <div class="row no-gutters">
                                        <div class="col-md-4">
                                            <img src="./publica/imagenes/ninos.jpg" class="card-img img-response h-100" alt="...">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">ICBF</h5>
                                                <p class="card-text">Soy la cuidadora de 12 angeles, los cuales cuido como si fuesen mis hijos, cada uno de ellos me dejan un gran aprendizaje</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
    $('#cuerpo-body').html(html);
    $("#exampleModalLabel").html("MI ACTUAL TRABAJO");
}

function cargar_hija() {
    var html = `  <div class="card mb-3" style="max-width: 540px;">
                                    <div class="row no-gutters">
                                        <div class="col-md-4">
                                            <img src="./publica/imagenes/hija.jpg" class="card-img img-response" alt="...">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">HIJA</h5>
                                                <p class="card-text">Mi hija es una TikTok Super ahorradora, amante de los animales y soñadora.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
    $('#cuerpo-body').html(html);
    $("#exampleModalLabel").html("ASHLY DAYANA CALVO BUENAÑOS");
}
