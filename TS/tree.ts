type Teste = {
    id: number,
    label: string,
    children: Array<Teste>
  }
  
  const s = 'ppp'

  const tree: Array<Teste>  = [
    {
      id: 1,
      label: 'Teste 1',
      children: [
        {
          id:2,
          label:'Teste 1 - Filho 1',
          children: [
            {
              id:3,
              label: 'Teste 1 - Filho 1 - Filho 1',
              children: []
            },
            {
              id:4,
              label: 'Teste 1 - Filho 1 - Filho 2',
              children: []
            }
          ]
        },
        {
          id:5,
          label:'Teste 1 - Filho 2',
          children: [
            {
              id:6,
              label: 'Teste 1 - Filho 2 - Filho 1',
              children: []
            },
            {
              id:7,
              label: 'Teste 1 - Filho 2 - Filho 2',
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 8,
      label: 'Teste 2',
      children: [
        {
          id:9,
          label:'Teste 2 - Filho 1',
          children: [
            {
              id:10,
              label: 'Teste 2 - Filho 1 - Filho 1',
              children: []
            },
            {
              id:11,
              label: 'Teste 2 - Filho 1 - Filho 2',
              children: []
            }
          ]
        },
        {
          id:13,
          label:'Teste 2 - Filho 2',
          children: [
            {
              id:14,
              label: 'Teste 2 - Filho 2 - Filho 1',
              children: []
            },
            {
              id:15,
              label: 'Teste 2 - Filho 2 - Filho 2',
              children: []
            }
          ]
        }
      ]
    }
  ]

  function find(tree: Array<Teste>, s: string){

    return tree.filter(item => {
        if(item.label.toLowerCase().includes(s)){
          return true
        }else{
          return find(item.children,s)
        }
      })
  }

  console.log(find(tree,s))