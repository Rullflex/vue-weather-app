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

    <ul v-if="history.length" class="settings__history">
      <li 
        class="settings__history-item"
        v-for="(value, index) of history"
        v-bind:key="index"
        >
        <city-card 
        v-bind:city="value[0].name + ', ' + value[0].country" 
        v-bind:unit="value[0].temp"
        v-bind:isHidden="false"/>
      <city-card 
        v-bind:city="value[1].name + ', ' + value[1].country" 
        v-bind:unit="value[1].temp"
        v-bind:isHidden="false"/>
        </li>
      
    </ul>
    <p v-else>empty</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import CityCard from '@/components/CityCard.vue'

export default {
  name: 'Settings',
  computed: mapState(['activeUnit', 'history']),
  methods: mapMutations(['updateUnit']),

  components: {
    CityCard
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
    &__history {
      margin: 0 auto;
      width: 280px;
      &-item {
        display: flex;
        justify-content: space-between;
        width: 100%;

        margin-bottom: 30px;
      }

    }
  }
</style>