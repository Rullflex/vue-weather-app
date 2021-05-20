<template>
  <div class="home">
    <p class="home__title">{{ homeTitle }}</p>
    <p class="home__score">Score: {{ score }}</p>
    <div v-if="currentPair.length" class="home__cards">
      <city-card 
        v-bind:id="0"
        v-bind:city="currentPair[0].name + ', ' + currentPair[0].country" 
        v-bind:unit="currentPair[0].temp + ' ' + activeUnit"
        v-on:onClick="checkCard"
        v-bind:isHidden="!answerIsDone"/>
      <city-card 
        v-bind:id="1"
        v-bind:city="currentPair[1].name + ', ' + currentPair[1].country" 
        v-bind:unit="currentPair[1].temp + ' ' + activeUnit"
        v-on:onClick="checkCard"
        v-bind:isHidden="!answerIsDone"/>
    </div>
    <p v-else>loading...</p>
    <button 
      class="home__btn" 
      v-bind:class="{'hidden': !answerIsDone}"
      @click="nextStep"
      >Next cities</button>
  </div>
</template>

<script>
// @ is an alias to /src
import CityCard from '@/components/CityCard.vue'
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'Home',
  computed: mapState(['homeTitle', 'score', 'answerIsDone', 'activeUnit', 'currentPair']),
  methods: {
    ...mapActions(['checkCard', 'nextStep']),
  },
  components: {
    CityCard
  },
}
</script>

<style lang="scss">
.home {
  &__title {
    font-size: 30px;
    font-weight: 700;
  }
  &__score {
    font-size: 15px;
  }
  &__plus {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;

    border: 1px solid black;
    border-radius: 5px;

    font-size: 16px;
    color: black;
    text-decoration: none;

    margin-bottom: 20px;
  }
  &__cards {
    display: flex;
    justify-content: space-between;
    width: 280px;

    margin: 0 auto;
  }
  &__btn {
    margin-top: 30px;
    
  }
  .hidden {
      display: none;
  }
}
</style>
