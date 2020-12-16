function FormField(props) {
  return (
    <div className="div-form-field">
      <label htmlFor={props.labelLink}>{props.displayLink}</label>
      <input type="text" name={props.labelLink} value={props.value} onChange={props.handler} />
    </div>
  );
}

export default FormField;
