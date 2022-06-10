import React, { useState, useEffect } from "react";
import Button from "../Button/Button.components";

export default function Form({ onSubmit, onCancel, formInputs, previousData }) {
    const [form, setForm] = useState({});

    useEffect(() => {
        setForm((previousState) => ({
            ...previousState,
            ...previousData
        }));
    }, [previousData]);

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form onSubmit={(event) => onSubmit(event, form)}>
            {formInputs.map(({ defaultValue, label, name, type, id, placeholder }) => {
                return (
                    <div key={name} className="mb-3">
                        <label htmlFor={label}>{label}</label>
                        { type === "textarea"
                            ? <textarea 
                                id={id}
                                name={name}
                                className={"form-control"}
                                value={form[name]}
                                onChange={handleChange}
                                rows="5"
                                placeholder={placeholder}/>
                            : <input 
                                id={id}
                                type={"text"}
                                name={name}
                                className={"form-control"}
                                value={form[name]}
                                onChange={handleChange}/>
                        }
                    </div>
                );
            })}
            <Button children={"Cancel"} handleClick={onCancel} />
            <Button type="submit" className="btn btn-primary" children={"Submit"} />
        </form>
    )
}