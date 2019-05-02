$(function () {
    var indexFn = {
        init() {
            $('#btnPantalla1').on('click', this.Pantalla1);
            $('#btnPantalla2').on('click', this.Pantalla2);
        },
        Pantalla1() {
            $('#dynamic').load("views/app/pantalla1.html");
        },
        Pantalla2() {
            $('#dynamic').load("views/app/pantalla2.html");
        }
    };

    indexFn.init();
});