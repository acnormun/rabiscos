<template>
    <dpmg-pagina-component
        :container="container"
        :title="title"
        :sub-title="sub_title"
    >
        <template #section0>
            <div class="q-mb-lg">
                <q-input
                    label="Pesquisar..."
                    :model-value="search"
                    @update:model-value="search = String($event)"
                />
            </div>
            <div>
                <q-tree
                    :nodes="filter"
                    node-key="id"
                    tick-strategy="leaf-filtered"
                    :ticked="ticked"
                    @update:ticked="ticked = $event"
                    default-expand-all
                ></q-tree>
            </div>
        </template>
    </dpmg-pagina-component>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { all } from 'axios';

const search = ref<string>();
const ticked = ref([]);
let allElements: Array<Teste>;

const container: Array<DpmgPaginaContainerPropType> = [
    {
        header: 0,
        title: '',
        havePermission: true,
        expandItem: true,
        openItem: false,
    },
];

type Acao = {
    id: number;
    label: string;
    children: Array<Tree>;
};

const tree: Array<Acao> = [
    {
        id: 1,
        label: 'Teste 1 camada1',
        children: [
            {
                id: 2,
                label: 'Teste 1 - Filho 1',
                children: [
                    {
                        id: 3,
                        label: 'Teste 1 - Filho 1 - Filho 1',
                        children: [
                          {
                            id: 555,
                            label: 'Camada 4',
                            children : []
                          }
                        ],
                    },
                    {
                        id: 4,
                        label: 'Teste 1 - Filho 1 - Filho 2',
                        children: [],
                    },
                ],
            },
            {
                id: 5,
                label: 'Teste 1 - Filho 2',
                children: [
                    {
                        id: 6,
                        label: 'Teste 1 - Filho 2 - Filho 1',
                        children: [],
                    },
                    {
                        id: 7,
                        label: 'Teste 1 - Filho 2 - Filho 2',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        id: 8,
        label: 'Teste 2 olha o tituloo',
        children: [
            {
                id: 9,
                label: 'Teste 2 - Filho 1 eai',
                children: [
                    {
                        id: 10,
                        label: 'Teste 2 - Filho 1 - Filho 1',
                        children: [],
                    },
                    {
                        id: 11,
                        label: 'Teste 2 - Filho 1 - Filho 2 alooo',
                        children: [],
                    },
                ],
            },
            {
                id: 13,
                label: 'Teste 2 - Filho 2',
                children: [
                    {
                        id: 14,
                        label: 'Teste 2 - Filho 2 - Filho 1',
                        children: [],
                    },
                    {
                        id: 15,
                        label: 'Teste 2 - Filho 2 - Filho 2 socorro',
                        children: [],
                    },
                ],
            },
        ],
    },
];

function find(tree: Acao[], s: string) {
    return tree
        .map((item) => {
            if (item.label.toLowerCase().includes(s)) {
                return item;
            }
            if (item.children.length > 0) {
                const foundChild = find(item.children, s);
                if (foundChild.length > 0) {
                    return item;
                }
            }
            return 0;
        })
        .filter((item) => item != 0);
}

const filter = computed(() => {
    const s = search.value?.toLowerCase();
    if (!s) {
        return tree;
    }
    if (!!s) {
        return find(tree, s);
    }

    return [];
});
</script>

<style scoped></style>
