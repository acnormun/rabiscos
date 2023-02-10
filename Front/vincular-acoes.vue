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
          />
        </div>
      </template>
    </dpmg-pagina-component>
  </template>
  
  <script lang="ts" setup>
  import {computed, onMounted, reactive, ref} from 'vue';
  import { useRoute } from 'vue-router';
  import PerfilUsuarioData from "@/views/data/pages/perfil-usuario-data";
  
  const data = reactive(PerfilUsuarioData)
  const search = ref<string>();
  const ticked = ref([]);
  let allElements: Array<Acao>;
  
  const route = useRoute();
  const title = route.meta.title as string;
  const sub_title = route.meta.sub_title as string;
  
  const container: Array<DpmgPaginaContainerPropType> = [
      {
          header: 0,
          title: 'Perfil',
          havePermission: true,
          expandItem: true,
          openItem: false,
      },
  ];
  
  type Acao = {
      id: number;
      label: string;
  
      noTick?: boolean;
      children: Array<Acao>;
  };
  
  const tree: Array<Acao> = [
      {
          id: 1,
          label: 'DPMG APP - APP',
          noTick: true,
          children: [
              {
                  id: 2,
                  label: 'Demonstrativo',
  
                  children: [
                      {
                          id: 3,
                          label: 'Pesquisar',
                          children: [
                              {
                                  id: 555,
                                  label: 'Camada 4',
                                  children: [],
                              },
                          ],
                      },
                      {
                          id: 4,
                          label: 'Relatório Power BI',
                          children: [],
                      },
                  ],
              },
              {
                  id: 5,
                  label: 'Consultar Pessoa',
                  children: [
                      {
                          id: 6,
                          label: 'Pesquisar',
                          children: [],
                      },
                      {
                          id: 7,
                          label: 'Acessar - Consultar Pessoa',
                          children: [],
                      },
                  ],
              },
          ],
      },
      {
          id: 8,
          label: 'Departamento Pessoal APP - DPAPP',
          noTick: true,
          children: [
              {
                  id: 9,
                  label: 'Demonstrativo',
                  children: [
                      {
                          id: 10,
                          label: 'Pesquisar',
                          children: [],
                      },
                      {
                          id: 11,
                          label: 'Relatório Power BI',
                          children: [],
                      },
                  ],
              },
              {
                  id: 13,
                  label: 'Histórico de Férias',
                  children: [
                      {
                          id: 14,
                          label: 'Pesquisar - Histórico de Férias',
                          children: [],
                      },
                      {
                          id: 15,
                          label: 'Editar - Histórico de Férias',
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
              if (item.label.toLowerCase().match(s)) {
                  return item;
              }
              if (item.children.length === 0) {
                  return;
              }
              const foundChild = find(item.children, s);
              const result = item;
              return foundChild.length > 0 ? result : undefined;
          })
          .filter((item) => !!item);
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
  
  onMounted( async () => {
    await data.findAll()
  })
  </script>
  
  <style scoped></style>
  