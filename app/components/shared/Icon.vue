<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="icon.viewBox"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    class="shrink-0"
    aria-hidden="true"
  >
    <path
      v-for="(path, idx) in icon.paths"
      :key="idx"
      :d="path"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface IconDef {
  viewBox: string
  paths: string[]
}

interface Props {
  name: string
}

const props = defineProps<Props>()

const icons: Record<string, IconDef> = {
  palette: {
    viewBox: '0 0 24 24',
    paths: [
      'M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 0-5H12a2 2 0 0 1-2-2 11 11 0 0 1 2-11Z',
      'M7.5 10h.01M9.5 7.5h.01M13.5 7h.01M16.5 10h.01'
    ]
  },
  layers: {
    viewBox: '0 0 24 24',
    paths: [
      'm12 3 9 5-9 5-9-5 9-5Z',
      'm3 12 9 5 9-5',
      'm3 16 9 5 9-5'
    ]
  },
  bolt: {
    viewBox: '0 0 24 24',
    paths: ['m13 2-8 11h6l-1 9 9-13h-6l0-7Z']
  },
  cart: {
    viewBox: '0 0 24 24',
    paths: [
      'M3 4h2l2 10h11l2-7H7',
      'M9 19.5h.01M17 19.5h.01'
    ]
  },
  book: {
    viewBox: '0 0 24 24',
    paths: [
      'M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 1 4 16.5v-11Z',
      'M8 7h8M8 11h8'
    ]
  },
  pen: {
    viewBox: '0 0 24 24',
    paths: [
      'M4 20h4l10-10a2.1 2.1 0 0 0-3-3L5 17v3Z',
      'm13 6 5 5'
    ]
  },
  rocket: {
    viewBox: '0 0 24 24',
    paths: [
      'M14 4a8 8 0 0 1 6 6l-5 5-6-6 5-5Z',
      'M9 9 4 14l1 5 5 1 5-5',
      'M14 10h.01'
    ]
  },
  blocks: {
    viewBox: '0 0 24 24',
    paths: [
      'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z'
    ]
  },
  storefront: {
    viewBox: '0 0 24 24',
    paths: [
      'M3 10h18l-2-5H5l-2 5Z',
      'M5 10v9h14v-9',
      'M9 19v-5h6v5'
    ]
  },
  briefcase: {
    viewBox: '0 0 24 24',
    paths: [
      'M9 6V4h6v2',
      'M3 9h18v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z',
      'M3 12h18'
    ]
  },
  code: {
    viewBox: '0 0 24 24',
    paths: ['m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14']
  },
  chart: {
    viewBox: '0 0 24 24',
    paths: ['M4 19V5M4 19h16M8 15l3-3 3 2 5-6']
  },
  compass: {
    viewBox: '0 0 24 24',
    paths: [
      'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z',
      'm14.8 9.2-2 5.6-5.6 2 2-5.6 5.6-2Z'
    ]
  },
  user: {
    viewBox: '0 0 24 24',
    paths: [
      'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
      'M4 20a8 8 0 0 1 16 0'
    ]
  },
  target: {
    viewBox: '0 0 24 24',
    paths: [
      'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z',
      'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
      'M12 12h.01'
    ]
  },
  folder: {
    viewBox: '0 0 24 24',
    paths: [
      'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z'
    ]
  },
  help: {
    viewBox: '0 0 24 24',
    paths: [
      'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z',
      'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3',
      'M12 17h.01'
    ]
  },
  sun: {
    viewBox: '0 0 24 24',
    paths: [
      'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
      'M12 2v2',
      'M12 20v2',
      'M5.3 5.3l1.4 1.4',
      'M17.3 17.3l1.4 1.4',
      'M2 12h2',
      'M20 12h2',
      'M5.3 18.7l1.4-1.4',
      'M17.3 6.7l1.4-1.4'
    ]
  },
  moon: {
    viewBox: '0 0 24 24',
    paths: [
      'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z'
    ]
  },
  mail: {
    viewBox: '0 0 24 24',
    paths: [
      'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
      'm22 6-10 7L2 6'
    ]
  },
  chat: {
    viewBox: '0 0 24 24',
    paths: [
      'M3 20c-.5.5-1.5.5-2-.2C.3 19 0 18.2 0 17.1V5c0-1.7 1.3-3 3-3h18c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3H7.5l-4.5 5Z'
    ]
  },
  menu: {
    viewBox: '0 0 24 24',
    paths: [
      'M4 12h16',
      'M4 6h16',
      'M4 18h16'
    ]
  },
  close: {
    viewBox: '0 0 24 24',
    paths: [
      'M18 6 6 18',
      'M6 6l12 12'
    ]
  },
  'chevron-right': {
    viewBox: '0 0 24 24',
    paths: [
      'm9 18 6-6-6-6'
    ]
  }
}

const fallback: IconDef = {
  viewBox: '0 0 24 24',
  paths: ['M12 5v14M5 12h14']
}

const icon = computed(() => icons[props.name] ?? fallback)
</script>
