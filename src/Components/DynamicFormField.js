
import React, { useState } from 'react';
import FormField from './Form';
import style from './DynamicFormField.module.css'

const DynamicFormField = () => {
  const [formFields, setFormFields] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addFormField = () => {
    console.log(inputValue);
    setFormFields([...formFields, { label: 'New Field', type: inputValue, options: [] }]);
    console.log(formFields);
  };

  const removeFormField = (index) => {
    const updatedFields = [...formFields];
    updatedFields.splice(index, 1);
    setFormFields(updatedFields);
  };

  const handleFieldChange = (index, property, value) => {
    const updatedFields = [...formFields];
    updatedFields[index][property] = value;
    setFormFields(updatedFields);
  };

  return (
    <div className={style.container}>
      <div className={style.addFields}>
        <label>
          Enter Field Type:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <button className={style.add_btn} onClick={addFormField}>Add Field</button>
      </div>

      {formFields.map((field, index) => (
        <FormField
          key={index}
          index={index}
          field={field}
          removeFormField={removeFormField}
          handleFieldChange={handleFieldChange}
        />
      ))}
      <button className={style.save_btn} onClick={() => console.log(JSON.stringify(formFields))}>Submit</button>
    </div>
  );
};

export default DynamicFormField;