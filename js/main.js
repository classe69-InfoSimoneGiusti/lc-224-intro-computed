var app = new Vue(
    { 
        el: '#app',
        data: {
            numero1: 0,
            numero2: 0,
            /* risultato: 0 */
        },
        computed: {
            risultatoSomma() {
                console.log('METODO COMPUTATO INVOCATO');
                return parseInt(this.numero1) + parseInt(this.numero2);
            }
        },
        methods: {
           /*  somma() {
                console.log('CALCOLATA LA SOMMA');
                this.risultato = parseInt(this.numero1) + parseInt(this.numero2);
            }  */
        }
    }    
)