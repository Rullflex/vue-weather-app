<template>
  <div class="settings">
    <h1 class="settings__title">Settings</h1>
    <h2 class="settings__subtitle">Units</h2>
    <div class="settings__units">
        <label>
          <input 
          type="radio" 
          name="unit"
          :value="'celsius'"
          :checked="activeUnit === 'C'"
          @input="updateUnit('C')">
          Celsius
        </label>
        <label>
          <input 
            type="radio" 
            name="unit"
            :value="'fahrenheit'"
            :checked="activeUnit === 'F'"
            @input="updateUnit('F')">
          Fahrenheit
        </label>
    </div>

    <h2 class="settings__subtitle">History</h2>

    <div
       v-if="history.length">

    </div>
    <p v-else>empty</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Settings',
  computed: mapState(['activeUnit', 'history']),
  methods: mapMutations(['updateUnit']),
  props: {
  },
}
</script>

<style lang="scss" scoped>
  .settings {
    &__title {
      font-size: 24px;
      font-weight: 700;
    }
    &__subtitle {
      font-size: 18px;
      font-weight: 700;
    }
    &__units {
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
    }
  }
</style>