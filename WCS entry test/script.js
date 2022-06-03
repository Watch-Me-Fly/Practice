function show_alert() {
    if(!confirm("Do you really want to do this?")) {
      return false;
    }
    this.form.submit();
  }