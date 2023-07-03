<script setup>
import { ref, toRaw, onMounted, onActivated, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useUserInfoStore } from "@/stores";

onMounted(() => {});

onActivated(() => {});
</script>

<template>
  <div>
    <div>father</div>
    <div>**************</div>
    <div>
      <router-view v-slot="{ Component }">
        <Transition name="fade-transform" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </Transition>
      </router-view>
    </div>
  </div>
</template>
