export const handleChange = (event, setFormData) => {
  const { name, value } = event.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
  }));
};
