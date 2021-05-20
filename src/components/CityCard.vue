<template>
  <a href="#" class="card" @click.prevent="$emit('onClick', id)">
    <p class="card__title">{{ city }}</p>
    <div class="card__units">{{ unit }}</div>
  </a>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'CityCard',
  methods: {
    ...mapActions(['getWeather'])
  },
  props: {
    id: Number,
    city: String,
    unit: String,
  },
}
</script>


<style scoped lang="scss">
.card {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 100px;
  min-height: 60px;
  padding: 4px 5px 20px;
  
  border: 1px solid black;
  
  font-size: 14px;
  text-align: center;
  color: black;
  text-decoration: none;

  position: relative;
  &__title {
    margin: 0;
  }
  &__units {
    position: absolute;
    bottom: 15px;
  }
}
</style>
