import degrade from '../assets/degrade.jpg';
import disfarcado from '../assets/disfarcado.jpg';
import moicano from '../assets/moicano.jpg';
import curto from '../assets/curto.jpg';
import simples from '../assets/simples.jpg';

import pomada from '../assets/pomada.png';
import kit from '../assets/kit.jpg';
import shampoo from '../assets/shampoo.png';
import locao from '../assets/locao.png';
import gel from '../assets/gel.png';

const data = [
    {
        cortes: [
            {
                imagem: degrade,
                titulo: "Degradê",
                preco: "34,90",
                descricao: "O corte degradê traz transições suaves e um estilo versátil, oferecendo um visual moderno com amplas opções de estilos."
            },
            {
                imagem: disfarcado,
                titulo: "Disfarçado",
                preco: "29,90",
                descricao: "Como alternativa ao degradê, este corte mais baixo oferece uma diversidade de personalizações para todos os gostos."
            },
            {
                imagem: moicano,
                titulo: "Moicano",
                preco: "37,90",
                descricao: "Com laterais curtas e uma faixa central elevada, o moicano é a escolha certa se você deseja um visual marcante e chamativo."
            },
            {
                imagem: curto,
                titulo: "Curto",
                preco: "24,90",
                descricao: "O corte ideal para aqueles que buscam um visual limpo, elegante e fácil de manter."
            },
            {
                imagem: simples,
                titulo: "Simples",
                preco: "24,90",
                descricao: "Se você procura apenas um corte básico sem perder seu estilo, essa é a escolha ideal."
            }
        ]
    },
    {
        produtos: [
            {
                imagem: pomada,
                titulo: "Pomada modeladora",
                preco: "23,90",
                descricao: "Ideal para deixar o cabelo com aspecto molhado e solto."
            },
            {
                imagem: kit,
                titulo: "Kit de pentes e escovas",
                preco: "39,90",
                descricao: "Um kit completo com pentes e escovas de diversos tamanhos e espessuras."
            },
            {
                imagem: shampoo,
                titulo: "Shampoo anticaspa",
                preco: "24,90",
                descricao: "A melhor escolha para eliminar a caspa."
            },
            {
                imagem: locao,
                titulo: "Loção pós-barba",
                preco: "27,90",
                descricao: "Deixe sua pele macia e revigorada após o barbear com esta loção aromática."
            },
            {
                imagem: gel,
                titulo: "Gel fixador",
                preco: "21,90",
                descricao: "Mantenha o corte sempre de pé e brilhante."
            }
        ]
    }
];

export default data;