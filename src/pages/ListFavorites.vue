<template>
  <div>
    <b-jumbotron header="List Favorite College Teams"></b-jumbotron>
    <div class="content-college">
      <div v-for="college in colleges" :key="college.id" class="college">
        <college-card :college="college" is-favorite />
      </div>
    </div>
  </div>
</template>

<script>
import CollegeCard from '@/components/CollegeCard.vue';

export default {
  name: "ListCollege",
  components: {
    CollegeCard
  },
  computed: {
    colleges() {
      return this.$store.getters.getAllFavorites
    }
  }
}
</script>

<style scoped>
/* Float container */
.content-college {
  max-width: 1200px;
  margin: 0 auto;
  /* Clearfix */
  overflow: auto;
}
.content-college::after {
  /* Clearfix */
  content: "";
  clear: both;
  display: table;
}

.college {
  float: left;
  width: 33.333%;
  box-sizing: border-box;
  /* border: 1px solid #000; */
  padding: 5px
}
</style>