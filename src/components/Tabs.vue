<template>
  <div>
    <div class="core">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="tab.name"
          :class="{ isActive: index == sIndex }"
          @click="select(index, tab.name)"
        >
          {{ tab.name }}
        </li>
      </ul>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      sIndex: 1,
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
    this.select(0, "CAD");
  },
  methods: {
    select(index, base) {
      this.sIndex = index || 0;
      this.tabs.forEach((tab, TabIndex) => {
        tab.isActive = TabIndex === index;
      });
      this.$store.dispatch("getBaseCurrencies", base);
    },
  },
};
</script>

<style lang="scss">
html {
  --scrollbarBG: #cfd8dc;
  --thumbBG: #90a4ae;
}
.core {
  margin-left: 1rem;
  margin-right: 1rem;
  overflow-x: scroll;
  scrollbar-width: none;
}
.core::-webkit-scrollbar {
  height: 15px;
}
.core::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG);
  border-radius: 6px;
}
.core::-webkit-scrollbar-track {
  background: transparent;
}
ul {
  width: calc(76.5em * 2);
  height: auto;
  display: flex;
}
li {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-align: center;
  padding: 10px 2px 10px 2px;
  width: 100%;
  list-style: none;
  border-radius: 10px;
  color: #ccae68;
  font-family: "Roboto";
  width: 33.3%;
  &:hover {
    cursor: pointer;
  }
}
.isActive {
  background-color: #ffffff;
  color: #000000;
}

@media only screen and (max-width: 768px) {
  .core {
    margin-left: 1rem;
    margin-right: 1rem;
    overflow-x: scroll;
  }
  ul {
    width: calc(95em * 2);
    height: auto;
    display: flex;
  }
  li {
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-align: center;
    padding: 10px 2px 10px 2px;
    list-style: none;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    color: #ccae68;
    font-family: "Roboto";
    width: 33.3%;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>