import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';

let addExpense, history, wrapper;

beforeEach(() =>{
    const onSubmit = jest.fn();
    const history = { push: jest.fn()};
    const wrapper = shallow(<AddExpensePage addExpense={onSubmit} history={history}/>);
});

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () =>{
    const onSubmit = jest.fn();
    const history = {push: jest.fn() };
    const wrapper = shallow(<AddExpensePage onSubmit ={onSubmit} history={history} />);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenCalledWith(expenses[1]);
});