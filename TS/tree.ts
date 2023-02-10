// interface Tree {
//     id: number,
//     label: string,
//     children: Tree[]
// }

// const arvore: Tree[] = [
//     {
//         id:1,
//         label: 'Camada1',
//         children:[
//             {
//                 id:2,
//                 label: 'Camada2',
//                 children: [
//                     {
//                         id:3,
//                         label:'Camada3',
//                         children: []
//                     }
//                 ]
//             }
//         ]
//     }
// ]

// function find(arvore: Tree[], s: string){
//     const filtro = arvore.filter(item => {
//         if(item.label.toLowerCase().includes(s)){
//             return true
//         }else if(item.children.length>0){
//             const found = find(item.children,s)
//             if(){
//                 return true
//             }
//         }

//         return false
//     })

// }