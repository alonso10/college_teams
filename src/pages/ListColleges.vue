<template>
  <div class="overflow-auto">
    <b-table 
      striped 
      hover 
      id="colleges-table"
      :items="college" 
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
    ></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="colleges-table"
    ></b-pagination>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      fields: ['school', 'mascot', 'abbreviation', 'conference'],
      college: [],
      perPage: 10,
      currentPage: 1,
    }
  },
  mounted() {
    axios
      .get("https://api.collegefootballdata.com/teams")
      .then(response => { this.college = response.data; })
      .catch(error => alert(error) );
  },
  computed: {
      rows() {
        return this.college.length
      }
    }
}
</script>