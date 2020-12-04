import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble'; //Forma de empaquetar paquetes

export default {
    input: 'src/index.js',
    output: {
        name: 'AppointmentComponent',
        exports: 'named',
    },
    plugins: [
        vue({
            css: true,
            compileTemplate: true,
            template: {
                isProduction: true,
            },
        }),
        buble(),
    ],
};