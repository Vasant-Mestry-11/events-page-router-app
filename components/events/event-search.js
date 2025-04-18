import { useRef } from "react";
import Button from "../ui/button";
import classes from './event-search.module.css'


export default function EventSearch({
  onSearch
}) {

  const yearRef = useRef();
  const monthRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;

    if (selectedYear && selectedMonth) {
      onSearch(selectedYear, selectedMonth)
    }
  }

  return <form className={classes.form} onSubmit={handleSubmit}>
    <div className={classes.controls}>
      <div className={classes.control}>
        <label htmlFor="year">Year</label>
        <select id="year" ref={yearRef}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>

      <div className={classes.control}>
        <label htmlFor="month">Month</label>
        <select id="month" ref={monthRef}>
          <option value="1">Jan</option>
          <option value="2">Feb</option>
          <option value="3">Mar</option>
          <option value="4">Apr</option>
          <option value="5">May</option>
          <option value="6">Jun</option>
          <option value="7">Jul</option>
          <option value="8">Aug</option>
          <option value="9">Sept</option>
          <option value="10">Oct</option>
          <option value="11">Nov</option>
          <option value="12">Dec</option>
        </select>
      </div>
    </div>
    <Button>Search</Button>
  </form>
}