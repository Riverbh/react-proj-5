import { configureStore } from "@reduxjs/toolkit"
import potentialCountriesReducer from "../redux/slices/potentialCountriesSlice"
import displayedCountryReducer from "../redux/slices/displayCountrySlice"


export default configureStore ({
    reducer: { 
        potentialContries: potentialCountriesReducer,
        displayedCountry: displayedCountryReducer,
    }, 
})