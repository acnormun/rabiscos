<template>
    <!-- TODO: Adaptar para layout mobile -->
    <dpmg-pagina-component
        :container="container"
        :sub-title="sub_title"
        :title="title"
    >
      <template #section0>
        <q-select label="Teste" :options="filter" multiple :model-value="values" @update:model-value="values = $event" use-chips>
          <template #no-option>
            <q-item>  <q-item-section    class="text-italic text-grey"  >    <span>Nenhum resultado      disponível.</span>  </q-item-section></q-item>
          </template>
        </q-select>
        <div class="row q-mt-lg">
          <div class="col flex justify-end">
            <q-btn class="q-mr-xs" color="primary" type="submit">
              <q-icon class="fa-solid fa-floppy-disk q-mr-sm" />
              <strong>VINCULAR</strong>
            </q-btn>
            <q-btn color="grey-8">
              CANCELAR
            </q-btn>
          </div>
        </div>
      </template>
    </dpmg-pagina-component>
  
  
  </template>
  
  <script lang="ts" setup>
  import {computed, onMounted, reactive, ref} from 'vue';
  import {useRoute} from 'vue-router';
  
  
  const route = useRoute();
  
  const title = route.meta.title as string;
  const sub_title = route.meta.sub_title as string;
  
  const values = ref<Array<any>>([])
  
  const options = reactive([
    {
      label: 'aaa',
      value: 1
    },
    {
      label: 'bbb',
      value: 2
    },
    {
      label: 'ccc',
      value: 3
    }
  ])
  
  const filter = computed(() => {
    return options.filter(item=>{
      if(!values.value.includes(item)){
        return item
      }
    })
  })
  
  const container: Array<DpmgPaginaContainerPropType> = [
    {
      header: 0,
      title: 'Perfil',
      havePermission: true,
      expandItem: false,
      openItem: true,
    },
  
  ];
  
  
  </script>
  
  <style lang="scss" scoped></style>
  