interface Tree {
    id: number,
    label: string,
    children: Tree[]
}

const tree: Tree[] = [
    {
        id:1,
        label: 'Camada1',
        children:[
            {
                id:2,
                label: 'Camada2',
                children: [
                    {
                        id:3,
                        label:'Camada3',
                        children: []
                    }
                ]
            }
        ]
    }
]

function find(tree: Tree[], s: string){
    const filtro = tree.filter(item => {
        if(item.label.toLowerCase.contains(s)){
            return true
        }else if(item.children.length>0){
            const found = find(item.children,s)
            if(!!found){
                return true
            }
        }

        return false
    })



}