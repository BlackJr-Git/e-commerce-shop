function dateFormatter(dateToFormat) {
  if (dateToFormat) {
    // format
    const date = new Date(dateToFormat);
    return date.toLocaleDateString();
  }
}

export default dateFormatter;
