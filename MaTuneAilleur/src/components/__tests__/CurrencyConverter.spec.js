import { mount } from '@vue/test-utils';
import CurrencyConverter from '../components/CurrencyConverter.vue';

describe('CurrencyConverter.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CurrencyConverter);
  });

  it('renders the component correctly', () => {
    expect(wrapper.find('h1').text()).toBe('Currency Converter');
    expect(wrapper.find('input#amount').exists()).toBe(true);
    expect(wrapper.find('select#from-currency').exists()).toBe(true);
    expect(wrapper.find('select#to-currency').exists()).toBe(true);
    expect(wrapper.find('button').text()).toBe('Convert');
  });

  it('shows converted amount after conversion', async () => {
    // Mock fetch to simulate API response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ conversion_result: 100 }),
      })
    );

    wrapper.setData({ amount: 100, fromCurrency: 'USD', toCurrency: 'EUR' });
    await wrapper.find('button').trigger('click');

    expect(wrapper.vm.convertedAmount).toBe(100);
    expect(wrapper.find('h2').text()).toContain('Converted Amount: 100 EUR');
  });

  it('displays an alert if fields are empty', async () => {
    global.alert = jest.fn(); // Mock the alert function
    await wrapper.find('button').trigger('click');

    expect(global.alert).toHaveBeenCalledWith('Please fill out all fields');
  });
});
