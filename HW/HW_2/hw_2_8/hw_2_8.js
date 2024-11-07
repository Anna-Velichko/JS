// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('enter number');
if (day >=1 && day <= 10) {
    console.log('first decade');
} else if (day >10 && day <= 20) {
    console.log('second decade');
} else if (day >20 && day <= 31) {
    console.log('third decade');
} else {
    console.log('error')
}