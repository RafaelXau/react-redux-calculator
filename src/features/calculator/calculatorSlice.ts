import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CalculatorState {
  result: number;
  formula: string;
  error: string;
}

const initialState: CalculatorState = {
  result: 0,
  formula: '',
  error: ''
};

/**
 * Função que remove zeros a esquerda em todos os números de uma string.
 * @param str String a ser modificada
 * @returns String com os zeros a esquerda removidos
 */
function removeZeros(str: string): string {
  const numbers = str.match(/(\d+\.?\d*)/g);
  if (numbers) {
    numbers.forEach((number) => {
      str = str.replace(number, number.replace(/^0+/, ''));
    });
  }
  return str;
}

// Lista de operadores que podem ser inseridos na fórmula
const operators = ['+', '-', '*', '/'];

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addChar: (state, action: PayloadAction<string>) => {
      state.error = '';

      if (action.payload === 'C') {
        state.formula = '';
        state.result = 0;
        return;
      }

      // Se o payload for igual a '+-', inverte o sinal do ultimo número da fórmula e o coloca entre parênteses
      if (action.payload === '+-') {
        const lastNumber = state.formula.match(/(\d+\.?\d*)$/);
        if (lastNumber) {
          state.formula = state.formula.replace(lastNumber[0], `(${Number(lastNumber[0]) * -1})`);
        }
        return;
      }

      // Operadores
      if (operators.includes(action.payload)) {
        // Se o último caractere da fórmula for um operador, substitui pelo operador atual
        if (operators.includes(state.formula[state.formula.length - 1])) {
          state.formula = state.formula.slice(0, -1) + action.payload;
          return;
        }

        // Se a fórmula terminar com um ponto, não permite inserir um operador
        if (state.formula[state.formula.length - 1] === '.') {
          return;
        }

        // Se a formula estiver vazia, e o resultado for diferente de zero, insere o resultado no inicio da fórmula e limpa o resultado
        if (state.formula === '' && state.result !== 0) {
          state.formula = state.result + action.payload;
          state.result = 0;
          return;
        }

        // Se a fórmula estiver vazia, não permite inserir um operador
        if (state.formula === '') {
          return;
        }
      }

      // Ponto
      if (action.payload === '.') {
        // Se o último caractere da fórmula for um ponto, não permite inserir outro ponto
        if (state.formula[state.formula.length - 1] === '.') {
          return;
        }

        // Se o payload for igual a '.', e a fórmula estiver vazia ou se o último caracterer da fórmula for um operador, insere o zero antes do ponto
        if (state.formula === '' || operators.includes(state.formula[state.formula.length - 1])) {
          state.formula += '0.';
          return;
        }
      }

      // Se o payload for igual a "CE", remove o último caractere da fórmula
      if (action.payload === 'CE') {

        // Se a fórmula terminar com ")", remove o ultimo caractere e todos os caracteres até encontrar o "("
        if (state.formula[state.formula.length - 1] === ')') {
          let count = 0;
          for (let i = state.formula.length - 1; i >= 0; i--) {
            if (state.formula[i] === ')') {
              count++;
            }
            if (state.formula[i] === '(') {
              count--;
            }
            if (count === 0) {
              state.formula = state.formula.slice(0, i);
              return;
            }
          }
        }

        state.formula = state.formula.slice(0, -1);
        return;
      }

      state.formula += action.payload;
    },
    calculate: (state) => {
      state.error = '';

      // Se a fórmula terminar com um operador, não permite calcular
      if (operators.includes(state.formula[state.formula.length - 1])) {
        state.error = 'A fórmula não pode terminar com um operador';
        return;
      }

      // Se a fórmula terminar com um ponto, não permite calcular
      if (state.formula[state.formula.length - 1] === '.') {
        state.error = 'A fórmula não pode terminar com um ponto';
        return;
      }

      // Se a formula estiver vazia, não permite calcular
      if (state.formula === '') {
        return;
      }

      state.result = eval(removeZeros(state.formula));
      state.formula = '';
    },
  }
});

export const { addChar, calculate } = calculatorSlice.actions;

export const selectResult = (state: RootState) => state.calculator.result;
export const selectFormula = (state: RootState) => state.calculator.formula;
export const selectError = (state: RootState) => state.calculator.formula;

export default calculatorSlice.reducer;