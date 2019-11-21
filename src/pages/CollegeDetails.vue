<template>
  <div>
    <h1>Details</h1>
    <b-card :title="college.school">
      <b-card-body>
        <h4>Logos</h4>
        <b-row>
          <b-col :cols="columns" v-for="(logo, index) in college.logos" :key="index">
            <div  class="content-img">
              <b-card-img 
                :src="logo"  
                alt="Logo"
              />
            </div>
          </b-col>
        </b-row>
        <b-list-group flush>
          <b-list-group-item>
            <b-row>
              <b-col>
                <div>
                  Color: <div class="content-color" :style="getColor(college.color)"></div>
                </div> 
              </b-col>
              <b-col>
                <div>
                  Alternative Color: <div class="content-color" :style="getColor(college.alt_color)"></div>
                </div>
              </b-col>
            </b-row>
          </b-list-group-item>
          <b-list-group-item>Alternative name 1: <span class="content-data">{{ college.alt_name1 ? college.alt_name1 : 'Not found' }}</span></b-list-group-item>
          <b-list-group-item>Alternative name 2: <span class="content-data">{{ college.alt_name2 ? college.alt_name2 : 'Not found' }}</span></b-list-group-item>
          <b-list-group-item>Alternative name 3: <span class="content-data">{{ college.alt_name3 ? college.alt_name3 : 'Not found' }}</span></b-list-group-item>
          <b-list-group-item>Mascot: <span class="content-data">{{ college.mascot ? college.mascot : 'Not found' }}</span></b-list-group-item>
          <b-list-group-item>Conference: <span class="content-data">{{ college.conference ? college.conference : 'Not found' }}</span></b-list-group-item>
          <b-list-group-item>Division: <span class="content-data">{{ college.division ? college.division : 'Not found' }}</span></b-list-group-item>
          <b-list-group-item>Abbrevation: <span class="content-data">{{ college.abbrevation ? college.abbrevation : 'Not found' }}</span></b-list-group-item>
        </b-list-group>
      </b-card-body>
      <b-button href="/" variant="primary">Back</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CollegeDetails',
  computed: {
    college() {
      const colleges = this.$store.getters.getAllColleges;
      const college = colleges.find((item) => {
        return item.id === parseInt(this.$route.params.id, 10);
      })
      return college;
    },
    columns() {
      return this.college.logos ? (12 / this.college.logos.length) : 12;
    }
  },
  methods: {
    getColor(color) {
      return `background-color: ${color}`
    },
  }
}
</script>

<style scoped>
.content-img {
  width: 200px;
  height: 200px;
  margin: auto;
}
.content-color {
  width: 80px;
  height: 50px;
  margin: 0 auto
}
.content-data {
  font-weight: 800
}
</style>