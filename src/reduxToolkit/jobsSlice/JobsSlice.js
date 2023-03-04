const { createSlice } = require("@reduxjs/toolkit");
const { getAllJobs } = require("reduxToolkit/extraReducers");

const initialState = {
  loading: false,
  error: "",
  data: [],
  filteredData: []
}

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    filterData: (state, { payload }) => {
      console.log(payload);
      const { priceFrom, priceTo, paymentAmount, levelFrom, levelTo, verified, region, completedJob, skills } = payload;
      if (priceFrom || priceTo) {
        state.filteredData = state.data.filter(({ job }) => {
          console.log(job.price, job.priceRate);
          if (!priceTo) return +priceFrom <= job.price;
          else return +priceFrom <= job.price && +priceTo >= job.priceRate
        })
      }
      // if (levelFrom || levelTo) {
      //   state.filteredData = state.data.filter(({ job }) => {
      //     console.log(job.price, job.priceRate);
      //     if (!levelTo) return +levelFrom <= job.price;
      //     else return +levelFrom <= job.price && +levelTo >= job.priceRate
      //   })
      // }


    }
  },
  extraReducers: builder => {
    builder.addCase(getAllJobs.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllJobs.fulfilled, (state, { type, payload }) => {
      state.loading = false;
      state.data = payload.jobs;
    });
    builder.addCase(getAllJobs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message
    });
  }
})

export const { filterData } = jobsSlice.actions;
export default jobsSlice.reducer;