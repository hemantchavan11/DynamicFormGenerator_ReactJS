// src/components/FormField.js
import React from 'react';

const Form = ({ index, field, removeFormField, handleFieldChange }) => {
  const renderField = () => {
    switch (field.type) {
      case 'text':
      case 'textarea':
        return (
          <input
            type={field.type}
            value={field.label}
            onChange={(e) => handleFieldChange(index, 'label', e.target.value)}
          />
        );
      case 'dropdown':
        return (
          <div>
            <label>{field.label}</label>
            <select
              value={field.label}
              onChange={(e) => handleFieldChange(index, 'label', e.target.value)}
            >
              {field.options.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );
      case 'checkbox':
      case 'radio':
        return (
          <div>
            <input
              type={field.type}
              checked={field.label}
              onChange={(e) => handleFieldChange(index, 'label', e.target.checked)}
            />
            <label>{field.label}</label>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderField()}
      <button onClick={() => removeFormField(index)}>Remove</button>
    </div>
  );
};

export default Form;
