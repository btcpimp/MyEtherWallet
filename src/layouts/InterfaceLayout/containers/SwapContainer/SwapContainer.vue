<template>
  <div class="swap-container">
    <div v-show="!bityExitToFiat">
      <swap-confirmation-modal
        ref="swapConfirmation"
        :selected-provider="selectedProvider"
        :swap-details="swapDetails"
        :current-address="currentAddress"
        @swapStarted="resetSwapState"
      />

      <swap-send-to-modal
        ref="swapSendTo"
        :selected-provider="selectedProvider"
        :swap-details="swapDetails"
        :current-address="currentAddress"
        @swapStarted="resetSwapState"
      />

      <div class="title-block">
        <interface-container-title :title="$t('common.swap')" />
      </div>

      <div class="form-content-container">
        <div class="send-form">
          <div class="form-block amount-to-address">
            <div class="amount">
              <div class="title title-and-copy">
                <h4>{{ $t('swap.from') }}</h4>
                <p
                  v-if="tokenBalances[fromCurrency] > 0"
                  class="all-button prevent-user-select"
                  @click="swapAll"
                >
                  {{ $t('common.balance.total') }}
                </p>
              </div>
              <swap-currency-picker
                :currencies="fromArray"
                :override-currency="overrideFrom"
                :from-source="true"
                page="SwapContainerFrom"
                @selectedCurrency="setFromCurrency"
              />
              <div class="the-form amount-number">
                <input
                  v-model="fromValue"
                  :placeholder="$t('swap.deposit-amount')"
                  type="number"
                  name
                  value
                  step="any"
                  @input="amountChanged('from')"
                />
              </div>
              <div class="error-message-container">
                <p v-if="fromBelowMinAllowed">{{ fromBelowMinAllowed }}</p>
                <p v-if="!hasEnough && !fromBelowMinAllowed">
                  {{ $t('swap.warning.not-enough-funds') }}
                </p>
                <p v-if="fromAboveMaxAllowed">{{ fromAboveMaxAllowed }}</p>
              </div>
            </div>
            <div class="exchange-icon" @click="flipCurrencies">
              <img :src="images.swap" alt />
            </div>
            <div class="amount">
              <div class="title">
                <h4>{{ $t('swap.to') }}</h4>
              </div>
              <swap-currency-picker
                :currencies="toArray"
                :override-currency="overrideTo"
                :from-source="false"
                page="SwapContainerTo"
                @selectedCurrency="setToCurrency"
              />
              <div class="the-form amount-number">
                <input
                  v-model="toValue"
                  :placeholder="$t('swap.recieve-amount')"
                  type="number"
                  name
                  value
                  step="any"
                  @input="amountChanged('to')"
                />
              </div>
              <div class="error-message-container">
                <p v-if="toBelowMinAllowed">{{ toBelowMinAllowed }}</p>
                <p v-if="toAboveMaxAllowed">{{ toAboveMaxAllowed }}</p>
              </div>
            </div>
          </div>
          <!-- form-block amount-to-address -->
        </div>

        <div v-if="!isExitToFiat" class="send-form">
          <div class="the-form gas-amount">
            <swap-address-selector
              :currency="toCurrency"
              :current-address="currentAddress"
              :copybutton="true"
              :title="$t('sendTx.to-addr')"
              :clear-address="overrideAddress"
              @toAddress="setToAddress"
              @validAddress="validAddress = $event"
              @unableToValidate="unableToValidate = $event"
            />
          </div>
        </div>

        <div
          v-if="isExitToFiat && fromCurrency !== baseCurrency"
          class="send-form"
        >
          <div class="the-form gas-amount">
            <swap-address-selector
              :currency="fromCurrency"
              :current-address="currentAddress"
              :copybutton="true"
              :clear-address="overrideAddress"
              :title="$t('sendTx.from-addr')"
              @toAddress="setExitFromAddress"
              @validAddress="validExitAddress = $event"
              @unableToValidate="unableToValidateExit = $event"
            />
          </div>
        </div>

        <div v-if="showRefundAddress" class="send-form">
          <div class="the-form gas-amount">
            <swap-address-selector
              :currency="fromCurrency"
              :current-address="currentAddress"
              :copybutton="true"
              :clear-address="overrideAddress"
              :title="$t('swap.refund', { currency: fromCurrency })"
              @toAddress="setRefundAddress"
              @validAddress="validRefundAddress = $event"
              @unableToValidate="unableToValidateRefund = $event"
            />
          </div>
        </div>

        <div class="send-form">
          <div class="title-container">
            <div class="title title-and-copy">
              <h4>{{ $tc('swap.providers.string', 2) }}</h4>
            </div>
          </div>
          <providers-radio-selector
            :loading-provider-error="loadingError"
            :loading-provider-rates="!haveProviderRates"
            :provider-data="providerList"
            :from-value="+fromValue"
            :to-value="+toValue"
            :no-providers-pair="noProvidersPair"
            :loading-data="loadingData"
            :providers-found="providersFound"
            :provider-selected="selectedProvider"
            :switch-currency-order="switchCurrencyOrder"
            :all-supported-providers="supportedProviders"
            :provider-selected-name="providerSelectedName"
            @selectedProvider="setSelectedProvider"
          />
        </div>

        <div class="submit-button-container">
          <div
            v-show="finalizingSwap"
            class="disabled submit-button large-round-button-green-filled clickable"
          >
            <i class="fa fa-spinner fa-spin" />
            {{ $t('swap.button-loading') }}
          </div>
          <div
            v-show="!finalizingSwap"
            :class="[
              validSwap ? '' : 'disabled',
              'submit-button large-round-button-green-filled clickable'
            ]"
            @click="swapConfirmationModalOpen"
          >
            {{ $t('common.continue') }}
            <i class="fa fa-long-arrow-right" aria-hidden="true" />
          </div>
          <div class="clear-all-btn" @click="reset()">
            {{ $t('common.clear-all') }}
          </div>
        </div>
      </div>
    </div>
    <swap-exit-to-fiat
      v-if="bityExitToFiat"
      :swap-details="swapDetails"
      :exit-from-address="exitSourceAddress"
      :exit-to-fiat-callback="exitToFiatCallback"
      @backButtonClick="exitToFiatAbort"
    ></swap-exit-to-fiat>
  </div>
</template>
<script>
import BigNumber from 'bignumber.js';
import debug from 'debug';
import { mapState } from 'vuex';

import { Toast } from '@/helpers';
import ProvidersRadioSelector from './components/ProvidersRadioSelector';
import SwapAddressSelector from './components/SwapAddressSelector';
import InterfaceBottomText from '@/components/InterfaceBottomText';
import InterfaceContainerTitle from '../../components/InterfaceContainerTitle';
import swapIcon from '@/assets/images/icons/swap-widget.svg';
import ImageKybernetowrk from '@/assets/images/etc/kybernetwork.png';
import ImageBity from '@/assets/images/etc/bity.png';
import ImageVisaMaster from '@/assets/images/etc/visamaster.png';

import SwapCurrencyPicker from './components/SwapCurrencyPicker';
import SwapConfirmationModal from './components/SwapConfirmationModal';
import SwapExitToFiat from './components/SwapExitToFiat';
import SwapSendToModal from './components/SwapSendToModal';

import {
  SwapProviders,
  providers,
  bestProviderForQuantity,
  bestRateForQuantity,
  isValidEntry,
  providerNames,
  supportedProviders,
  BASE_CURRENCY,
  fiat,
  MIN_SWAP_AMOUNT,
  ERC20
} from '@/partners';

const errorLogger = debug('v5:swapContainer');
import SwapSendForm from './components/SwapExitToFiat';

export default {
  components: {
    'interface-bottom-text': InterfaceBottomText,
    'interface-container-title': InterfaceContainerTitle,
    'swap-currency-picker': SwapCurrencyPicker,
    'swap-address-selector': SwapAddressSelector,
    'providers-radio-selector': ProvidersRadioSelector,
    'swap-confirmation-modal': SwapConfirmationModal,
    'swap-exit-to-fiat': SwapExitToFiat,
    'swap-send-form': SwapSendForm,
    'swap-send-to-modal': SwapSendToModal
  },
  props: {
    tokensWithBalance: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      baseCurrency: BASE_CURRENCY,
      providerSelectedName: '',
      toAddress: '',
      currentAddress: '',
      refundAddress: '',
      exitFromAddress: '',
      fromCurrency: 'ETH',
      toCurrency: 'ETH',
      displayToValue: 1,
      displayFromValue: 1,
      fromValue: 1,
      toValue: 1,
      invalidFrom: 'none',
      lastBestRate: 0,
      selectedProvider: {},
      swapDetails: {},
      currencyDetails: {},
      swap: new SwapProviders(
        providers,
        {
          network: this.$store.state.network.type.name,
          web3: this.$store.state.web3,
          getRateForUnit: false
        },
        { tokensWithBalance: this.tokensWithBalance }
      ),
      images: {
        kybernetowrk: ImageKybernetowrk,
        bity: ImageBity,
        visaMaster: ImageVisaMaster,
        swap: swapIcon
      },
      toArray: [],
      fromArray: [],
      providerData: [],
      tokenBalances: {},
      providerRatesRecieved: [],
      noProvidersPair: {},
      providersFound: [],
      tempStatuses: [],
      overrideFrom: {},
      overrideTo: {},
      providerNames: providerNames,
      supportedProviders: supportedProviders,
      fiatCurrenciesArray: fiat.map(entry => entry.symbol),
      finalizingSwap: false,
      validAddress: true,
      validRefundAddress: true,
      validExitAddress: true,
      ratesRetrived: false,
      issueRecievingRates: false,
      loadingData: true,
      haveProviderRates: false,
      loadingError: false,
      switchCurrencyOrder: false,
      bityExitToFiat: false,
      exitToFiatCallback: () => {},
      debounceUpdateEstimate: {},
      debounceDoThing: {},
      unableToValidate: false,
      unableToValidateExit: false,
      unableToValidateRefund: false,
      overrideAddress: false
    };
  },
  computed: {
    ...mapState(['account', 'ens', 'gasPrice', 'web3', 'network', 'online']),
    bestRate() {
      try {
        if (this.providerData.length > 0) {
          if (this.selectedProvider.provider) {
            return this.providerList.find(entry => {
              return entry.provider === this.selectedProvider.provider;
            }).rate;
          }
          return bestRateForQuantity([...this.providerList], this.fromValue);
        }
        return this.lastBestRate;
      } catch (e) {
        errorLogger(e);
      }
    },
    fromBelowMinAllowed() {
      if (new BigNumber(MIN_SWAP_AMOUNT).gt(new BigNumber(this.fromValue)))
        return `${this.$t('swap.value-below-min')} ${MIN_SWAP_AMOUNT}`;
      if (
        new BigNumber(this.selectedProvider.minValue).gt(
          new BigNumber(this.fromValue)
        )
      )
        return this.$t('swap.value-below-min', {
          value: this.selectedProvider.maxValue,
          currency: this.fromCurrency
        });
      return false;
    },
    fromAboveMaxAllowed() {
      if (this.selectedProvider.provider === this.providerNames.bity) {
        if (this.checkBityMax) {
          return this.$t('swap.value-above-max', {
            value: this.selectedProvider.maxValue,
            currency: this.fromCurrency
          });
        }
        return false;
      } else if (
        new BigNumber(this.fromValue).gt(
          new BigNumber(this.selectedProvider.maxValue)
        ) &&
        new BigNumber(this.selectedProvider.maxValue).gt(new BigNumber(0))
      )
        return this.$t('swap.value-above-max', {
          value: this.selectedProvider.maxValue,
          currency: this.fromCurrency
        });
      return false;
    },
    toBelowMinAllowed() {
      if (new BigNumber(0).gte(new BigNumber(this.toValue)))
        return this.$t('swap.below-min-swap');
      return false;
    },
    toAboveMaxAllowed() {
      if (this.checkBityMax) return this.$t('swap.above-max-swap');
      return false;
    },
    providerList() {
      if (this.providerData.length > 0) {
        return bestProviderForQuantity([...this.providerData], this.fromValue);
      }
      return [];
    },
    isExitToFiat() {
      return this.fiatCurrenciesArray.includes(this.toCurrency);
    },
    validSwap() {
      // initial chack.  will provide an alert on the next screen if no address is provided
      const canExit =
        this.isExitToFiat && this.fromCurrency !== this.baseCurrency
          ? this.exitFromAddress !== ''
          : true;
      return (
        this.hasEnough &&
        (this.toAddress !== '' || canExit) &&
        this.allAddressesValid &&
        this.selectedProvider.minValue <= +this.fromValue &&
        (+this.fromValue <= this.selectedProvider.maxValue ||
          this.selectedProvider.maxValue === 0)
      );
    },
    checkBityMax() {
      if (this.swap.isProvider(this.providerNames.bity)) {
        return (
          !this.swap
            .getProvider(this.providerNames.bity)
            .maxCheck(
              this.fromCurrency,
              this.fromValue,
              this.toCurrency,
              this.toValue
            ) && this.selectedProvider.provider === this.providerNames.bity
        );
      }
      return false;
    },
    showRefundAddress() {
      return (
        !SwapProviders.isToken(this.fromCurrency) &&
        this.selectedProvider.provider === this.providerNames.changelly
      );
    },
    allAddressesValid() {
      const validBaseToAddress = this.toAddress !== '' && this.validAddress;

      if (this.isExitToFiat) {
        if (this.fromCurrency === this.baseCurrency) {
          return true;
        }
        return this.exitFromAddress !== '' && this.validExitAddress;
      }
      if (this.showRefundAddress) {
        if (
          this.fromCurrency === this.baseCurrency ||
          SwapProviders.isToken(this.fromCurrency)
        ) {
          const validRefundAddress =
            this.refundAddress === '' && this.validRefundAddress;
          return validBaseToAddress && validRefundAddress;
        }
        return SwapProviders.checkAddress(
          this.refundAddress,
          this.fromCurrency
        );
      }

      return validBaseToAddress;
    },
    hasEnough() {
      return this.swap.hasEnough(
        this.fromCurrency,
        this.fromValue,
        this.baseCurrency,
        this.tokenBalances,
        this.account.balance
      );
    },
    exitSourceAddress() {
      return this.isExitToFiat && this.fromCurrency === this.baseCurrency
        ? this.currentAddress
        : this.exitFromAddress;
    }
  },
  watch: {
    ['this.network.type.name']() {
      this.swap.updateNetwork(this.network.type.name, this.web3);
    },
    ['swap.updateProviderRates']() {
      const { toArray, fromArray } = this.swap.initialCurrencyLists;
      this.toArray = toArray;
      this.fromArray = fromArray;
    },
    ['swap.haveProviderRates']() {
      this.haveProviderRates = this.swap.ratesRetrieved;
      const { toArray, fromArray } = this.swap.buildInitialCurrencyArrays();
      this.toArray = toArray;
      this.fromArray = fromArray;
      this.lastBestRate = bestRateForQuantity(
        [...this.providerList],
        this.fromValue
      );
      this.updateRateEstimate(
        this.fromCurrency,
        this.toCurrency,
        this.fromValue,
        'from'
      );
    },
    network(newVal) {
      this.providerData = [];
      this.haveProviderRates = false;
      this.loadingData = false;
      this.swap = new SwapProviders(providers, {
        network: newVal.type.name,
        web3: this.web3
      });
    }
  },
  mounted() {
    const { toArray, fromArray } = this.swap.initialCurrencyLists;
    this.toArray = toArray;
    this.fromArray = fromArray;
    this.currentAddress = this.account.address;
    this.debounceUpdateEstimate = this.web3.utils._.debounce(
      this.updateEstimate,
      300
    );
    this.debounceReviseRateEstimate = this.web3.utils._.debounce(
      this.updateRateEstimate,
      2000
    );
  },
  methods: {
    reset() {
      this.fromCurrency = 'ETH';
      this.toCurrency = 'BTC';
      this.overrideFrom = { name: 'Ether', symbol: 'ETH' };
      this.overrideTo = { name: 'Bitcoin', symbol: 'BTC' };
      this.fromValue = 1;
      this.overrideAddress = !this.overrideAddress;
      this.providerSelectedName = '';
      this.toAddress = '';
      this.refundAddress = '';
      this.exitFromAddress = '';
      this.updateRateEstimate(
        this.fromCurrency,
        this.toCurrency,
        this.fromValue,
        'from'
      );
      this.finalizingSwap = false;
      this.validAddress = true;
      this.issueRecievingRates = false;
      this.loadingError = false;
      this.switchCurrencyOrder = false;
      this.bityExitToFiat = false;
    },
    flipCurrencies() {
      this.providerSelectedName = '';
      this.switchCurrencyOrder = true;
      const origTo = this.toValue;
      this.fromCurrency = this.currencyDetails.to.symbol;
      this.toCurrency = this.currencyDetails.from.symbol;
      this.overrideFrom = this.currencyDetails.to;
      this.overrideTo = this.currencyDetails.from;
      this.updateRateEstimate(
        this.fromCurrency,
        this.toCurrency,
        origTo,
        'from'
      );
      this.switchCurrencyOrder = false;
    },
    setSelectedProvider(provider) {
      this.selectedProvider = this.providerList.find(entry => {
        return entry.provider === provider;
      });
      this.providerSelectedName = this.selectedProvider.provider;
      this.updateEstimate('from');
    },
    setToAddress(address) {
      this.toAddress = address;
    },
    setRefundAddress(address) {
      this.refundAddress = address;
    },
    setExitFromAddress(address) {
      this.exitFromAddress = address;
    },
    swapAll() {
      this.fromValue = this.swap.convertToTokenBase(
        this.fromCurrency,
        this.tokenBalances[this.fromCurrency]
      );
      this.amountChanged('from');
    },
    setFromCurrency(value, dir = 'from') {
      this.providerSelectedName = '';
      this.currencyDetails.from = value;
      this.fromCurrency = value.symbol;
      this.getBalance(this.fromCurrency);
      this.toArray = this.swap.setToCurrencyBuilder(value);
      this.updateRateEstimate(
        this.fromCurrency,
        this.toCurrency,
        this.fromValue,
        dir
      );
    },
    setToCurrency(value, dir = 'to') {
      this.providerSelectedName = '';
      this.currencyDetails.to = value;
      this.toCurrency = value.symbol;
      this.fromArray = this.swap.setFromCurrencyBuilder(value);
      this.updateRateEstimate(
        this.fromCurrency,
        this.toCurrency,
        this.fromValue,
        dir
      );
    },
    async getBalance(currency) {
      if (SwapProviders.isToken(currency) && currency !== this.baseCurrency) {
        const balance = await new this.web3.eth.Contract(
          ERC20,
          this.swap.getTokenAddress(currency)
        ).methods
          .balanceOf(this.currentAddress)
          .call();

        this.$set(this.tokenBalances, currency, balance);
      }
    },
    amountChanged(direction) {
      if (
        (isValidEntry(this.fromValue) && direction === 'from') ||
        (isValidEntry(this.toValue) && direction === 'to')
      ) {
        if (
          this.swap.getProvider(this.providerNames.simplex).currencies.fiat[
            this.fromCurrency
          ]
        ) {
          this.debounceUpdateEstimate(this.providerNames.simplex + direction);
        } else {
          this.debounceUpdateEstimate(direction);
          const fromCur = this.fromCurrency;
          const toCur = this.toCurrency;
          const fromVal = this.fromValue;
          this.debounceReviseRateEstimate(fromCur, toCur, fromVal, direction);
        }
      }
    },
    async updateEstimate(input) {
      if (this.simplexUpdate) {
        this.simplexUpdate = false;
        return;
      }

      let fromValue, toValue, simplexProvider, simplexRateDetails;
      switch (input) {
        case 'to':
          this.fromValue = this.swap.calculateFromValue(
            this.toValue,
            this.bestRate,
            this.fromCurrency
          );
          break;
        case 'from':
          this.toValue = this.swap.calculateToValue(
            this.fromValue,
            this.bestRate,
            this.toCurrency
          );
          break;
        case `${this.providerNames.simplex}to`:
          this.simplexUpdate = true;
          simplexProvider = this.swap.getProvider(this.providerNames.simplex);

          if (simplexProvider.canQuote(this.fromValue, this.toValue)) {
            simplexRateDetails = await simplexProvider.updateDigital(
              this.fromCurrency,
              this.toCurrency,
              this.toValue
            );

            this.fromValue = simplexRateDetails.fromValue;
            this.toValue = simplexRateDetails.toValue;
          } else {
            simplexRateDetails = await simplexProvider.updateFiat(
              this.fromCurrency,
              this.toCurrency,
              51
            );

            const rate = new BigNumber(simplexRateDetails.toValue)
              .div(simplexRateDetails.fromValue)
              .toString(10);

            this.fromValue = this.swap.calculateFromValue(
              this.toValue,
              rate,
              this.fromCurrency
            );
          }

          break;
        case `${this.providerNames.simplex}from`:
          this.simplexUpdate = true;
          simplexProvider = this.swap.getProvider(this.providerNames.simplex);
          if (simplexProvider.canQuote(this.fromValue, this.toValue)) {
            simplexRateDetails = await simplexProvider.updateFiat(
              this.fromCurrency,
              this.toCurrency,
              this.fromValue
            );

            this.fromValue = simplexRateDetails.fromValue;
            this.toValue = simplexRateDetails.toValue;
          } else {
            simplexRateDetails = await simplexProvider.updateFiat(
              this.fromCurrency,
              this.toCurrency,
              51
            );

            const rate = new BigNumber(simplexRateDetails.toValue)
              .div(simplexRateDetails.fromValue)
              .toString(10);

            this.toValue = this.swap.calculateToValue(this.fromValue, rate);
          }

          break;
        default:
          toValue = this.swap.calculateToValue(this.fromValue, this.bestRate);
          fromValue = this.swap.calculateFromValue(this.toValue, this.bestRate);
          this.toValue = toValue;
          this.fromValue = fromValue;
          break;
      }
    },
    async updateRateEstimate(fromCurrency, toCurrency, fromValue, to) {
      if (this.haveProviderRates) {
        this.loadingData = true;
        this.noProvidersPair = { fromCurrency, toCurrency };
        this.selectedProvider = {}; // Reset the selected provider when new rate pair is choosen
        this.providerData = [];
        const {
          providersFound,
          callsToMake
        } = await this.swap.updateRateEstimate(
          fromCurrency,
          toCurrency,
          fromValue,
          this.toValue
        );
        this.providersFound = providersFound;
        const results = await Promise.all(
          callsToMake.map(func =>
            func(fromCurrency, toCurrency, fromValue, this.toValue)
          )
        );
        this.loadingData = false;
        if (
          results.every(
            entry =>
              entry.fromCurrency === this.fromCurrency &&
              entry.toCurrency === this.toCurrency
          )
        ) {
          this.providerData = bestProviderForQuantity(
            results.map(entry => {
              if (+entry.rate > 0) {
                return {
                  provider: entry.provider,
                  fromCurrency,
                  fromValue: this.fromValue,
                  toCurrency,
                  rate: +entry.rate,
                  minValue: entry.minValue || 0,
                  maxValue: entry.maxValue || 0,
                  computeConversion: function(_fromValue) {
                    return new BigNumber(_fromValue)
                      .times(this.rate)
                      .toFixed(6)
                      .toString(10);
                  }
                };
              } else if (entry.provider === this.providerNames.changelly) {
                Toast.responseHandler(
                  `Failed to retrieve Changelly rate from ${fromCurrency} to ${toCurrency}`,
                  3
                );
              } else if (entry.provider === this.providerNames.bity) {
                Toast.responseHandler(
                  `Failed to retrieve Bity rate from ${fromCurrency} to ${toCurrency}`,
                  3
                );
              } else if (entry.provider === this.providerNames.kyber) {
                Toast.responseHandler(
                  `Failed to retrieve Kyber Network rate from ${fromCurrency} to ${toCurrency}`,
                  3
                );
              } else if (entry.provider === this.providerNames.simplex) {
                Toast.responseHandler(
                  `Failed to retrieve Simplex rate from ${fromCurrency} to ${toCurrency}`,
                  3
                );
              }
            }),
            fromValue
          );
          this.updateEstimate(to);
        }
      }
    },
    async swapConfirmationModalOpen() {
      try {
        if (this.validSwap) {
          this.finalizingSwap = true;
          const providerDetails = this.providerList.find(entry => {
            return entry.provider === this.selectedProvider.provider;
          });
          const swapDetails = {
            providerDetails: providerDetails,
            fromValue: this.fromValue,
            toValue: this.toValue,
            toAddress: this.toAddress || this.currentAddress,
            fromAddress: this.currentAddress,
            refundAddress: SwapProviders.isToken(providerDetails.fromCurrency)
              ? this.currentAddress
              : this.refundAddress,
            exitFromAddress:
              this.isExitToFiat && this.fromCurrency === this.baseCurrency
                ? this.currentAddress
                : this.exitFromAddress
          };
          this.swapDetails = await this.swap.startSwap(swapDetails);
          this.finalizingSwap = false;

          if (this.swapDetails.isExitToFiat) {
            this.bityExitToFiat = true;
            this.exitToFiatCallback = swapDetailsExit => {
              this.bityExitToFiat = false;
              this.swapDetails = swapDetailsExit;
              this.openConfirmModal(this.swapDetails);
            };
          } else {
            this.openConfirmModal(this.swapDetails);
          }
        }
      } catch (e) {
        //abort (empty response from provider or failure to finalize details)
        if (e.message === 'abort') {
          this.finalizingSwap = false;
          return;
        }
        this.$refs.swapConfirmation.$refs.swapconfirmation.hide();
        this.$refs.swapSendTo.$refs.swapconfirmation.hide();
        this.finalizingSwap = false;
        errorLogger(e);
        Toast.responseHandler(e, false);
      }
    },
    openConfirmModal(swapDetails) {
      if (swapDetails.dataForInitialization && swapDetails.maybeToken) {
        this.$refs.swapConfirmation.$refs.swapconfirmation.show();
      } else if (swapDetails.dataForInitialization && !swapDetails.maybeToken) {
        this.$refs.swapSendTo.$refs.swapconfirmation.show();
      } else {
        throw Error('Error while requesting finalized details from provider');
      }
    },
    exitToFiatAbort() {
      // get any component state values to temporarily persist, and reset swap state to state before exit to fiat selected.
      this.bityExitToFiat = !this.bityExitToFiat;
    },
    resetSwapState() {
      this.reset();
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'SwapContainer.scss';
</style>
