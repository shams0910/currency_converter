<template lang="html">
    <div id="app">
    <div class="core_header">
    <p>Todays currency rates ({{base}}) </p>
    <Tabs class="tabs">
      <Tab class="tab" v-for="(value, currency) in currencies" :key="currency" :name="value[0]">
      </Tab>
    </Tabs>
    </div>
     
    <div class="banner">
        <div class="input-row">
            <input type="text" v-model="amount"/> <span>{{base}}</span>
        </div>
    <div class="card_container" v-if="baseCurrencies">
        <Card v-for="(index, value) in displayCards" :visibleCards="displayCards"  :key="index[0]" :to="base" :for="index[0]" :inp="amount" :outp="(amount*index[1]).toFixed(2)"/>
    </div>
    <div class="pagination_group">
        <Pagination 
        :cards="baseCurrencies"
        @page:update="updatePage"
        :pageIndex="currentpage"
        :pageSize="pageSize"
        />   
    </div>
    </div>
  </div>
</template>
  
<script>
//import neccessary components
import Tab from "../components/Tab";
import Tabs from "../components/Tabs";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

export default {
  name: "Dashboard",
  components: {
    Tab,
    Tabs,
    Card,
    Pagination,
  },
  data() {
    return {
      currencies: null,
      amount: 5,
      currentpage: 1,
      pageSize: 4,
    };
  },
  created() {
    this.$store.dispatch("getCurrencies").then(() => {
      this.currencies = this.$store.getters.getCurrencies;
      this.updateDisplayCards();
    });
  },

  methods: {
    updatePage(pageNumber) {
      this.currentpage = pageNumber;
      this.updateDisplayCards();
    },
    updateDisplayCards() {
      if (this.displayCards.length == 0 && this.currentpage > 0) {
        this.updatePage(this.currentpage - 1);
      }
      console.log(this.displayCards);
    },
  },
  computed: {
    baseCurrencies() {
      return this.$store.getters.getBaseCurrencies;
    },
    displayCards() {
      return Object.entries(this.baseCurrencies).slice(
        this.currentpage * this.pageSize,
        this.currentpage * this.pageSize + this.pageSize
      );
    },
    base() {
      return this.$store.getters.getBase;
    },
  },
};
</script>


<style >
#app {
  width: 100%;
}
.core_header {
  background-color: #ffe782;
}
.core_header p {
  color: #2b2d33;
  padding: 2rem 0px 1rem 2rem;
  font-size: 1.5rem;
  font-family: "Roboto";
  margin-bottom: 1rem;
}
.tab {
  background-color: #fff;
}
.banner .card_container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.input-row {
  margin: 1rem 1rem 1rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.input-row input {
  width: 7rem;
  padding: 0.4rem 0.4rem 0 0.4rem;
  border: none;
  border-bottom: 2px solid #d8d8d8;
  font-family: "Roboto";
  font-size: 18px;
  color: #2b2d33;
  outline: none;
  text-align: end;
}
.input-row span {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #b9b9b9;
}

@media screen and (max-width: 768px) {
  #app {
    width: 100%;
  }
  .core_header {
    background-color: #ffe782;
  }
  .core_header p {
    color: #2b2d33;
    padding: 2rem 0px 1rem 2rem;
    font-size: 1.5rem;
    font-family: "Roboto";
    margin-bottom: 1rem;
  }

  .banner .card_container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .pagination_group {
    text-align: center;
  }
}
</style>