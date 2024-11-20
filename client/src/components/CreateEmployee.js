import React, { useState } from "react";
import "./CreateEmployee.css"; // Add CSS for styling

const CreateEmployee = () => {
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        mobile: "",
        designation: "",
        gender: "",
        course: [],
        img: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleFileChange = (e) => {
        setEmployee({ ...employee, img: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add validation and submit logic here
        console.log(employee);
    };

    return (
        <div className="create-employee">
            <h1>Create Employee</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                    required
                />

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={employee.email}
                    onChange={handleChange}
                    required
                />

                <label>Mobile No:</label>
                <input
                    type="number"
                    name="mobile"
                    value={employee.mobile}
                    onChange={handleChange}
                    required
                />

                <label>Designation:</label>
                <select
                    name="designation"
                    value={employee.designation}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    <option value="HR">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales">Sales</option>
                </select>

                <label>Gender:</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="M"
                            onChange={handleChange}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="F"
                            onChange={handleChange}
                        />
                        Female
                    </label>
                </div>

                <label>Course:</label>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="course"
                            value="MCA"
                            onChange={(e) =>
                                handleChange({
                                    target: {
                                        name: "course",
                                        value: [...employee.course, e.target.value],
                                    },
                                })
                            }
                        />
                        MCA
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="course"
                            value="BCA"
                            onChange={(e) =>
                                handleChange({
                                    target: {
                                        name: "course",
                                        value: [...employee.course, e.target.value],
                                    },
                                })
                            }
                        />
                        BCA
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="course"
                            value="BSC"
                            onChange={(e) =>
                                handleChange({
                                    target: {
                                        name: "course",
                                        value: [...employee.course, e.target.value],
                                    },
                                })
                            }
                        />
                        BSC
                    </label>
                </div>

                <label>Image Upload:</label>
                <input
                    type="file"
                    accept=".jpg, .png"
                    onChange={handleFileChange}
                    required
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateEmployee;
