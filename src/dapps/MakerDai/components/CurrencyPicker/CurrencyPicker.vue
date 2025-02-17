<template lang="html">
  <div v-click-outside="openDropdown" class="currency-picker-container">
    <div>
      <div
        :class="[
          open ? 'open' : '',
          'dropdown-container',
          token ? 'dropdown-text-container' : 'dropdown-text-container-white'
        ]"
        @click="openDropdown"
      >
        <p>
          <span
            v-if="getIcon(selectedCurrency.symbol) !== ''"
            :class="['cc', getIcon(selectedCurrency.symbol), 'cc-icon']"
            class="currency-symbol"
          />
          <span
            v-if="getIcon(selectedCurrency.symbol) === ''"
            class="currency-symbol"
          >
            <img
              :src="iconFetcher(selectedCurrency.symbol)"
              class="icon-image"
            />
          </span>

          {{ selectedCurrency.symbol }}
          <span class="subname">- {{ selectedCurrency.name }}</span>
        </p>
        <p v-show="!token">{{ selectedCurrency.name }}</p>
        <i
          v-if="selectable"
          :class="['fa', open ? 'fa-angle-up' : 'fa-angle-down']"
        />
      </div>
      <div
        v-if="selectable"
        :class="[open ? 'open' : 'hide', 'dropdown-item-container']"
      >
        <div class="dropdown-search-container">
          <input v-model="search" :placeholder="$t('interface.search')" />
          <i class="fa fa-search" />
        </div>
        <div class="item-container">
          <div
            v-for="(curr, idx) in localCurrencies"
            :class="[
              token
                ? selectedCurrency.symbol === curr.symbol
                  ? 'selected'
                  : ''
                : selectedCurrency.name === curr.name
                ? 'selected'
                : '',
              'item'
            ]"
            :key="idx"
            @click="selectCurrency(curr)"
          >
            <p>
              <span
                v-if="getIcon(curr.symbol) !== ''"
                :class="['cc', getIcon(curr.symbol), 'cc-icon']"
                class="currency-symbol"
              />
              <span v-if="getIcon(curr.symbol) === ''" class="currency-symbol">
                <img :src="iconFetcher(curr.symbol)" class="icon-image" />
              </span>
              {{ curr.symbol }}
              <span class="subname">- {{ curr.name }}</span>
            </p>
            <p />
            <p v-show="!token">{{ curr.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/images/currency/coins/asFont/cryptocoins.css';
import '@/assets/images/currency/coins/asFont/cryptocoins-colors.css';
import { hasIcon } from '@/partners';
export default {
  props: {
    currencies: {
      type: Array,
      default: function() {
        return [];
      }
    },
    page: {
      type: String,
      default: ''
    },
    token: {
      type: Boolean,
      default: true
    },
    fromSource: {
      type: Boolean,
      default: false
    },
    selectable: {
      type: Boolean,
      default: true
    },
    defaultValue: {
      type: Object,
      default: function() {
        return {};
      }
    },
    overrideCurrency: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      icon: '',
      localCurrencies: [],
      selectedCurrency: { name: 'Select an item', abi: '', address: '' },
      open: false,
      search: '',
      abi: '',
      address: ''
    };
  },
  watch: {
    overrideCurrency(newVal) {
      this.selectedCurrency = newVal;
    },
    selectedCurrency(newVal) {
      this.$emit('selectedCurrency', newVal);
    },
    currencies(newVal) {
      this.localCurrencies = [];
      newVal.forEach(curr => this.localCurrencies.push(curr));
    },
    search(newVal) {
      if (newVal !== '') {
        this.localCurrencies = this.currencies.filter(curr => {
          if (curr.name && curr.symbol) {
            if (
              curr.name.toLowerCase().includes(newVal.toLowerCase()) ||
              curr.symbol.toLowerCase().includes(newVal.toLowerCase())
            ) {
              return curr;
            }
          }
        });
      } else {
        this.localCurrencies = [];
        this.currencies.forEach(curr => this.localCurrencies.push(curr));
      }
    }
  },
  mounted() {
    if (this.currencies) {
      this.currencies.forEach(curr => this.localCurrencies.push(curr));
      this.selectedCurrency = this.currencies[0];
    } else {
      if (this.currencies.length) {
        this.selectedCurrency = this.currencies[0];
      } else {
        this.selectedCurrency = { name: 'Ethereum', symbol: 'ETH' };
      }
    }
  },
  methods: {
    iconFetcher(currency) {
      let icon;
      try {
        // eslint-disable-next-line
        icon = require(`@/assets/images/currency/coins/AllImages/${currency}.svg`);
      } catch (e) {
        // eslint-disable-next-line
        return require(`@/assets/images/icons/web-solution.svg`);
      }
      return icon;
    },
    getIcon(currency) {
      return hasIcon(currency);
    },
    openDropdown() {
      if (this.selectable) {
        this.open = !this.open;
      }
    },
    selectCurrency(currency) {
      this.openDropdown();
      this.selectedCurrency = currency;
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'CurrencyPicker.scss';
</style>
