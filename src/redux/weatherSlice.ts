import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Weathertypes {
  curentWeather: string;
  curentTemp: string;
  curentCity: string;
  curentPressure: string;
  curentHumidity: string;
}

const initialState: Weathertypes = {
  curentWeather: '',
  curentTemp: '',
  curentPressure: '',
  curentHumidity: '',
  curentCity: 'Cracow',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeWeather: (state, action: PayloadAction<string>) => {
      state.curentWeather = action.payload;
    },
    changeTemp: (state, action: PayloadAction<string>) => {
      state.curentTemp = action.payload;
    },
    changeCity: (state, action: PayloadAction<string>) => {
      state.curentCity = action.payload;
    },
    changePressure: (state, action: PayloadAction<string>) => {
      state.curentPressure = action.payload;
    },
    changeHumidity: (state, action: PayloadAction<string>) => {
      state.curentHumidity = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeWeather,
  changeTemp,
  changeCity,
  changeHumidity,
  changePressure,
} = weatherSlice.actions;

export default weatherSlice.reducer;
