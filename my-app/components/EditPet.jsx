import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const EditPet = (props) => {
    const { id } = useParams();
    const [petInfo, setPetInfo] = useState({});
    const [errors, setErrors] = useState({});
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/pet/${id}`)
            .then(response => {
                setPetInfo(response.data.results);
            })
            .catch(err => {
                console.log("errrr", err);
            });
    }, [id]);

    const changeHandler = (e) => {
        setPetInfo({
            ...petInfo,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/update/${id}`, petInfo)
            .then(response => {
                if (response.data.error) {
                    setErrors(response.data.error.errors);
                } else {
                    history.push("/");
                }
            })
            .catch(err => console.log("errrrrr", err));
    };

    return (
        <div className="container mx-auto py-8">
            <p><Link to={'/'} className="text-blue-500">Go Back</Link></p>
            <form onSubmit={submitHandler} className="bg-white shadow-md rounded-lg p-6">
                <div className="mb-4">
                    <label htmlFor="petName" className="block text-gray-700">Pet Name: </label>
                    <input type="text" name="petName" className="w-full mt-2 p-2 border rounded" onChange={changeHandler} value={petInfo.petName} />
                    <p className="text-red-500">{errors.petName?.message}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="petType" className="block text-gray-700">Pet Type: </label>
                    <input type="text" name="petType" className="w-full mt-2 p-2 border rounded" onChange={changeHandler} value={petInfo.petType} />
                    <p className="text-red-500">{errors.petType?.message}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="petDescription" className="block text-gray-700">Pet Description: </label>
                    <input type="text" name="petDescription" className="w-full mt-2 p-2 border rounded" onChange={changeHandler} value={petInfo.petDescription} />
                    <p className="text-red-500">{errors.petDescription?.message}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="skillOne" className="block text-gray-700">Skill One: </label>
                    <input type="text" name="skillOne" className="w-full mt-2 p-2 border rounded" onChange={changeHandler} value={petInfo.skillOne} />
                    <p className="text-red-500">{errors.skillOne?.message}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="skillTwo" className="block text-gray-700">Skill Two: </label>
                    <input type="text" name="skillTwo" className="w-full mt-2 p-2 border rounded" onChange={changeHandler} value={petInfo.skillTwo} />
                    <p className="text-red-500">{errors.skillTwo?.message}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="skillThree" className="block text-gray-700">Skill Three: </label>
                    <input type="text" name="skillThree" className="w-full mt-2 p-2 border rounded" onChange={changeHandler} value={petInfo.skillThree} />
                    <p className="text-red-500">{errors.skillThree?.message}</p>
                </div>
                <input type="submit" value="Update" className="bg-blue-500 text-white py-2 px-4 rounded" />
            </form>
        </div>
    );
}

export default EditPet;
