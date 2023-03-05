<template>
  <div class="flex items-center justify-center">
    <div class="flex flex-col bg-white rounded p-4 w-full max-w-xs">
      <div class="font-bold text-xl">
        {{ weatherDetails.name }}
      </div>
      <div class="text-sm text-gray-500">
        {{ weatherDetails.weather[0].main }}
      </div>
      <div
        class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg h-24 w-24"
      >
        <icon :type="weatherDetails.weather[0].main" />
      </div>
      <div class="flex flex-row items-center justify-center mt-6">
        <div class="font-medium text-3xl">{{ weatherDetails.main.temp }}°C</div>
        <div class="flex flex-col items-center ml-6">
          <div>{{ weatherDetails.weather[0].description }}</div>
          <div>
            <span class="text-sm"><i class="far fa-long-arrow-down"></i></span>
            <span class="text-sm font-light text-gray-500"
              >Feels Like: {{ weatherDetails.main.feels_like }}°C</span
            >
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-between mt-6">
        <div class="flex flex-col items-center">
          <div class="font-medium text-sm">Wind</div>
          <div class="text-sm text-gray-500">
            {{ weatherDetails.wind.speed }}k/h
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="font-medium text-sm">Humidity</div>
          <div class="text-sm text-gray-500">
            {{ weatherDetails.main.humidity }}%
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="font-medium text-sm">Visibility</div>
          <div class="text-sm text-gray-500">
            {{ weatherDetails.visibility / 1000 }}km
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from "@/components/Icon.vue";
const props = defineProps({
  weatherDetails: Object,
});
</script>

<style></style>
