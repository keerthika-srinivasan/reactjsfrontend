import { retrieveProducts, retrieveProduct } from './APIUtil'

test('Retrieve Product List API call is defined', () => {
    expect(retrieveProducts).toBeDefined();
});

test('Retrieve Product Item API call is defined', () => {
    expect(retrieveProduct).toBeDefined();
});