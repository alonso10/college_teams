<template>
  <div class="content-college">
    <b-jumbotron header="List College Teams"></b-jumbotron>
    <college-search />
    <div v-if="countSearch > 0">
      <div v-for="college in searchs" :key="college.id" class="college">
        <college-card :college="college"/>
      </div>
    </div>
    <div v-else>
      <div v-for="college in colleges" :key="college.id" class="college">
        <college-card :college="college"/>
      </div>
    </div>
  </div>
</template>

<script>
import CollegeCard from '@/components/CollegeCard.vue';
import CollegeSearch from '@/components/SearchColleges.vue';

export default {
  name: "ListCollege",
  components: {
    CollegeCard,
    CollegeSearch
  },
  computed: {
    colleges() {
      return this.$store.getters.getAllColleges
    },
    searchs() {
      return this.$store.getters.getAllSearch
    },
    countSearch() {
      return this.$store.getters.getSearchRecords
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