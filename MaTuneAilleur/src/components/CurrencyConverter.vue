<template>
  <div class="currency-converter">
    <h1>Currency Converter</h1>
    <div class="form-group">
      <label for="amount">Amount</label>
      <input v-model="amount" type="number" id="amount" placeholder="Enter amount" />
    </div>

    <div class="form-group">
      <label for="from-currency">From</label>
      <select v-model="fromCurrency" id="from-currency">
        <option v-for="(name, code) in currencies" :key="code" :value="code">{{ name }}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="to-currency">To</label>
      <select v-model="toCurrency" id="to-currency">
        <option v-for="(name, code) in currencies" :key="code" :value="code">{{ name }}</option>
      </select>
    </div>

    <button @click="convertCurrency">Convert</button>

    <div v-if="convertedAmount">
      <h2>Converted Amount: {{ convertedAmount }} {{ toCurrency }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: null,
      fromCurrency: 'USD',
      toCurrency: 'EUR',
      currencies: {
        USD: 'United States Dollar',
        EUR: 'Euro',
        GBP: 'British Pound Sterling',
        JPY: 'Japanese Yen',
      },
      convertedAmount: null
    };
  },
  methods: {
    async convertCurrency() {
      if (!this.amount || !this.fromCurrency || !this.toCurrency) {
        alert('Please fill out all fields');
        return;
      }

      const apiKey = '0f266bd99ef61db5975a378d'; // Remplacez par votre clé API ExchangeRate-API
      const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${this.fromCurrency}/${this.toCurrency}/${this.amount}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        this.convertedAmount = data.conversion_result;
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    }
  }
};
</script>

<style scoped>
.currency-converter {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
.form-group {
  margin-bottom: 20px;
}
input,
select {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
}
button {
  padding: 10px 20px;
}
</style>
